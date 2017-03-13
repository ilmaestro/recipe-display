import test from "ava";
import {IRecipeEvent} from "../../shared";
import {Food} from "./food.parser";

/* tslint:disable:max-line-length */

const chickndumplings = `
<header class="recipe fd-recipe">
    <meta content="http://www.food.com/recipe/chicken-and-dumplings-72963">

    <div class="sponsored">
        <div id="dfp_logo" style="display: none;">
            <div id="google_ads_iframe_109359770/foodcom/recipes_1__container__" style="border: 0pt none; margin: auto; text-align: center;">
                <iframe id="google_ads_iframe_109359770/foodcom/recipes_1" title="3rd party ad content" name="google_ads_iframe_109359770/foodcom/recipes_1"
                    width="1" height="2" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" srcdoc="" style="border: 0px; vertical-align: bottom;"></iframe>
            </div>
        </div>
    </div>

    <h1>Chicken and Dumplings</h1>
    <section class="recipe-subhead">
        <div class="recipe-info ">



            <div class="fd-rating ">
                <a class="af-show-reviews review-link " href="#activity-feed">
                    <div class="five-star"><span class="fd-rating-percent" style="width:96.60%;"><span class="sr-only">4.83</span></span>
                    </div>
                </a>
                <a href="#activity-feed" class="af-show-reviews af-review-count">(152)</a>
            </div>



            <div class="recipe-cooktime">

                <span class="ready-in-text"><strong>READY IN:</strong></span> 3hrs



            </div>

        </div>

        <div class="recipe-sharing fd-share-tools analytic-box" data-module="topRecipeTools">
            <a href="http://www.food.com/recipeprint.do?rid=72963" class="print-round" title="Print">
                <i class="icon-fdc-print" title="Print"></i>
            </a>

            <a class="email-round" data-popup-id="#email" data-recipe-id="72963" href="mailto:?subject=Food.com for Chicken and Dumplings&amp;body=Here%27s a recipe for Chicken and Dumplings from Food.com%3A http%3A%2F%2Fwww.food.com%2Frecipe%2Fchicken-and-dumplings-72963%3Fnl%3Demail_share"
                title="Share via Email">
                <i class="icon-fdc-email" title="Email"></i>
            </a>
            <a class="pinterest-round" data-network="pinterest" title="Share on Pinterest">
                <i class="icon-fdc-pinterest social-share" title="Pintrest"></i>
            </a>
            <a class="facebook-round social-share" data-network="facebook" title="Share on Facebook">
                <i class="icon-fdc-facebook" title="Facebook"></i>
            </a>

        </div>

    </section>
</header>
<div class="row recipe-detail col-md-19 col-lg-25">

    <div class="saveRecipeButtonContainer hidden-xs">

        <button class="rb-open btn-emphasis" data-recipe-id="72963"> <i class="icon-fdc-plus"></i> Save recipe</button>



    </div>

    <div class="ingredients col-xs-8 col-sm-9 col-md-11 col-lg-13 analytic-box" data-module="ingredients">
        <h3>Ingredients
            <small><a class="nutrition" data-toggle="modal" data-target="#72963_nutrition" data-popup-id="#72963_nutrition">Nutrition</a></small>
        </h3>

        <div class="fd-list-table recipe-yield">
            <ul>

                <li id="yield-servings">
                    <a data-toggle="modal" data-target="#72963_servings" data-popup-id="#72963_servings">
                        <h6>Servings</h6>

                        <div class="data">
                            <span class="count">4-6</span>
                        </div>
                    </a>
                </li>


                <li id="yield-units">
                    <a class="units" data-toggle="modal" data-target="#72963_units" data-popup-id="#72963_units">
                        <h6>Units</h6>
                        <div class="data">
                            <span class="count">US</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <ul class="ingredient-list">
            <li data-ingredient="broiler-fryer+chicken"><span>1 </span> large <a href="http://www.food.com/about/chicken-221">broiler-fryer chicken</a>, cut up</li>
            <li data-ingredient="celery+ribs"><span>2 </span> <a href="http://www.food.com/about/celery-216">celery ribs</a>, sliced</li>
            <li data-ingredient="carrots"><span>4 </span> <a href="http://www.food.com/about/carrot-213">carrots</a>, peeled and sliced</li>
            <li data-ingredient="onion"><span>1 </span> medium <a href="http://www.food.com/about/onion-148">onion</a>, diced</li>
            <li data-ingredient="chicken+broth"><span>1</span> (14 1/2 ounce) can <a href="http://www.food.com/about/broth-154">chicken broth</a></li>
            <li data-ingredient="dried+parsley"><span>2 </span> tablespoons <a href="http://www.food.com/about/parsley-171">dried parsley</a></li>
            <li data-ingredient="chicken+bouillon+granules"><span>2 </span> teaspoons <a href="http://www.food.com/about/bouillon-575">chicken bouillon granules</a></li>
            <li data-ingredient="salt"><span>1 <sup>1</sup>⁄<sub>2</sub></span> teaspoons <a href="http://www.food.com/about/salt-359">salt</a></li>
            <li data-ingredient="pepper"><span><sup>1</sup>⁄<sub>2</sub>-1 </span> teaspoon <a href="http://www.food.com/about/pepper-337">pepper</a></li>
            <li data-ingredient="water"><span></span> <a href="http://www.food.com/about/water-459">water</a></li>
            <li>
                <h4>DUMPLINGS</h4>
            </li>
            <li data-ingredient="flour"><span>2 </span> cups <a href="http://www.food.com/about/flour-64">flour</a></li>
            <li data-ingredient="baking+powder"><span>4 </span> teaspoons <a href="http://www.food.com/about/baking-powder-6">baking powder</a></li>
            <li data-ingredient="salt"><span>1 </span> teaspoon <a href="http://www.food.com/about/salt-359">salt</a></li>
            <li data-ingredient="milk"><span><sup>3</sup>⁄<sub>4</sub></span> cup <a href="http://www.food.com/about/milk-360">milk</a></li>
            <li data-ingredient="oil"><span>4 </span> tablespoons oil</li>

        </ul>


        <div class="extras">

            <input type="hidden" name="ingredient" value="[&quot;1  large  broiler-fryer chicken, cut up&quot;,&quot;2    celery ribs, sliced&quot;,&quot;4    carrots, peeled and sliced&quot;,&quot;1  medium  onion, diced&quot;,&quot;1 (14 1/2 ounce) can chicken broth&quot;,&quot;2  tablespoons  dried parsley&quot;,&quot;2  teaspoons  chicken bouillon granules&quot;,&quot;1 1/2 teaspoons  salt&quot;,&quot;1/2-1  teaspoon  pepper&quot;,&quot; water&quot;,&quot;2  cups  flour&quot;,&quot;4  teaspoons  baking powder&quot;,&quot;1  teaspoon  salt&quot;,&quot;3/4 cup  milk&quot;,&quot;4  tablespoons  oil&quot;]">

        </div>


        <div class="fd-ad">
            <div class="dfp collapsable fd-onsale" data-dfp-type="dfp_grocery_list" id="dfp_grocery_list_20BgEvXU" data-dfp="loaded">
                <div id="dfp_grocery_list_1" style="display: none;">
                    <div id="google_ads_iframe_109359770/foodcom/recipes_2__container__" style="border: 0pt none; margin: auto; text-align: center;">
                        <iframe id="google_ads_iframe_109359770/foodcom/recipes_2" title="3rd party ad content" name="google_ads_iframe_109359770/foodcom/recipes_2"
                            width="1" height="13" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" srcdoc="" style="border: 0px; vertical-align: bottom;"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-ad">
            <div class="dfp collapsable" data-dfp-type="dfp_native_ingredient" id="dfp_native_ingredient_UfV4UKvI" data-dfp="loaded">
                <div id="dfp_native_ingredient_1" style="display: none;">
                    <div id="google_ads_iframe_109359770/foodcom/recipes_3__container__" style="border: 0pt none; margin: auto; text-align: center;">
                        <iframe id="google_ads_iframe_109359770/foodcom/recipes_3" title="3rd party ad content" name="google_ads_iframe_109359770/foodcom/recipes_3"
                            width="1" height="15" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" srcdoc="" style="border: 0px; vertical-align: bottom;"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <div class="deals">
            <div class="sales-widget">
                <header>
                    <h4>On Sale Near You</h4><a class="no-geo-close" href="#"><i class="icon-fdc-close"></i></a></header>
                <p>See what's on sale in recipes and in your Grocery List.</p>
                <p><a href="http://www.food.com/user/stores?url=http%3A%2F%2Fwww.food.com%2Frecipe%2Fchicken-and-dumplings-72963">Find stores</a></p>
            </div>
        </div>
    </div>

    <div class="row fd-ad dfp-placeholder col-xs-8 col-sm-21 hidden-sm hidden-md hidden-lg">



        <div class="dfp-bigbox">
            <div class="dfp-ad-wrap">
                <div class="dfp" data-dfp-type="dfp_bigbox" data-dfp-sync="dfp_native_ingredient"></div>
                <span class="ad-label">Advertisement</span>
            </div>
        </div>

    </div>

    <div class="directions analytic-box col-xs-8 col-sm-11 col-sm-offset-1 col-md-16 col-md-offset-1 col-lg-16 col-lg-offset-1"
        data-module="recipeDirections">
        <h3>Directions
            <small><a class="js-see-how-its-made nutrition" href="" style="display: none;">See How It's Made</a>
                    </small>
        </h3>
        <ol class="expanded">

            <li>Combine chicken, celery, carrots, onion, chicken broth, parsley, chicken bouillon granules, salt and pepper in
                a large pan or dutch oven; add enough water to cover chicken.</li>

            <li>Bring to a boil; reduce heat, cover and simmer for 2 hours or until chicken is done.</li>

            <li>Remove chicken and let stand until cool enough to handle.</li>

            <li>Remove skin from chicken and tear meat away from bones.</li>

            <li>Return meat to soup; discard skin and bones.</li>

            <li>Add more salt and pepper to taste, if desired.</li>

            <li>Return soup to a simmer.</li>

            <li>In a mixing bowl, combine dumpling ingredients and mix well to form a stiff dough.</li>

            <li>Drop by tablespoonfuls into simmering soup.</li>

            <li>Cover and simmer for 15 to 20 minutes.</li>

            <li>Serve immediately.</li>

            <li>Yield: 4 to 6 servings.</li>

            <li>*SOUTHERN STYLE DUMPLINGS (heavier and chewier) 2 cups flour, 1 cup chicken broth, 2 tsp baking powder, 2 beaten
                eggs. Combine flour, broth, baking powder and eggs; mix well to form a stiff batter. Drop by tablespoonfuls
                into simmering soup. Cover and simmer for 15 to 20 minutes.</li>





            <li>

                <div class="recipe-tools">
                    <div class="fd-site-tools">
                        <dl class="util analytic-box" data-module="bottomRecipeTools">

                            <dt class="submit-a-correction">
                                <a class="submit-correction link-submit-correction" href="http://www.food.com/recipe/edit.php?rid=72963">
                                    <i class="icon-fdc-edit"></i>
                                    <span class="btn-text">
                            
                                Submit a Correction
                            
                        </span>
                                </a>
                            </dt>

                        </dl>
                    </div>
                </div>
                <!-- .recipe-tools -->

            </li>


        </ol>
    </div>

    <div class="hidden-xs hidden-md hidden-lg">



        <div class="dfp-bigbox">
            <div class="dfp-ad-wrap">
                <div class="dfp" data-dfp-type="dfp_bigbox" data-dfp-sync="dfp_native_ingredient"></div>
                <span class="ad-label">Advertisement</span>
            </div>
        </div>

    </div>

</div>`;


