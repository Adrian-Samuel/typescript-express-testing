import * as dotenv from "dotenv"
dotenv.config();

import express = require('express');

const PORT = process.env.PORT || 3000;
const app: express.Application = express();

import homeFunctionRoute from "./Controllers/home"

app.get('/home', async (req, res, next)=>{
    await homeFunctionRoute(req,res,next);
});

app.use('/home', async (req, res) => {

    console.log(`In the next call, I produce a name like ${req.query.firstname}`)

});


app.listen(PORT, ()=> console.log("You are listening on port", PORT))