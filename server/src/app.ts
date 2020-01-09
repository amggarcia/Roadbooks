import express, {Application, Request,Response} from 'express';
import mongoose from 'mongoose';
import router from './Routes/MainRoutes';
require('dotenv').config();

const app : Application = express();

mongoose.connect(process.env.MONGO_CONNECTION || '',{useNewUrlParser : true, useUnifiedTopology : true,useFindAndModify : false});
const connection = mongoose.connection;

connection.on('error',(err) =>{console.log("Failed to connect to the database" + err);})
connection.once('open',() => {console.log("Connected to database")});
app.use(express.json());
app.use('/',router);

app.listen({port: 4000},() =>{
    console.log("Application running on port 4000.");
});