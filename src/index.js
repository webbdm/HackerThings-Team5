import cors from "cors";
import bodyParser from "body-parser";

import express from "express";
import routes from "./routes";

import models, { sequelize } from "./models";


const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
});

// app.use("/session", routes.session);
// app.use("/users", routes.user);
// app.use("/items", routes.item);
app.get('/', (req, res) => res.send('Hackathon 2019'));

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    return [{ message: "Testing" }];
  });
});
