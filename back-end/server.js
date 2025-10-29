const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
// const cors = require('cors');
// const bodyParser = require('body-parser');

const server = express();
// server.use(cors());
// server.use(bodyParser.json());
server.use(express.json())



server.listen(PORT, () => {
    console.log(`Le serveur a démarré sur le port ${PORT}`);
});