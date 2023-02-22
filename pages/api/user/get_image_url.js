//import { GridFSBucket } from 'mongodb'
//const fs = require('fs')

import clientPromise from "../../../lib/mongodb";


export default async (req, res) => {
    if (req.method === "POST") {
        const data = req.body.user
        let userAccount
        //const data = JSON.parse(req.body)
        //const {phone, username, gender, password} = req.body;

        try {
            const client = await clientPromise;
            const db = client.db(process.env.DB_NAME);
            const users = db.collection("user");
            /* const bucket = new GridFSBucket(db, {
                chunkSizeBytes: 1024,
                bucketName: 'fs'
            }); */
            /* 
            const user = await users.findOne({
                phone: (data?.phone)
            }, { 
                returnDocument: 'after', projection: { 
                    password: 0 
                } 
            }); 
            */

            const result = await users.findOne({
                phone: data?.phone,
            }, { 
                returnDocument: 'after', projection: { password: 0 } }
            )
            
    
            if (result === null || !result.imageURL) {
                res.status(404).send("image not found");
                return;
            }
    
            res.status(200).json(result);
     
            /* res.setHeader({
                "Content-Type": "image/jpeg",
                "Transfer-Encoding": "chunked",
            }) */
    
            /* bucket.openDownloadStreamByName(user.filename)
            .pipe(res)
            .on('error', function(error) {
                console.log(error);
            })
            .on('end', function() {
                console.log('done!');
            }); */
        } catch (err) {
            console.log(err)
            return res.status(503).json({err: err.toString()});
        }
    } else {
        return res.status(405).json({err: 'Not Allowed'})
    }
}
