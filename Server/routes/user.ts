import { Router, Request, Response } from "express"
// import { PrismaClient } from "../prisma/generated/client"

// const db = new PrismaClient()


export const userRouter: Router = Router();


const handler = (req: Request, res: Response) => {
	const data = req.body;
	console.log(data)
	res.send("User Api")
}

const exampleHandler = (req: Request, res: Response) => {
	res.send("Exmaple Testing")
}


userRouter.post("/user", handler)
userRouter.get("example", exampleHandler)

