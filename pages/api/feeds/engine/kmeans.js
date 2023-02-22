import { KMeans, setBackend, fromJSON, StandardScaler } from "scikitjs";
import * as tf from "@tensorflow/tfjs-node";
import fs from "fs/promises";
import path from "path";
import { StaticPool } from "node-worker-threads-pool";

setBackend(tf);

const MODEL_FILE = path.join(__dirname, "model.json");

let model;

const pool = new StaticPool({
    size: 3,
    task: path.join(__dirname, "worker.js"),
});

export const load = async () => {
    try {
        const data = await fs.readFile(MODEL_FILE);
        model = await fromJSON(data.toString());
    } catch {
        model = new KMeans();
    }
};

export const save = async () => {
    const data = await model.toJSON();
    await fs.writeFile(MODEL_FILE, data);
};

export const trainWithAudio = async (dir) => {
    const files = await fs.readdir(dir);

    const data = [];

    let filename;

    for (let i = 40; i < files.length; i++) {
        filename = files[i];
        const filepath = path.join(dir, filename);

        const features = await pool.exec(filepath);
        console.log(i, features);
        data.push(features);
    }

    const vector = new StandardScaler().fitTransform(data);
    console.log("data", vector.arraySync());
    model.fit(vector);
};

const getModel = () => model;
export default getModel;
