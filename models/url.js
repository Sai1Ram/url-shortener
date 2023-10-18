import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId:{
        require:true,
        unique: true,
        type: String
    },
    redirectURL:{
        require:true, 
        type:String
    },
    visitHistory: [{ timestamp: { type: Number } }],
},
{timestamps:true}
)

const URL = mongoose.model('urls', urlSchema);

export default URL