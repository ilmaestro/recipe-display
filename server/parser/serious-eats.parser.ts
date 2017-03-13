import {IRecipeEvent} from "../../shared";
import * as cheerio from "cheerio";

export function SeriousEats(url: string, content: string): IRecipeEvent {
    const $ = cheerio.load(content);
    // cleanup
    $(".recipe-procedure-number").remove();
    $("p").filter((i, el) => $(el).text() === "").remove();
    $(".title").remove();
    $("figure").remove();

    // extract
    const title = $("nav.nav-action span.title-content");
    const ingredients = $("div.recipe-ingredients ul");
    const directions = $("div.recipe-procedures ol");

    return {
        title: title.text(),
        ingredientsBody: `
            <ul class="ingredients-list">
                ${ingredients.html().replace(/class=\"ingredient\"/g, `class="ingredients-item"`)}
            </ul>`,
        directionsBody: `
            <ol class="directions-list">
                ${directions.html().replace(/class=\"recipe-procedure\"/g, `class="directions-item"`)}
            </ol>`,
        url: url
    };
}
