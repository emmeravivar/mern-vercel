const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();
const usersRoutes = require('./routes/User.routes.js'); 

//Configurando dotenv
dotenv.config(); // busca un archivo .env

//Conectar nuestra BBDD
const connectBD = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
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

app.use("/api/user", usersRoutes);

const port = process.env.PORT || 8080;

app.listen(port, (err, res) => {
    if (err) {
        console.log(err);
        return res.status(500).send(err.message);
    } else {
        console.log('[INFO] Server Running on port:', port);
    }
});
