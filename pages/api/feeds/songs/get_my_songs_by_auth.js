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

        const db = getDb();
        const collection = db.collection("song");

        const songs = await collection
            .find({ userId: req.auth.id })
            .sort({ date: -1 })
            .toArray();
        res.status(200).json(songs);
    
    })()
}


