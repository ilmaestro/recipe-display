import test from "ava";
import {IRecipeEvent} from "../../shared";
import {ChowHound} from "./chowhound.parser";

/* tslint:disable:max-line-length */
const chicknramen = `<div class="frajax_recipe_head">
    <div class="freyja_recipe_head freayja_recipe_head_31487 " data-recipetags="chicken,japanese,noodles,easy" data-recipeid="31487"
        data-recipetitle="recipe_Easy Chicken Ramen" data-recipeurl="https://www.chowhound.com/recipes/easy-chicken-ramen-31487"
        data-fbshare="https://www.facebook.com/sharer/sharer.php?u=https://www.chowhound.com/recipes/easy-chicken-ramen-31487&amp;t=Easy+Chicken+Ramen"
        data-twshare="https://twitter.com/intent/tweet?text=Easy+Chicken+Ramen https://www.chowhound.com/recipes/easy-chicken-ramen-31487 @Chow"
        data-ptshare="http://pinterest.com/pin/create/button/?url=https://www.chowhound.com/recipes/easy-chicken-ramen-31487&amp;media=https://search.chow.com/thumbnail/1200/0/www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen.jpg&amp;description=Easy+Chicken+Ramen"
        data-issaved="Save" data-pubdate="2015-07-03" data-authorname="CHOW Staff" data-authorid="ch-User-525145" data-adid=""
        data-cid="easy-chicken-ramen" data-feat="" data-collection="egglands" data-rateurl="/recipes/easy-chicken-ramen-31487/discussion.json"
        data-savecount="63" data-description="An easy Japanese chicken ramen recipe.">

        <div class="fr_r_info">



            <a class="pinterest-pin-hd share_pinterest" title="Pin it on Pinterest!" data-social-location="header-image" target="_blank"
                data-href="http://pinterest.com/pin/create/button/?url=https://www.chowhound.com/recipes/easy-chicken-ramen-31487&amp;description=An easy Japanese chicken ramen recipe.&amp;media=https://search.chow.com/thumbnail/1600/0/www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen.jpg"></a>


            <h1 itemprop="name">Easy Chicken Ramen</h1>


            <div class="freyja_box7 fr_tagswrap">
                <div class="freyja_tagslist fr_bigger fr_collapsible_tags white">
                    <a href="https://www.chowhound.com/recipes/chicken" class="freyja_tag act_filter act_filter_reset" data-seo="chicken" data-id="2577"
                        data-name="Chicken">Chicken</a>
                    <a href="https://www.chowhound.com/recipes/japanese" class="freyja_tag act_filter act_filter_reset" data-seo="japanese" data-id="142"
                        data-name="Japanese">Japanese</a>
                    <a href="https://www.chowhound.com/recipes/noodles" class="freyja_tag act_filter act_filter_reset" data-seo="noodles" data-id="325"
                        data-name="Noodles">Noodles</a>
                    <a href="https://www.chowhound.com/recipes/easy" class="freyja_tag act_filter act_filter_reset" data-seo="easy" data-id="4351"
                        data-name="Easy">Easy</a>
                </div>
            </div>


            <span class="frr_save save_recipe boomtrain_save show_login_box" style="margin-right:7px" data-recipeid="31487" data-savec="63"><span class="mt"></span><i>Save</i>            <span class="frr_sc_thin">(63)</span></span>


            <div class="frr_ratewrap fr_rela" style="display:inline-block">
                <a href="#" class="frr_rateit ratencomment_expander boomtrain_rate show_login_box" data-url="/recipes/easy-chicken-ramen-31487/discussion.json">Rate</a>
                <div class="frr_ratencomment">
                </div>
            </div>
        </div>
        <img id="recipe_top_img" itemprop="image" alt="Easy Chicken Ramen" width="320" style="display:none" srcset="https://search.chow.com/thumbnail/640/0/www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen.jpg 2x, https://search.chow.com/thumbnail/960/0/www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen.jpg 3x"
            src="https://search.chow.com/thumbnail/320/0/www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen.jpg">


        <div data-original-2x="https://search.chow.com/thumbnail/3200/0/www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen.jpg"
            data-original-3x="https://search.chow.com/thumbnail/4800/0/www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen.jpg"
            class="freyja_featimg lazy-loaded rdy" style="background-image: url(&quot;https://search.chow.com/thumbnail/1600/0/www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen.jpg&quot;);"></div>




        <div class="fr_r_meta">
            <div class="fr_inwrap">

                <span class="frr_serves fr_sep" itemprop="recipeYield">8 servings</span>

                <a style="color: #FFFFFF" href="https://www.chowhound.com/recipes/easy"><span class="frr_difficulty fr_sep">Easy</span></a>
                <!-- <span class="frr_difficulty fr_sep">Easy</span> -->

                <span class="fr_sep">

        <div class="ratings_wrapper medium frr_ratings">
        <div class="chow_rating_display">
          <ul class="viewport" style="width:0.0px;text-align:left">
            <li class="star" data-stars="5"></li><li class="star" data-stars="4"></li><li class="star" data-stars="3"></li><li class="star" data-stars="2"></li><li class="star" data-stars="1"></li>
          </ul>
          <ul class="lower_layer hollow">
            <li class="star"></li><li class="star"></li><li class="star"></li><li class="star"></li><li class="star"></li>
          </ul>
        </div>
        </div>
        <span class="frr_ccnt">(0)</span>
                </span>

                <span class="frr_totaltime"><i>Total:</i> <time itemprop="totalTime" content="PT1H10M">1 hr 10 mins</time></span>

                <span class="frr_totaltime frr_active"><i>Active:</i>
              <time>
                35 mins
              </time>
            </span>

            </div>
        </div>

    </div>
</div>

<div class="freyja_container clearit freyja_mainbody bt_body">






    <section class="col gu12">
        <section class="freyja_colwrapper fr_recipewrapper">
            <section class="col gu3 freyja_notmobile nopad">
                <div class="freyja_box freyja_box81">
                    <h3><span>Ingredients (13)</span></h3>
                    <ul>
                        <li itemprop="ingredients">3 tablespoons canola oil</li>
                        <li itemprop="ingredients">1 yellow onion, coarsely chopped </li>
                        <li itemprop="ingredients">1 large leek, trimmed and roughly chopped</li>
                        <li itemprop="ingredients">4 cloves garlic, chopped</li>
                        <li itemprop="ingredients">1 (2-inch) piece fresh ginger, peeled and chopped</li>
                        <li itemprop="ingredients">8 cups low-sodium chicken broth</li>
                        <li itemprop="ingredients">4 ounces cremini or button mushrooms, brushed clean and sliced</li>
                        <li itemprop="ingredients">3 cups shredded cooked chicken </li>
                        <li itemprop="ingredients">Low-sodium soy sauce, for seasoning </li>
                        <li itemprop="ingredients">Sesame and/or chili oil, for seasoning </li>
                        <li itemprop="ingredients">1 1/2 pounds fresh ramen noodles
                        </li>
                        <li itemprop="ingredients">8 large eggs (optional)</li>
                        <li itemprop="ingredients">About 4 green onions, white and pale green parts, finely chopped</li>
                    </ul>
                </div>

                <span class="popcart-wrapper" style="margin-bottom:20px"><div class="popcart-buy-button">      <span class="popcart-button-container">         <span class="popcart-button-leading-text">Buy these ingredients</span>                <span class="popcart-button">           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 240" enable-background="new 0 0 240 240" xml:space="preserve" class="popcart-button-icon">             <g>               <path d="M26.3,39c1-2.4,2.6-4.1,4.9-5.2c2.3-1.1,4.6-1.3,6.8-0.7l27,8.6c3.8,1.2,5.9,3.8,6.3,7.7l1.8,15.1l123.5,13.9c2.8,0.6,4.9,1.9,6.3,4c1.4,2,2,4.3,1.8,6.8l-7.7,42.8c-1,5.2-3.9,7.7-8.8,7.7H78.7l-2,12.4h104c2.5,0,4.7,0.8,6.5,2.5c1.8,1.7,2.6,3.8,2.5,6.5c-0.1,2.6-1.1,4.9-2.9,6.7s-3.8,2.6-6.1,2.5H65.4c-3-0.2-5.3-1.4-7-3.4c-1.7-2-2.4-4.5-2.2-7.4l5-26.8l-7.4-75.2l-21.4-7C27,48.5,25,44.7,26.3,39z M65.4,190c0-3.8,1.4-7.2,4.3-10.1c2.9-2.9,6.2-4.3,9.9-4.1c3.7,0.1,7.1,1.5,10.1,4.1c3,2.6,4.4,6,4.1,10.1c-0.2,4.1-1.6,7.4-4.1,9.9c-2.5,2.5-5.9,4-10.1,4.3c-4.2,0.4-7.5-1.1-9.9-4.3C67.3,196.7,65.8,193.4,65.4,190z M149.8,190c0-3.8,1.4-7.2,4.1-10.1c2.8-2.9,6.1-4.3,10.1-4.1c4,0.1,7.3,1.5,10.1,4.1c2.8,2.6,4.1,6,4.1,10.1c0,4.1-1.4,7.4-4.1,9.9c-2.8,2.5-6.1,4-10.1,4.3c-4,0.4-7.3-1.1-10.1-4.3C151.2,196.7,149.8,193.4,149.8,190z"></path>             </g>           </svg>           <span class="popcart-button-text">Add to cart</span>                </span> <span class="popcart-button-trailing-text"> Delivery straight to your door </span> <a class="popcart-button-powered-by"
                    href="http://getpopcart.com">Powered by POPCART</a> </span>
</div>
</span>

<div id="mpu_plus_top" class="mpu_plus_top_31487">
    <div id="google_ads_iframe_8264/aw-chowhound/recipes_1__container__" style="border: 0pt none;">
        <iframe id="google_ads_iframe_8264/aw-chowhound/recipes_1" title="3rd party ad content" name="google_ads_iframe_8264/aw-chowhound/recipes_1"
            width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" srcdoc="" style="border: 0px; vertical-align: bottom;"></iframe>
    </div>
</div>

</section>




<section class="col gu9 nopad">
    <div class="freyja_box freyja_box82 clearit ">

        <div class="frr_summary" itemprop="description">
            <div class="ad_box" style="background:#e8e8e8;float:right;margin:0 0 20px 20px">
                <div id="strnative_top_recipe_container">
                    <div id="strnative_top" class="strnative_top_31487">
                        <div id="google_ads_iframe_8264/aw-chowhound/recipes_2__container__" style="border: 0pt none;">
                            <iframe id="google_ads_iframe_8264/aw-chowhound/recipes_2" title="3rd party ad content" name="google_ads_iframe_8264/aw-chowhound/recipes_2"
                                width="11" height="11" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" srcdoc=""
                                style="border: 0px; vertical-align: bottom;"></iframe>
                        </div>
                    </div>
                </div>
            </div>








            <p>Shredded chicken, fresh ramen noodles, mushrooms, and an optional egg—this chicken ramen recipe couldn’t be simpler.</p>
        </div>

        <div class="fr_byline full_summ ">
            <span class="by_line">
              by <a href="https://www.chowhound.com/search?q=Kim%20Laidlaw">
                  <span itemprop="author">Kim Laidlaw</span>
            </a>
            </span>

        </div>



    </div>









    <div class="freyja_box freyja_box82 ">
        <h3><span>Instructions</span></h3>
        <div class="frr_wrap" itemprop="recipeInstructions">
            <ol>
                <li>
                    <span class="number_divider">1</span>In a large saucepan over medium-high heat, warm 2 tablespoons of
                    the oil. Add the yellow onion, sprinkle with salt, and sear, without stirring, until browned, about 5
                    minutes. Stir in the garlic, ginger, and the broth and deglaze the pan, stirring and scraping up any
                    browned bits from the bottom. Reduce the heat to medium-low, partially cover the pan and simmer until
                    fragrant, about 30 minutes.</li>
                <li>
                    <span class="number_divider">2</span>Strain the broth through a fine-mesh sieve into a bowl and discard
                    the solids.</li>
                <li>
                    <span class="number_divider">3</span>In the saucepan over medium heat, add the remaining 1 tablespoon
                    of oil. Add the mushrooms and cook, stirring, until tender. Add the chicken and stir to combine. Add
                    the broth and season to taste with soy sauce and sesame and/or chile oil. Bring to a simmer, then reduce
                    the heat to low, cover partially, and simmer until warmed through.</li>
                <li>
                    <span class="number_divider">4</span>Meanwhile, put the eggs, if using, into boiling water and simmer
                    for 5–6 minutes. Remove the eggs from the water, let cool until they can be handled, and peel them. Cook
                    the ramen noodles according to the package directions.</li>
                <li>
                    <span class="number_divider">5</span>Divide the noodles evenly among individual bowls. Ladle the broth
                    and chicken over the noodles, dividing them evenly, then sprinkle with the green onions. If desired,
                    top each bowl with an optional halved soft-boiled egg and serve right away.
                    <a class="pinterest-pin share_pinterest"
                        title="Pin it on Pinterest!" data-social-location="recipe-body" target="_blank" data-href="http://pinterest.com/pin/create/button/?url=https://www.chowhound.com/recipes/easy-chicken-ramen-31487&amp;description=Easy Chicken Ramen&amp;media=?format=500w"><img src="https://search.chow.com/thumbnail/800/0/www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen_inline_640_1.jpg"
                            alt="" data-src="https://search.chow.com/thumbnail/800/0/www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen_inline_640_1.jpg"
                            class="lazy-loaded rdy"></a>
                </li>
            </ol>


            <div class="fr_r_shw">
                <div class="freyja_sharing fr_inlineshare fr_r_shar" style="clear:both">
                    <ul>
                        <li><a class="freyja_fb fr_sbt_rp custom_fb_share" data-social-location="share-bar" href="https://www.facebook.com/sharer/sharer.php?u=https://www.chowhound.com/recipes/easy-chicken-ramen-31487&amp;t=Easy+Chicken+Ramen"
                                target="_blank">Share<span class="hd_r"> This Recipe</span></a></li>
                        <!--
  -->
                        <li><a class="freyja_pr fr_sbt_rp omniture_print" href="https://www.chowhound.com/recipes/easy-chicken-ramen-31487/print">Print</a></li>
                        <!--
  -->
                        <li><a class="freyja_em fr_sbt_rp act_emailit omniture_email" rel="nofollow" data-shareimg="https://www.chowstatic.com/assets/2015/07/31487_easy_chicken_ramen.jpg"
                                data-sharetitle="Easy Chicken Ramen" data-shareurl="https://www.chowhound.com/recipes/easy-chicken-ramen-31487"
                                data-sharedescription="An easy Japanese chicken ramen recipe.">Email</a></li>
                        <!--
  -->
                        <li style="min-width:150px;max-width:200px"><span class="frr_save save_recipe show_login_box" data-recipeid="31487" data-savec="63"><span class="mt"></span><i>Save</i>                            <span class="frr_sc_thin">(63)</span></span>
                        </li>
                    </ul>
                </div>

            </div>

        </div>





    </div>




</section>


</div>`;

