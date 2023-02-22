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

        if (songs_nav[0] === 'post_index') {
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
        } else if (songs_nav[0] === 'me') {
            const db = getDb();
            const collection = db.collection("song");
    
            const songs = await collection
                .find({ userId: req.auth.id })
                .sort({ date: -1 })
                .toArray();
            res.status(200).json(songs);
        } else if (songs_nav[0] === 'get_index') {
            const db = getDb();
            const collection = db.collection("song");

            let filter = {};

            if (typeof req.query.user === "string") {
                filter = { userId: new ObjectId(req.query.user) };
            }

            const songs = await collection
                .find(filter)
                .sort({ date: -1 })
                .toArray();
            res.status(200).json(songs);
        } else if (songs_nav[0] === 'get_recommend') {
            const db = getDb();
            const collection = db.collection("song");

            // /songs/recommend?limit=N
            const limit = parseInt(req.params.limit) || 20;

            // Array of song IDs
            const favourites = req.user.favourites;

            let suggestions;

            if (!favourites) {
                // Getting any songs
                const songs = await collection
                    .find({}, { limit, projection: { _id: 1 } })
                    .toArray();
                suggestions = songs.map((song) => song._id);
            } else {
                // Suggesting
                const favouriteCluster = await getFavouriteCluster(favourites);
                suggestions = await getSuggestions(favouriteCluster, favourites);
            }

            res.status(200).json(suggestions);
        } else if (songs_nav[0] === 'get_id') {
            const db = getDb();
            const collection = db.collection("song");

            const song = await collection.findOne({
                _id: new ObjectId(req.params.id),
            });

            if (song === null) {
                res.status(404).send("Song not found");
                return;
            }

            res.status(200).json(song);
        } else if (songs_nav[0] === 'put_id') {
            const db = getDb();
            const collection = db.collection("song");
    
            let cluster;
    
            if (req.file?.filename) {
                const model = getModel();
                cluster = await predictFromGridFS(model, req.file.filename);
            }
    
            await collection.updateOne(
                { userId: req.auth.id, _id: req.body.id },
                {
                    $set: {
                        filename: req.file?.filename,
                        title: req.body.title,
                        duration: req.body.duration,
                        genre: req.body.genre,
                        lyrics: req.body.lyrics,
                        cluster,
                    },
                }
            );
            res.status(200).json("Updated successfully");
        } else if (songs_nav[0] === 'delete_id') {

            const db = getDb();
            const collection = db.collection("song");

            await collection.deleteOne({ userId: req.auth.id, _id: req.body.id });
            res.status(200).json("Deleted successfully");
        } else if (songs_nav[0] === 'get_id_stream') {

            const bucket = getBucket();
            const db = getDb();
            const collection = db.collection("song");

            const song = await collection.findOne({
                _id: new ObjectId(req.params.id),
            });

            if (song === null) {
                res.status(404).send("Song not found");
                return;
            }

            res.status(200);

            res.set({
                "Content-Type": song.mimeType,
                "Transfer-Encoding": "chunked",
            });

            bucket.openDownloadStreamByName(song.filename).pipe(res);
        } else if (songs_nav[0] === 'post_id_favorite') {
            const db = getDb();
            const collection = db.collection("song");
            const songId = new ObjectId(req.params.id);

            const song = await collection.findOne({
                _id: new ObjectId(req.params.id),
            });

            // Check if the song exists
            if (song === null) {
                res.status(404).send("Song not found");
                return;
            }

            const favourites = req.user.favourites ?? [];

            // Define the operator on the favourites list
            const operator = favourites.find((id) => id.equals(songId))
                ? "$pull"
                : "$push";

            await db.collection("user").updateOne(
                {
                    _id: req.auth.id,
                },
                {
                    [operator]: { favourites: songId },
                }
            );

            // Update the user variable in the request
            req.user = await db
                .collection("user")
                .findOne({ _id: req.auth.id });
            res.status(200).json(req.user.favourites);
        }        
    })()
}


