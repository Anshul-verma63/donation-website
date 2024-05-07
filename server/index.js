import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./db/dbConnect.js";
import checkoutRouter from "./routes/checkoutRouter.js";
import router from "./routes/messageRouter.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
//midlleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("i am server");
});

app.use("/api/v1/message", router);
app.use("/api/v1", checkoutRouter);

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});

//db connection
dbConnection();
