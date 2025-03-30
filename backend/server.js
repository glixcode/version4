import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log("hello world");
})

app.get('/',(request, response)=> {

    response.status(200).json({success: true})

})

