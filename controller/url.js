import { nanoid } from "nanoid";
import URL from '../models/url.js'
const generateShorternUrl = async (req, resp) => {
    const body = req.body;
    if(!body.url){
        return resp.status(400).json({error:"Please give the URL"})
    }
    const shortId = nanoid(8);
    await URL.create({
        shortId,
        redirectURL:body.url,
        visitHistory:[{timestamp:Date.now()}]
    });

    return resp.json({id:shortId});
}
export default generateShorternUrl