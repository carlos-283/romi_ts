import express from "express"
import bodyParser from "body-parser"
import {connectDB} from "../src/db"

const app = express();

app.use(bodyParser.json());

connectDB()

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});