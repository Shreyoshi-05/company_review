import express from "express";
import { addReview, alldeleteReview, findByName, showReview } from "../controller/reviewController.js";

export const comRouter = express.Router();

comRouter.post("/reviews", addReview);
comRouter.get("/reviews", showReview);
comRouter.delete("/reviews/:id", alldeleteReview);
comRouter.get("/reviews/search", findByName);