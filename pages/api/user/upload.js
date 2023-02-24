import { v2 as cloudinary } from 'cloudinary';
const fs = require("fs/promises");
import { ncOpts } from '@/lib/nc';
import multer from 'multer';
import nc from 'next-connect';
//import { GridFsStorage } from "multer-gridfs-storage";
import clientPromise from '@/lib/mongodb'
//import * as allFiles from __dirname


//const upload = multer({ dest: './public/data/uploads/' });

//console.log(allFiles?.length)


const handler = nc(ncOpts);

if (process.env.CLOUDINARY_URL) {
  const {
    hostname: cloud_name,
    username: api_key,
    password: api_secret,
  } = new URL(process.env.CLOUDINARY_URL);

  cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
  });
}


let resultHandler = function (err) {
  if (err) {
      console.log("unlink failed", err);
  } else {
      console.log("file deleted");
  }
}

const dest = './public/data/uploads/'
const cpUpload = multer({ dest })
  .fields([{ name: 'file', maxCount: 1 }, { name: 'songFile', maxCount: 1 }])

handler.patch(
  cpUpload, 
  async (req, res) => {  
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const users = db.collection("user");
    const songs = db.collection("song");

      //const model = getModel();
      if (!req?.files) {
          res.status(400).send("File not uploaded");
          return;
      }

      //const cluster = await predictFromGridFS(model, req?.file.filename);

      let imageURL, songURL

      try {
        if (req.files) {
          const image = await cloudinary.uploader.upload(req.files['file'][0].path, {
            width: 512,
            height: 512,
            crop: 'fill',
          });
          imageURL = image?.secure_url;


          const song = await cloudinary.uploader.upload(req.files['songFile'][0].path, {
            resource_type: "video"
          });
          songURL = song?.secure_url;        
        
        }    

        const { 
          songName, 
          artist, 
          composer, 
          lyricist, 
          musicDirector, 
          genre, 
          lyrics, 
          price,
          uploaderPhone
        } = req.body
        
        const data = {    
          songName, 
          artist, 
          composer, 
          lyricist, 
          musicDirector, 
          genre, 
          lyrics, 
          price,
          created: Date.now(),
          totalListener: 0,
          totalStream: 0,
          imageURL,
          songURL,
          uploaderPhone
        }

        //to implement 
        //recently played
        //total earned
        //Country	
        //City	
        //Number Of Listeners by country and city
        //totalCountryWhereStreamed: 0,

        await songs.insertOne(data);
        
        fs.rm(dest, { recursive: true, force: true });

        res.status(200).json(data);

      } catch(err) {
        console.log(err)

        res.status(500).end({err})
      }      
  }
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
