import express from "express";
import { db } from "./db/db.js";
import cors from "cors";
import { comRouter } from "./router/reviewRouter.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(comRouter);
app.use((req,resizeBy,next)=>res.status(404).json({
  message:"Route not found",
  success:false
}))


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
