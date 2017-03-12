import {Router, Response, Request} from "express";
import * as os from "os";
import {sse, ISseResponse} from "../sse/sse";

export const eventsRouter = Router();

const openConnections: ISseResponse[] = [];
function broadcast(event: string, data: string) {
    // we walk through each connection
    openConnections.forEach(function(resp, index) {
        console.log("sending data to:", index);
        resp.sse(`event: ${event}\ndata: ${data}\n\n`);
    });
}

interface IRecipeEvent {
    url: string;
    ingredientsBody: string;
    directionsBody: string;
}

function getRecipeEvent(url: string) {
    return {
        url: url,
        ingredientsBody: "<ul><li>ingredient1</li><li>ingredient2</li></ul>",
        directionsBody: "<h3>directions</h3><p>here are some <em>directions</em></p>"
    };
}

eventsRouter.get("/", sse, (req: Request, res: ISseResponse) => {
    // push this res object to our global variable
    openConnections.push(res);
    console.log("Connection Opened", openConnections.length);
    res.sse("data: im from the server\n\n");

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

eventsRouter.get("/testevent", (req: Request, res: Response) => {
    const recipeEvent = getRecipeEvent("http://www.seriouseats.com/recipes/2017/03/easy-pressure-cooker-pork-chile-verde-recipe.html");
    broadcast("recipe", JSON.stringify(recipeEvent));
    res.json({message: "OK"});
});

eventsRouter.post("/url", (req: Request, res: Response) => {
    const url = req.body.url || "";
    if (!!url) {
        broadcast("recipe", url);
    }
    res.json({message: "OK"});
});



