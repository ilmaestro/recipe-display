import {IRecipeEvent} from "../../shared";
import {SeriousEats} from "./serious-eats.parser";
import {ChowHound} from "./chowhound.parser";
import {Food} from "./food.parser";
import {MarthaStewart} from "./martha-stewart.parser";
import {CookingNYTimes} from "./cooking-nytimes.parser";

export type Parser = (url: string, content: string) => IRecipeEvent;
export class ParserManager {
    private static registry: { [key: string]: Parser } = {
        "www.seriouseats.com": SeriousEats,
        "www.food.com": Food,
        "www.marthastewart.com": MarthaStewart,
        "www.chowhound.com": ChowHound,
        "cooking.nytimes.com": CookingNYTimes
    };

    public static GetParser(host: string): Parser {
        const parser = ParserManager.registry[host];
        if (!parser) {
            throw new Error(`Unable to find parser for ${host}`);
        }
        return parser;
    }
}
