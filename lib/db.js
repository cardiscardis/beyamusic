import { GridFSBucket } from "mongodb";
import clientPromise from './db'

let db;
let bucket;

export const connectToServer = async () => {
    try {
        const client = await clientPromise;
        db = client.db(process.env.DB_NAME);
        bucket = new GridFSBucket(db);
        console.log("Successfully connected to MongoDB.");
    } catch (e) {
        console.error(e);
    }
};

const getDb = () => db;

export const getBucket = () => bucket;

export default getDb;
