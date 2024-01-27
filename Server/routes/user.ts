import { Router, Request, Response } from "express";
import { PrismaClient } from "../prisma/generated/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
dotenv.config()



const db = new PrismaClient()





export const userRouter: Router = Router();


const handler = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;

	const saltRounds = 10; 


	const existing_user = await db.user.findUnique({
		where: { email }
	});

	if (existing_user) {
		return res.status(400).json({
			error: 'User Already Exists'
		})
	}

	const hash = await bcrypt.hash(password,saltRounds)

	const new_User = await db.user.create({
		data: { 
			username: username,
			email: email,
			password: hash,
		}

	})
	const userId = uuidv4();
	if (process.env.Secret_key) {
		const token = jwt.sign({ userId }, process.env.Secret_key);
		res.status(201).json({
		TOKEN: token,
		Details : new_User
		
	
		})

		console.log(token, new_User)
	
	
	} else {
		throw new Error("Env Not Found");
		
}
	

	


}


userRouter.post("/user", handler)


