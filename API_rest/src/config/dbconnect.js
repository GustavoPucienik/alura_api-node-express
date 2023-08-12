import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@cluster0.yijipzg.mongodb.net/");


const db = mongoose.connection;

export default db;