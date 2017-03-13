import {IRecipeEvent} from "../../shared";
import * as cheerio from "cheerio";

export function MarthaStewart(url: string, content: string): IRecipeEvent {
    const $ = cheerio.load(content);
    // cleanup
    $("p").filter((i, el) => $(el).text() === "").remove();
    $(".watch-link-container").remove();
    $("table").remove();

    // extract
    const title = $("h1.page-title");
    const ingredients = $("ul.components-list");
    const directions = $("ol.directions-list");
    return {
        title: title.html().trim(),
        ingredientsBody: `<ul class="ingredients-list">${ingredients.html().replace(/components-item/g, "ingredients-item")}</ul>`,
        directionsBody: `<ol class="directions-list">${directions.html()}</ol>`,
        url: url
    };
}
