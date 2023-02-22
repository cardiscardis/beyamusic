import NextAuth from 'next-auth'
import { randomBytes } from "crypto";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";
const bcrypt = require('bcryptjs');
//const jose = require('jose')


let userAccount = null;


const confirmPasswordHash = (plainPassword, hashedPassword) => {
    return new Promise(resolve => {
        bcrypt.compare(plainPassword, hashedPassword, function(err, res) {
            resolve(res);
        });
    })
}

const configuration = {
    cookie: {
        secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
    },
    jwt: {
        secret: process.env.SECRET,
    },    
    session: {
        strategy: 'jwt',
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                //console.log(credentials)
                try {
                    const client = await clientPromise;
                    const db = client.db(process.env.DB_NAME);
                    const users = db.collection("user");

                    if (!credentials.phone || !credentials.password) return null

                    const user = await users.findOne({
                        phone: credentials.phone,
                    });
             

                    if (user !== null)
                    {
                        //Compare the hash
                        const res = await confirmPasswordHash(credentials.password, user.password);
                        if (res === true)
                        {
                            const userAccount = {
                                userId: user._id,
                                username: user.username,
                                phone: user.phone,
                                gender: user.gender,
                                imageURL: user.imageURL
                                //isActive: user.isActive
                            };
                            return userAccount
                        }
                        else
                        {
                            console.log("Hash not matched logging in");
                            return null
                        }
                    }
                    else {

                        if (!credentials.username || !credentials.gender) return new Error()
                        const pass = await bcrypt.hash(credentials.password, 0);
            
                        await users.insertOne({
                            phone,
                            username,
                            gender,
                            password: pass
                        });

                        const userAccount = {                            
                            username: credentials.username,
                            phone: credentials.phone,
                            gender: credentials.gender,
                            imageURL: null
                            //isActive: user.isActive
                        };
                        return userAccount
                    }
                }
                catch (err)
                {
                    console.log("Authorize error:", err);
                    return new Error()
                }

            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {           
            return true
        },
        async jwt({ token, user, account, profile, isNewUser }) {
           
            if (user) token.user = user
            return token
        },
        async session({ session, user, token }) {
            
            session.user = token.user            
            return session
        }        
    }
}
export default (req, res) => NextAuth(req, res, configuration)