import * as express from "express";

export const notFound = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.originalUrl === "/favicon.ico") {
        next();
        return;
    }
    const err = new Error(`404 Not Found - ${req.originalUrl}`);
    next(err);
};

export const productionErrorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
};
