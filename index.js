import express from 'express'
import connectWithDatabase from './connectDB.js';
import router from "./router/url.js";
import URL from './models/url.js';
const app = express();
const PORT = 5000;

connectWithDatabase();
app.use(express.json());
app.use("/url", router);
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOne(
      {
        shortId,
      }
    );
    res.redirect(entry.redirectURL);
  });

app.listen(PORT, ()=>{console.log("listen on port "+PORT);})