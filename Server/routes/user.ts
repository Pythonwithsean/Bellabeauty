import { Router, Request, Response } from "express"



export const userRouter: Router = Router();


const handler = (req: Request, res: Response) => {
	res.send("User Api")
}


userRouter.get("/user", handler )