import express from "express";
import { db } from "./db/db.js";
import cors from "cors";
import { comRouter } from "./router/reviewRouter.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(comRouter);


db.sync()
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log("server is running on port", port);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
