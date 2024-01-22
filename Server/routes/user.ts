import { Router, Request, Response } from "express"
import { PrismaClient } from "../prisma/generated/client"

const db = new PrismaClient()




export const userRouter: Router = Router();


const handler = (req: Request, res: Response) => {
	res.send("User Api")
}


userRouter.get("/user", handler )