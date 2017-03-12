import {Router, Response, Request} from "express";

export const publicRouter = Router();

publicRouter.get("/", (req: Request, res: Response) => {
    res.json({
        title: "greetings",
        text: "hello web"
    });
});
