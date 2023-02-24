//import { ValidateProps } from '@/api-lib/constants';
//import { findUserByUsername, updateUserById } from '@/api-lib/db';
//import { auths, validateBody } from '@/api-lib/middlewares';
//import { getMongoDb } from '@/api-lib/mongodb';
//import { slugUsername } from '@/lib/user';
import { v2 as cloudinary } from 'cloudinary';
const fs = require("fs");
import { ncOpts } from '@/lib/nc';
import multer from 'multer';
import nc from 'next-connect';
//import { GridFsStorage } from "multer-gridfs-storage";
import clientPromise from '@/lib/mongodb'
//import * as allFiles from __dirname

//const storage = new GridFsStorage({ url: process.env.MONGODB_URI})//'mongodb://127.0.0.1:27017' });
/* const storage = new GridFsStorage({
  url: process.env.MONGODB_URI,
  file: (req, file) => {    
    return {
      filename: file.originalname
    };    
  }
}); */
const upload = multer({ dest: './public/data/uploads/' });

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

//handler.use(...auths);
 
/* handler.get(async (req, res) => {
  if (!req.user) return res.json({ user: null });
  return res.json({ user: req.user });
});
 */

handler.patch(
  upload.single('profilePicture'),
  /* validateBody({
    type: 'object',
    properties: {
      username: ValidateProps.user.username,
      name: ValidateProps.user.name,
      bio: ValidateProps.user.bio,
    },
    additionalProperties: true,
  }), */
  async (req, res) => {
    /* if (!req.user) {
      req.status(401).end();
      return;
    } */

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const users = db.collection("user");

      //const model = getModel();
      if (!req?.file?.filename) {
          res.status(400).send("File not uploaded");
          return;
      }


      //const cluster = await predictFromGridFS(model, req?.file.filename);

      let imageURL
      if (req.file) {
        const image = await cloudinary.uploader.upload(req.file.path, {
          width: 512,
          height: 512,
          crop: 'fill',
        });
        imageURL = image?.secure_url;        
      }
      
      const result = await users.findOneAndUpdate(
        { phone: req.body.phone },
        { $set: {
          imageURL
        }
       },
        { returnDocument: 'after', projection: { password: 0 } }
      )
      .then(({ value }) => {
        return value
      });
      /* insertOne({
          userId: req.auth.id,
          filename: req?.file.filename,
          mimeType: req?.file.mimetype,
          title: req.body.title,
          duration: req.body.duration,
          //genre: req.body.genre,
          //lyrics: req.body.lyrics,
          uploaded: new Date(),
        //  cluster: cluster,
      });
 */

//      try {

        /* fs.unlinkSync(__dirname + '/file.txt');
      
        console.log("Delete File successfully.");
      } catch (error) {
        console.log(error);
      } */

      fs.unlink(req.file.path, resultHandler);

      res.status(200).json(result);
  }
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
