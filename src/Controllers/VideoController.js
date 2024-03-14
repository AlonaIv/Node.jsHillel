import { uploadVideo as upload } from "../Services/VideoService.js";

const uploadVideo = async (req, res) => {
    const result = await upload(req, res);

    res.status(result.code).send(result);
};

export { uploadVideo };