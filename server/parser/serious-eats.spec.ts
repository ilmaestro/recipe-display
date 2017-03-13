import test from "ava";
import {SeriousEats} from "./serious-eats.parser";
import {IRecipeEvent} from "../../shared";

/* tslint:disable:max-line-length */
const childverde = `<div class="recipe-body summary">
        <div class="recipe-wrapper">
            <nav class="nav-action nav-action-recipe has-procedure-images">
                <a href="/" class="logo-se logo-mini">Serious Eats</a>
                <span class="title-content">Easy Pressure Cooker Pork Chile Verde Recipe</span>
                <div class="action-switch-image-view nav-action-multi">
                    <span class="nav-action-label" data-text-swap="Thumbnails">Text Only</span>
                    <span class="action-links-wrapper">
          	    <a class="action-link action-hide-images active" data-text-swap="Text Only"><span class="icon-wrapper icon-inline"><span class="icon icon-nav-text"></span></span>
                    </a>
                    <a class="action-link action-show-thumbnails" data-text-swap="Small Images"><span class="icon-wrapper icon-inline"><span class="icon icon-nav-image-small"></span></span></a>
                    <a class="action-link action-show-large-images" data-text-swap="Large Images"><span class="icon-wrapper icon-inline"><span class="icon icon-nav-image"></span></span></a>
                    </span>
                </div>
            </nav>
            <div class="recipe-ingredients">
                <h4 class="title">Ingredients</h4>
                <ul>
                    <li class="ingredient" itemprop="ingredients">4 pounds (1.9kg) boneless pork shoulder, cut into 2-inch chunks</li>
                    <li class="ingredient" itemprop="ingredients">3/4 pound tomatillos (about 4 tomatillos; 350g), quartered, husks discarded</li>
                    <li class="ingredient" itemprop="ingredients">2/3 pound Poblano peppers (about 2 peppers; 300g), roughly chopped, seeds and stems discarded (see note)</li>
                    <li class="ingredient" itemprop="ingredients">6 ounces Anaheim or Cubanelle peppers (about 2 peppers; 170g), roughly chopped, seeds and stems discarded
                        (see note)</li>
                    <li class="ingredient" itemprop="ingredients">2 serrano or jalapeño chilies, roughly chopped, stems discarded (see note)</li>
                    <li class="ingredient" itemprop="ingredients">8 ounces white onion (about 1 medium; 225g), roughly chopped</li>
                    <li class="ingredient" itemprop="ingredients">6 medium cloves garlic, peeled</li>
                    <li class="ingredient" itemprop="ingredients">1 tablespoon (15g) whole cumin seed, toasted and ground</li>
                    <li class="ingredient" itemprop="ingredients">Kosher salt</li>
                    <li class="ingredient" itemprop="ingredients">1/2 cup loosely packed fresh cilantro leaves and fine stems (about 1/2 ounce; 15g), plus more for garnish</li>
                    <li class="ingredient" itemprop="ingredients">1 tablespoon (15ml) Asian fish sauce</li>
                    <li class="ingredient" itemprop="ingredients">Fresh corn tortillas and lime wedges, for serving</li>
                </ul>
            </div>
            <!--/ingredients-->

            <div class="recipe-procedures">
                <h4 class="title">Directions</h4>
                <ol class="recipe-procedures-list instructions" itemprop="recipeInstructions">
                    <li class="recipe-procedure">
                        <div class="recipe-procedure-number checked">1.</div>
                        <div class="recipe-procedure-text">
                            <p></p>
                            <p>In a pressure cooker, combine pork, tomatillos, Poblano peppers, Anaheim peppers, serrano peppers,
                                onion, garlic, cumin, and a big pinch of salt. Heat over high heat until gently sizzling,
                                then seal pressure cooker, bring to high pressure, and cook for 30 minutes. Release pressure.</p>
                            <p></p>
                        </div>
                        <figure class="recipe-procedure-image hide">
                            <img src="http://static.seriouseats.com/1/braestar/live/img/placeholder-entry-image.png" data-src="http://www.seriouseats.com/recipes/20170124-pressure-cooker-chili-verde-04.jpg">
                        </figure>
                    </li>
                    <li class="recipe-procedure">
                        <div class="recipe-procedure-number ">2.</div>
                        <div class="recipe-procedure-text">
                            <p></p>
                            <p>Using tongs, transfer pork pieces to a bowl and set aside. Add cilantro and fish sauce to remaining
                                contents of pressure cooker. Blend with an immersion blender or in a countertop blender,
                                then season to taste with salt. Return pork to sauce and stir gently to combine. Serve immediately
                                with tortillas and lime wedges.</p>
                            <p></p>
                        </div>
                        <figure class="recipe-procedure-image hide">
                            <img src="http://static.seriouseats.com/1/braestar/live/img/placeholder-entry-image.png" data-src="http://www.seriouseats.com/recipes/20170124-pressure-cooker-chili-verde-08.jpg">
                        </figure>
                    </li>
                </ol>
            </div>
            <!--procedure-->
        </div>

    </div>`;

