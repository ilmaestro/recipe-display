import {IRecipeEvent} from "../../shared";
import * as cheerio from "cheerio";

export function SeriousEats(url: string, content: string): IRecipeEvent {
    const $ = cheerio.load(content);
    // cleanup
    $(".recipe-procedure-number").remove();
    $("p").filter((i, el) => $(el).text() === "").remove();
    $(".title").remove();
    // extract
    const ingredients = $(".recipe-wrapper .recipe-ingredients");
    const directions = $(".recipe-wrapper .recipe-procedures");
    const title = $("title").text();
    return {
        title: title,
        ingredientsBody: ingredients.html(),
        directionsBody: directions.html(),
        url: url
    };
}
