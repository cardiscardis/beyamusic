import { Filter, ObjectId } from "mongodb";
import getDb, { getBucket } from "../../../../lib/db";
//import { Song, User } from "../db/types";
//import { Request } from "../types";
//import verifyAuth from "../middlewares/verifyAuth";
import upload from "../upload";
/* import getModel from "../engine/kmeans";
import {
    getFavouriteCluster,
    getSuggestions,
    predictFromGridFS,
} from "../engine/predict"; */

export default function handler(req, res) {

    //router.use(verifyAuth());
    const { songs_nav } = req.query

    (async() => {       
        
        upload.single("song")

        const db = getDb();
        const collection = db.collection("song");
        const model = getModel();
        if (!req.file?.filename) {
            res.status(400).send("File not uploaded");
            return;
        }

        //const cluster = await predictFromGridFS(model, req.file.filename);

        //specify unique on filename field
        const result = await collection.insertOne({
            userId: req.auth.id,
            filename: req.file.filename,
            mimeType: req.file.mimetype,
            title: req.body.title,
            duration: req.body.duration,
            genre: req.body.genre,
            lyrics: req.body.lyrics,
            uploaded: new Date(),
            streamed: Number()
            //  cluster: cluster,
        });

        res.status(200).json(result);
    
    })()
}


/**
 * import mongoose from "mongoose";
export default async (req, res) => {
  const {
    query: { stream },
    method,
    } = req;

    const conn = await mongoose.createConnection(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

    const bucket = new mongoose.mongo.GridFSBucket(conn.db ,  {bucketName :'anyname'})
   
  switch (method) {
    case "GET":
          try {
            const _id = new mongoose.Types.ObjectId(stream)
              bucket.find({_id}).toArray((err, files) => {
                  if (err) {
                      return res.status(400).send({ err: err })
                  }
                     if (!files || files.length === 0) {
                         return res.status(400).send("no file exist")
                      }
                  bucket 
                   .openDownloadStream(_id)
                   .pipe(res)  
                })
          
      } catch (error) {
        res.status(400).json({ succes: false, err: error });
      }
          break;
      
    default:
      res.send("default");
      break;
  }
};

export const config = {
  api: {
    externalResolver: true,
  },
};
 */