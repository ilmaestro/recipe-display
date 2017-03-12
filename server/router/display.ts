import {Router, Response, Request} from "express";
import * as os from "os";
import * as http from "http";
import {parse as UrlParse} from "url";
import {sse, ISseResponse} from "../sse/sse";
import {IRecipeEvent} from "../../shared";
import {ParserManager} from "../parser";

export const displayRouter = Router();

const openConnections: ISseResponse[] = [];
function broadcast(event: string, data: string) {
    // we walk through each connection
    openConnections.forEach(function(resp, index) {
        console.log("sending data to:", index);
        resp.sse(`event: ${event}\ndata: ${data}\n\n`);
    });
}

function getRecipeEvent(url: string) {
    // determine parser type
    const uri = UrlParse(url);
    const parser = ParserManager.GetParser(uri.host);

    return new Promise<string>((resolve, reject) => {
        const req = http.request({host: uri.host, path: uri.path, port: 80, method: "GET"}, (resp: http.IncomingMessage) => {
            let contents = "";
            resp.on("data", d => {
                contents += d;
            });
            resp.on("end", () => {
                resolve(contents);
            });
        });
        req.end();
    })
    .then((contents) => {
        return parser(url, contents);
    });
}

displayRouter.get("/connect", sse, (req: Request, res: ISseResponse) => {
    // push this res object to our global variable
    openConnections.push(res);
    console.log("Connection Opened", openConnections.length);

    // When the request is closed, e.g. the browser window
    // is closed. We search through the open connections
    // array and remove this connection.
    req.on("close", function() {
        let toRemove;
        for (let j = 0 ; j < openConnections.length ; j++) {
            if (openConnections[j] === res) {
                toRemove = j;
                break;
            }
        }
        openConnections.splice(toRemove, 1);
        console.log("Connections Closed", openConnections.length);
    });
});

displayRouter.get("/testevent", (req: Request, res: Response) => {
    getRecipeEvent("http://www.seriouseats.com/recipes/2017/03/easy-pressure-cooker-pork-chile-verde-recipe.html")
        .then(recipeEvent => {
            broadcast("recipe", JSON.stringify(recipeEvent));
            res.json({message: "OK"});
        })
        .catch((error) => {
            res.json({message: error});
        });
});


displayRouter.post("/recipe", (req: Request, res: Response) => {
    const url = req.body.url || "";
    if (!!url) {
        getRecipeEvent(url)
            .then(recipeEvent => {
                broadcast("recipe", JSON.stringify(recipeEvent));
                res.json({message: "OK"});
            })
            .catch((error) => {
                res.json({message: error});
            });
    } else {
        res.json({message: "No URL"});
    }
});