test("should find ingredients and directions", t => {
    const url = "testUrl";
    const recipe = Food(url, chickndumplings);

    t.is(recipe.url, url);
    t.is(recipe.title, "Chicken and Dumplings");
    t.is(recipe.ingredientsBody.replace(/\s/g, ""), `<ul class="ingredients-list">
            <li class="ingredients-item" data-ingredient="broiler-fryer+chicken"><span>1 </span> large <a href="http://www.food.com/about/chicken-221">broiler-fryer chicken</a>, cut up</li>
            <li class="ingredients-item" data-ingredient="celery+ribs"><span>2 </span> <a href="http://www.food.com/about/celery-216">celery ribs</a>, sliced</li>
            <li class="ingredients-item" data-ingredient="carrots"><span>4 </span> <a href="http://www.food.com/about/carrot-213">carrots</a>, peeled and sliced</li>
            <li class="ingredients-item" data-ingredient="onion"><span>1 </span> medium <a href="http://www.food.com/about/onion-148">onion</a>, diced</li>
            <li class="ingredients-item" data-ingredient="chicken+broth"><span>1</span> (14 1/2 ounce) can <a href="http://www.food.com/about/broth-154">chicken broth</a></li>
            <li class="ingredients-item" data-ingredient="dried+parsley"><span>2 </span> tablespoons <a href="http://www.food.com/about/parsley-171">dried parsley</a></li>
            <li class="ingredients-item" data-ingredient="chicken+bouillon+granules"><span>2 </span> teaspoons <a href="http://www.food.com/about/bouillon-575">chicken bouillon granules</a></li>
            <li class="ingredients-item" data-ingredient="salt"><span>1 <sup>1</sup>&#x2044;<sub>2</sub></span> teaspoons <a href="http://www.food.com/about/salt-359">salt</a></li>
            <li class="ingredients-item" data-ingredient="pepper"><span><sup>1</sup>&#x2044;<sub>2</sub>-1 </span> teaspoon <a href="http://www.food.com/about/pepper-337">pepper</a></li>
            <li class="ingredients-item" data-ingredient="water"><span></span> <a href="http://www.food.com/about/water-459">water</a></li>
            <li class="ingredients-item">
                <h4>DUMPLINGS</h4>
            </li>
            <li class="ingredients-item" data-ingredient="flour"><span>2 </span> cups <a href="http://www.food.com/about/flour-64">flour</a></li>
            <li class="ingredients-item" data-ingredient="baking+powder"><span>4 </span> teaspoons <a href="http://www.food.com/about/baking-powder-6">baking powder</a></li>
            <li class="ingredients-item" data-ingredient="salt"><span>1 </span> teaspoon <a href="http://www.food.com/about/salt-359">salt</a></li>
            <li class="ingredients-item" data-ingredient="milk"><span><sup>3</sup>&#x2044;<sub>4</sub></span> cup <a href="http://www.food.com/about/milk-360">milk</a></li>
            <li class="ingredients-item" data-ingredient="oil"><span>4 </span> tablespoons oil</li>

        </ul>`.replace(/\s/g, ""));
    t.is(recipe.directionsBody.replace(/\s/g, ""), `<ol class="directions-list">

            <li class="directions-item">Combine chicken, celery, carrots, onion, chicken broth, parsley, chicken bouillon granules, salt and pepper in
                a large pan or dutch oven; add enough water to cover chicken.</li>

            <li class="directions-item">Bring to a boil; reduce heat, cover and simmer for 2 hours or until chicken is done.</li>

            <li class="directions-item">Remove chicken and let stand until cool enough to handle.</li>

            <li class="directions-item">Remove skin from chicken and tear meat away from bones.</li>

            <li class="directions-item">Return meat to soup; discard skin and bones.</li>

            <li class="directions-item">Add more salt and pepper to taste, if desired.</li>

            <li class="directions-item">Return soup to a simmer.</li>

            <li class="directions-item">In a mixing bowl, combine dumpling ingredients and mix well to form a stiff dough.</li>

            <li class="directions-item">Drop by tablespoonfuls into simmering soup.</li>

            <li class="directions-item">Cover and simmer for 15 to 20 minutes.</li>

            <li class="directions-item">Serve immediately.</li>

            <li class="directions-item">Yield: 4 to 6 servings.</li>

            <li class="directions-item">*SOUTHERN STYLE DUMPLINGS (heavier and chewier) 2 cups flour, 1 cup chicken broth, 2 tsp baking powder, 2 beaten
                eggs. Combine flour, broth, baking powder and eggs; mix well to form a stiff batter. Drop by tablespoonfuls
                into simmering soup. Cover and simmer for 15 to 20 minutes.</li>

        </ol>`.replace(/\s/g, ""));
});
