import express from "express"
import mongoose from "mongoose"

// const express = require('express');
// const mongoose = require('mongoose');
const app = express();

//Conectar nuestra BBDD
const connectBD = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://root:root@cluster0.i04c4yl.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB conecta en: ${url}`);
    } catch (error) {
        console.log(`error`);
        process.exit(1); // normalmente node acaba los procesos con 0.Forzar proceso termine
    }
};
//Conectando nuestra BBDD
connectBD();

app.get('/', (req, res) => {
    res.send('Express JS on Vercel or not');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

const port = process.env.PORT || 8080;

app.listen(port, (err, res) => {
    if (err) {
        console.log(err);
        return res.status(500).send(err.message);
    } else {
        console.log('[INFO] Server Running on port:', port);
    }
});
