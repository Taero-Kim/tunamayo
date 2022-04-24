import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.post("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default router;
