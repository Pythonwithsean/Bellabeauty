import { Request, Response, Router } from "express";


export const productRouter: Router = Router()

const handler = async (req: Request, res: Response) => { 
	const data =  await req.body
	console.log(data)
	res.send("Product Api")
}


productRouter.get("/", handler)


