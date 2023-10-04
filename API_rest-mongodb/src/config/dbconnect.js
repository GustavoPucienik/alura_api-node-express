import mongoose, { mongo } from "mongoose";

async function conectaDatabase(){
mongoose.connect(process.env.DB_CONNECT);
return mongoose.connection;
}; 

export default conectaDatabase;
