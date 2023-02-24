/* import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import Models from "../models";
import { randomBytes } from "crypto";

// Simple universal (client/server) function to split host and path
// We use this rather than a library because we need to use the same logic both
// client and server side and we only need to parse out the host and path, while
// supporting a default value, so a simple split is sufficent.
// https://raw.githubusercontent.com/nextauthjs/next-auth/main/src/lib/parse-url.js
const parseUrl = (url) => {
  // Default values
  const defaultHost = "http://localhost:3000";
  const defaultPath = "/api/auth";

  if (!url) {
    url = `${defaultHost}${defaultPath}`;
  }

  // Default to HTTPS if no protocol explictly specified
  const protocol = url.match(/^http?:\/\//) ? "http" : "https";

  // Normalize URLs by stripping protocol and no trailing slash
  url = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  // Simple split based on first /
  const [_host, ..._path] = url.split("/");
  const baseUrl = _host ? `${protocol}://${_host}` : defaultHost;
  const basePath = _path.length > 0 ? `/${_path.join("/")}` : defaultPath;

  debugger;
  return {
    baseUrl,
    basePath,
  };
};

const { basePath, baseUrl } = parseUrl(
  process.env.NEXTAUTH_URL || process.env.VERCEL_URL
);

const adapter = Adapters.TypeORM.Adapter(
  // The first argument should be a database connection string or TypeORM config object
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/database
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // The first argument should be a database connection string or TypeORM config object
  process.env.DATABASE_URL,
  // The second argument can be used to pass custom models and schemas
  {
    models: {
      User: Models.User,
    },
  }
);

// credentials will have name and email field and so === profile
const provider = Providers.Email({
  server: process.env.EMAIL_SERVER,
  from: process.env.EMAIL_FROM,
});

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const myOptions = {
  adapter,
  baseUrl,
  // https://next-auth.js.org/configuration/providers
  providers: [provider],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/database
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a seperate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    signIn: async (user, account, profile) => {
      console.log(user, account, profile);
      debugger;
      return Promise.resolve(true);
    },
    // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
    // session: async (session, user) => { return Promise.resolve(session) },
    // jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token) }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: true,
};

const options = {
  providers: [provider,
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        name: { label: "username", type: "text", placeholder: "pg" }, // I can already predict mixing name / and username is gonna get hairy... just comment with the alt every tiem
        email: { label: "email", type: "email" },
      },
      authorize: async (credentials) => {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

        const {
          getUserByEmail,
          createUser,
          createVerificationRequest,
        } = await adapter.getAdapter(myOptions);

        const user = await getUserByEmail(credentials.email);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user);
        } else {
          // If you return null or false then the credentials will be rejected
          if (!credentials.name || !credentials.email) {
            return Promise.reject(new Error("please enter username and email")); // Redirect to error page
          }

          await createUser(credentials);

          const identifier = credentials.email;
          const token = randomBytes(32).toString("hex");
          const secret = provider.secret || myOptions.secret;

          const url = `${baseUrl}${basePath}/callback/${encodeURIComponent(
            provider.id
          )}?email=${encodeURIComponent(
            credentials.email
          )}&token=${encodeURIComponent(token)}`;

          debugger
          await createVerificationRequest(
            identifier,
            url,
            token,
            secret,
            provider
          );

          // then we fire off email and redirect user to the check your email page
          return Promise.reject(
            "/checkYaEmail"
          );
          // You can also Reject this callback with an Error or with a URL:
          // return Promise.reject(new Error('error message')) // Redirect to error page
          // return Promise.reject('/path/to/redirect')        // Redirect to a URL
        }
      },
    }),
  ],
};

export default (req, res) => {
  return NextAuth(req, res, {...myOptions, ...options } );
}; */