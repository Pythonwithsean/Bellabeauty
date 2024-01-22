import { Request, Response, Router } from "express";


export const productRouter: Router = Router()

const handler = (req: Request, res: Response) => { 
	res.send("Product Api")
}


productRouter.get("/", handler)


