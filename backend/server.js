const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//const AuthToken = require('./middlewares/AuthToken');

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const authRouter = require('./routes/auth');
const torneoRouter = require('./routes/torneo');
const usersRouter = require('./routes/user');

//app.use(AuthToken);

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/torneo', torneoRouter)
app.use('/user', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});