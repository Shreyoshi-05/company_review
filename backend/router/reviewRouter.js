import express from "express";
import { addReview, deleteReview, findByName, showReview } from "../controller/reviewController.js";

export const comRouter = express.Router();

comRouter.post("/reviews", addReview);
comRouter.get("/reviews", showReview);
comRouter.delete("/reviews/:id", deleteReview);
comRouter.get("/reviews/search", findByName);