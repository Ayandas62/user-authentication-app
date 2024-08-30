const express = require("express")
const app = express();
const cors = require("cors");

require('dotenv').config();

const PORT = process.env.PORT || 4000

const router = require("./routes/UserRoute");

const cookieParser =  require('cookie-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors({
        origin:'http://localhost:3000'
}))
app.use(express.json())
app.use(cookieParser())
require("./config/dbConnect").dbConnect()
app.use("/api/v1",router);


app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Successfully server runing up"
    })
})
app.listen(PORT,()=>{
    console.log(`App Successfully runing on ${PORT}`)
})
