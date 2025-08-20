import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export async function connectDB() {
  try {
    console.log("testt", process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1);
  }
}