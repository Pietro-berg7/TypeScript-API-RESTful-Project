import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieController";

// validations
import { validate } from "./middleware/handleValidations";
import { movieCreateValidation } from "./middleware/movieValidations";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working!");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie);
