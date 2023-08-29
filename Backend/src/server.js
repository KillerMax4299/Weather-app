const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: "./.env" });
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require('./Routes')
app.use('', router)

// console.log(process.env)
app.listen(3000, console.log("\x1b[35mAPI server is http://localhost:3000\x1b[0m"));
