import test from "ava";
import * as fs from "fs";
import * as path from "path";
import {IRecipeEvent} from "../../shared";
import {CookingNYTimes} from "./cooking-nytimes.parser";

/* tslint:disable:max-line-length */
const RedLentilDal = fs.readFileSync(path.join(__dirname, "../../../spec-recipe-docs/cooking-nytimes.red-lentil-dal.html"), "utf8");

test("should return parsed content", t => {
    const url = "testUrl";
    const recipe = CookingNYTimes(url, RedLentilDal);

    t.is(recipe.url, url);
    t.is(recipe.title, "Red Lentil Dal");
    t.is(recipe.ingredientsBody.replace(/\s/g, ""), `<ul class="ingredients-list">
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">2</span>


            <span class="ingredient-name">tablespoons <span>vegetable oil</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">1</span>


            <span class="ingredient-name">cup finely chopped <span>onion</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">2 &#xBD;</span>


            <span class="ingredient-name">cups (10 ounces, about 1 medium) finely diced <span>sweet potato</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">1</span>


            <span class="ingredient-name">tablespoon minced <span>ginger</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">2</span>


            <span class="ingredient-name"><span>garlic</span> cloves, minced</span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">1</span>


            <span class="ingredient-name">Thai or bird&apos;s-eye <span>red chili</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">1</span>


            <span class="ingredient-name">cup red <span>lentils</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">2</span>


            <span class="ingredient-name">teaspoons ground <span>coriander</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">2</span>


            <span class="ingredient-name">teaspoons ground <span>cumin</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">2</span>


            <span class="ingredient-name">teaspoons <span>turmeric</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">1</span>


            <span class="ingredient-name">teaspoon ground <span>ginger</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">1</span>


            <span class="ingredient-name">cup canned chopped <span>tomatoes</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity"></span>


            <span class="ingredient-name"><span>Salt</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity">3</span>


            <span class="ingredient-name">tablespoons chopped <span>cilantro</span></span>
            </li>
            <li class="ingredients-item" itemprop="recipeIngredient">
            <span class="quantity"></span>


            <span class="ingredient-name">Pieces of <span>coconut flesh</span> from a fresh coconut (optional)</span>
            </li>
        </ul>`.replace(/\s/g, ""));
    t.is(recipe.directionsBody.replace(/\s/g, ""), `<ol class="directions-list">
            <li class="directions-item">In a large saucepan over medium-low heat, heat oil, and saut&#xE9; onion until softened. Add sweet potato, and saut&#xE9; for about 5 minutes. Add minced ginger and garlic; stir, and reduce heat to low.</li>
            <li class="directions-item">Finely dice chili, keeping seeds if you wish to add more heat. Add chili, lentils, coriander, cumin, turmeric and ground ginger to pan. Stir until lentils are well coated with oil. Add tomatoes and 4 cups water. Raise heat to bring to a boil, then reduce heat until mixture is at a fast simmer. Cook uncovered until lentils and potatoes are soft, stirring occasionally, about 25 minutes.</li>
            <li class="directions-item">Season to taste with salt, and continue to simmer until mixture has thickened, about 10 minutes. Whisk dal to amalgamate lentils and sweet potatoes. If dal is too soupy, increase heat and cook for a little longer.</li>
            <li class="directions-item">To serve, place dal in a serving bowl and sprinkle with chopped cilantro. If desired, shave thin strips of fresh coconut on top. Serve hot.</li>

        </ol>`.replace(/\s/g, ""));
});
