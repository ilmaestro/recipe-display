import * as express from "express";
import * as path from "path";
import {json, urlencoded} from "body-parser";
import * as compression from "compression";
import {notFound, productionErrorHandler} from "./error-handlers";
import {publicRouter} from "./public-router";

const app: express.Application = express();
app.disable("x-powered-by");

// middleware
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true}));

// routes
app.use("/api/public", publicRouter);

// environment
switch (app.get("env")) {
    case "Production":
        // in production mode run application from dist folder
        app.use(express.static(path.join(__dirname, "/../client")));
        app.use(productionErrorHandler);
        break;
    default:
        break;
}

// handle 404's
app.use(notFound);

// exports
export { app }
