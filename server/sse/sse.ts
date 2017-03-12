import {Response, Request, NextFunction} from "express";

export interface ISseResponse extends Response {
    sse: (message: string) => void;
    flush?: () => void;
}

export function sse(req: Request, res: ISseResponse, next: NextFunction) {
    req.socket.setKeepAlive(true);
    req.socket.setTimeout(0);

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.status(200);

    res.write("retry: 10000\n");
    res.write("event: connecttime\n");
    res.write("data: " + (new Date()) + "\n\n");
    res.write("data: " + (new Date()) + "\n\n");

    // export a function to send server-side-events
    res.sse = function sse(string) {
        res.write(string);

        // support running within the compression middleware
        if (res.flush && string.match(/\n\n$/)) {
            res.flush();
        }
    };

    // keep the connection open by sending a comment
    const keepAlive = setInterval(() => {
        res.sse(":keep-alive\n\n");
    }, 20000);

    // cleanup on close
    res.on("close", () => {
        clearInterval(keepAlive);
    });

    next();
}
