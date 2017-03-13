import {IRecipeEvent} from "../../shared";
import * as cheerio from "cheerio";

export function Food(url: string, content: string): IRecipeEvent {
    const $ = cheerio.load(content);
    // cleanup
    $("p").filter((i, el) => $(el).text() === "").remove();
    $("div.recipe-tools").parent().remove();

    // extract
    const title = $("header.recipe h1");
    const ingredients = $("ul.ingredient-list");
    const directions = $("div.directions ol");

    return {
        title: title.html(),
        ingredientsBody: `
            <ul class="ingredients-list">
                ${ingredients.html().replace(/<li/g, "<li class=\"ingredients-item\"")}
            </ul>`,
        directionsBody: `
            <ol class="directions-list">
                ${directions.html().replace(/<li/g, "<li class=\"directions-item\"")}
            </ol>`,
        url: url
    };
}
