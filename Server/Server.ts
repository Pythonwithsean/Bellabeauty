import express, { Express, Request, Response } from "express";
import { productRouter } from "./routes/product";
import cors from "cors";
import { userRouter } from "./routes/user";
const app: Express = express();

const PORT = 7000;
app.use(cors());
app.use(express.json());

app.use("/products-api", productRouter);
app.use("/auth", userRouter);

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello Sean");
});

app.listen(PORT, () => {
  console.log(`Server connectec at ${PORT}`);
});