test("should find ingredients and directions", t => {
    const url = "testUrl";
    const recipe = SeriousEats("testUrl", childverde);

    t.is(recipe.url, url);
    t.is(recipe.title, "Easy Pressure Cooker Pork Chile Verde Recipe");
    t.is(recipe.ingredientsBody.replace(/\s/g, ""), `<ul class="ingredients-list">
                    <li class="ingredients-item" itemprop="ingredients">4 pounds (1.9kg) boneless pork shoulder, cut into 2-inch chunks</li>
                    <li class="ingredients-item" itemprop="ingredients">3/4 pound tomatillos (about 4 tomatillos; 350g), quartered, husks discarded</li>
                    <li class="ingredients-item" itemprop="ingredients">2/3 pound Poblano peppers (about 2 peppers; 300g), roughly chopped, seeds and stems discarded (see note)</li>
                    <li class="ingredients-item" itemprop="ingredients">6 ounces Anaheim or Cubanelle peppers (about 2 peppers; 170g), roughly chopped, seeds and stems discarded
                        (see note)</li>
                    <li class="ingredients-item" itemprop="ingredients">2 serrano or jalape&#xF1;o chilies, roughly chopped, stems discarded (see note)</li>
                    <li class="ingredients-item" itemprop="ingredients">8 ounces white onion (about 1 medium; 225g), roughly chopped</li>
                    <li class="ingredients-item" itemprop="ingredients">6 medium cloves garlic, peeled</li>
                    <li class="ingredients-item" itemprop="ingredients">1 tablespoon (15g) whole cumin seed, toasted and ground</li>
                    <li class="ingredients-item" itemprop="ingredients">Kosher salt</li>
                    <li class="ingredients-item" itemprop="ingredients">1/2 cup loosely packed fresh cilantro leaves and fine stems (about 1/2 ounce; 15g), plus more for garnish</li>
                    <li class="ingredients-item" itemprop="ingredients">1 tablespoon (15ml) Asian fish sauce</li>
                    <li class="ingredients-item" itemprop="ingredients">Fresh corn tortillas and lime wedges, for serving</li>
                </ul>`.replace(/\s/g, ""));

    t.is(recipe.directionsBody.replace(/\s/g, ""), `<ol class="directions-list">
                    <li class="directions-item">
                        <div class="recipe-procedure-text">

                            <p>In a pressure cooker, combine pork, tomatillos, Poblano peppers, Anaheim peppers, serrano peppers,
                                onion, garlic, cumin, and a big pinch of salt. Heat over high heat until gently sizzling,
                                then seal pressure cooker, bring to high pressure, and cook for 30 minutes. Release pressure.</p>

                        </div>
                    </li>
                    <li class="directions-item">
                        <div class="recipe-procedure-text">

                            <p>Using tongs, transfer pork pieces to a bowl and set aside. Add cilantro and fish sauce to remaining
                                contents of pressure cooker. Blend with an immersion blender or in a countertop blender,
                                then season to taste with salt. Return pork to sauce and stir gently to combine. Serve immediately
                                with tortillas and lime wedges.</p>

                        </div>
                    </li>
                </ol>`.replace(/\s/g, ""));
});