test("should return parsed content", t => {
    const url = "testUrl";
    const recipe = ChowHound(url, chicknramen);

    t.is(recipe.url, url);
    t.is(recipe.title, "Easy Chicken Ramen");
    t.is(recipe.ingredientsBody.replace(/\s/g, ""), `<ul class="ingredients-list">
            <li class="ingredients-item" itemprop="ingredients">3 tablespoons canola oil</li>
            <li class="ingredients-item" itemprop="ingredients">1 yellow onion, coarsely chopped </li>
            <li class="ingredients-item" itemprop="ingredients">1 large leek, trimmed and roughly chopped</li>
            <li class="ingredients-item" itemprop="ingredients">4 cloves garlic, chopped</li>
            <li class="ingredients-item" itemprop="ingredients">1 (2-inch) piece fresh ginger, peeled and chopped</li>
            <li class="ingredients-item" itemprop="ingredients">8 cups low-sodium chicken broth</li>
            <li class="ingredients-item" itemprop="ingredients">4 ounces cremini or button mushrooms, brushed clean and sliced</li>
            <li class="ingredients-item" itemprop="ingredients">3 cups shredded cooked chicken </li>
            <li class="ingredients-item" itemprop="ingredients">Low-sodium soy sauce, for seasoning </li>
            <li class="ingredients-item" itemprop="ingredients">Sesame and/or chili oil, for seasoning </li>
            <li class="ingredients-item" itemprop="ingredients">1 1/2 pounds fresh ramen noodles
            </li>
            <li class="ingredients-item" itemprop="ingredients">8 large eggs (optional)</li>
            <li class="ingredients-item" itemprop="ingredients">About 4 green onions, white and pale green parts, finely chopped</li>

        </ul>`.replace(/\s/g, ""));
    t.is(recipe.directionsBody.replace(/\s/g, ""), `<ol class="directions-list">
            <li class="directions-item">
                In a large saucepan over medium-high heat, warm 2 tablespoons of
                the oil. Add the yellow onion, sprinkle with salt, and sear, without stirring, until browned, about 5
                minutes. Stir in the garlic, ginger, and the broth and deglaze the pan, stirring and scraping up any
                browned bits from the bottom. Reduce the heat to medium-low, partially cover the pan and simmer until
                fragrant, about 30 minutes.</li>
            <li class="directions-item">
                Strain the broth through a fine-mesh sieve into a bowl and discard
                the solids.</li>
            <li class="directions-item">
                In the saucepan over medium heat, add the remaining 1 tablespoon
                of oil. Add the mushrooms and cook, stirring, until tender. Add the chicken and stir to combine. Add
                the broth and season to taste with soy sauce and sesame and/or chile oil. Bring to a simmer, then reduce
                the heat to low, cover partially, and simmer until warmed through.</li>
            <li class="directions-item">
                Meanwhile, put the eggs, if using, into boiling water and simmer
                for 5&#x2013;6 minutes. Remove the eggs from the water, let cool until they can be handled, and peel them. Cook
                the ramen noodles according to the package directions.</li>
            <li class="directions-item">
                Divide the noodles evenly among individual bowls. Ladle the broth
                and chicken over the noodles, dividing them evenly, then sprinkle with the green onions. If desired,
                top each bowl with an optional halved soft-boiled egg and serve right away.
            </li>

        </ol>`.replace(/\s/g, ""));
});
