import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    methods: "*",
  })
);

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server is running at port", process.env.PORT);
});
