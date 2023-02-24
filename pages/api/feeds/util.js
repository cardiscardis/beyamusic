/* import { Readable, Stream } from "stream";

export const isStream = (input) => {
    return (
        input instanceof Stream &&
        typeof (input)._read === "function"
    );
};

export const streamToBuffer = (stream) => {
    const buffers = [];
    stream.on("readable", () => {
        for (;;) {
            const buffer = stream.read();
            if (!buffer) {
                break;
            }
            buffers.push(buffer);
        }
    });

    return new Promise((resolve, reject) => {
        stream
            .on("end", () => {
                const buffer = Buffer.concat(buffers);
                resolve(buffer);
            })
            .on("error", (err) => reject(err));
    });
};

 */