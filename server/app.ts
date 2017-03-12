import * as express from "express";
import * as path from "path";
import {json, urlencoded} from "body-parser";
import * as compression from "compression";
import {notFound, productionErrorHandler} from "./error-handlers";
import {publicRouter, displayRouter} from "./router";

// process.env.NODE_ENV = "production";

const app: express.Application = express();
app.disable("x-powered-by");

// middleware
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true}));

// routes
app.use("/api/public", publicRouter);
app.use("/api/display", displayRouter);

// environment
switch (app.get("env")) {
    case "production":
        console.log("using production environment...");
        // in production mode run application from dist folder
        app.use(express.static(path.join(__dirname, "/../client")));
        app.use(productionErrorHandler);
        break;
    default:
        console.log("default environment:", app.get("env"));
        break;
}

// handle 404's
app.use(notFound);

// exports
export { app }
