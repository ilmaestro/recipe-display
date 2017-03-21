import {IRecipeEvent} from "../../shared";
import * as cheerio from "cheerio";

export function CookingNYTimes(url: string, content: string): IRecipeEvent {
    const $ = cheerio.load(content);
    // cleanup
    $("p").filter((i, el) => $(el).text() === "").remove();
    $(".watch-link-container").remove();
    $("table").remove();
    $("span.number_divider").remove();
    $("a.pinterest-pin").remove();

    // extract
    const title = $("h1.recipe-title");
    const ingredients = $("ul.recipe-ingredients");
    const directions = $("ol.recipe-steps");
    return {
        title: title.text().trim(),
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
