import express, { Request, Response, Router } from "express";
import Auth from "../middleware/Auth";

const router: Router = express.Router();


router.get("/posts", Auth, (req: Request, res: Response) => {
    res.send({
        data: [
            {
                id: 1,
                title: "Post 1",
                content: "This is the content of post 1"
            },
            {
                id: 2,
                title: "Post 2",
                content: "This is the content of post 2"
            }
        ]
    });
})

export default router;