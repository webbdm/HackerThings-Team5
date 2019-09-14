import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';

import express from 'express';
import routes from './routes';

import models, { sequelize } from './models';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
    req.context = {
        models
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/items', routes.item);


sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}!`)
    });
});