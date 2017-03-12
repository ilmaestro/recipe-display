import {IRecipeEvent} from "../../shared";
import {SeriousEats} from "./serious-eats.parser";

export type Parser = (url: string, content: string) => IRecipeEvent;
export class ParserManager {
    private static registry: { [key: string]: Parser } = {
        "www.seriouseats.com": SeriousEats
    };

    public static GetParser(host: string): Parser {
        return ParserManager.registry[host];
    }
}
