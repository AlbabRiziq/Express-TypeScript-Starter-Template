import express, { Router, Express, Request, Response } from "express";
import dotenv from "dotenv";

// IMPORT ALL CONTROLLERS

import PostController from "./Controllers/Post";

dotenv.config();
const app: Express = express();
const router: Router = express.Router();
const port = process.env.PORT || 3000;

app.use(router)
app.use(PostController);


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});