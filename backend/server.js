import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/database.js";
import mainRoute from "./router/main.route.js";

import cors from "cors";

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(PORT,() => {
    dbConnection();
    console.log(`Serving Running at Port: ${PORT}`);
})

app.use('/api', mainRoute);
// CATCH ALL THE UNKNOWN ENDPOINTS
app.use((req, res)=> {res.send('Nothing to show in this page.')});

