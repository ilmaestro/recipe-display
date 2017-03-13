import test from "ava";
import {IRecipeEvent} from "../../shared";
import {MarthaStewart} from "./martha-stewart.parser";

/* tslint:disable:max-line-length */
const chickndumplings = `<article class="recipe-shell">

    <div class="back-to-page" style="display:none;">
        <div class="back-to-page-inner">
            <span class="glyph gl-prev"></span>
            <span id="back-to-page-target"></span>
        </div>
    </div>

    <div class="col-main-wrap">
        <div class="col-main ">
            <section class="top-intro">
                <div class="top-intro-box">
                    <div class="inner">
                        <!-- Top intro content -->
                        <div class="top-intro-content ">
                            <span class="top-intro-badge-mobile mslo-text-badge mslo-text-badge-">
                                  </span>
                            <h1 class="page-title">
                                Chicken and Dumplings </h1>

                            <div class="fivestar-container-outer">
                                <div class="tooltip-container-outer">
                                    <div class="fivestar-container rate-it js-fivestar interactive js-mslo-authenticate has-rating" data-user-action="rate-it"
                                        data-uuid="f408604c-48ef-11e0-9e39-a4badb5123e3">
                                        <div class="js-fivestar-base fivestar-base star-container">
                                            <span class="js-fivestar-star fivestar-1 fivestar-star" data-star-value="1"></span>
                                            <!--
      --><span class="js-fivestar-star fivestar-2 fivestar-star" data-star-value="2"></span>
                                            <!--
      --><span class="js-fivestar-star fivestar-3 fivestar-star" data-star-value="3"></span>
                                            <!--
      --><span class="js-fivestar-star fivestar-4 fivestar-star" data-star-value="4"></span>
                                            <!--
      --><span class="js-fivestar-star fivestar-5 fivestar-star" data-star-value="5"></span>
                                        </div>
                                        <div class="js-fivestar-average fivestar-average star-container average-loaded" data-rating="3.75" style="width: 75%;">
                                            <span class="js-fivestar-star fivestar-1 fivestar-star"></span>
                                            <!--
      --><span class="js-fivestar-star fivestar-2 fivestar-star"></span>
                                            <!--
      --><span class="js-fivestar-star fivestar-3 fivestar-star"></span>
                                            <!--
      --><span class="js-fivestar-star fivestar-4 fivestar-star"></span>
                                            <!--
      --><span class="js-fivestar-star fivestar-5 fivestar-star"></span>
                                        </div>
                                    </div>
                                </div>

                                <span class="js-fivestar-count fivestar-count fivestar-count-visible" data-uuid="f408604c-48ef-11e0-9e39-a4badb5123e3">755</span>
                            </div>

                            <p class="top-intro-dek">
                                This comfort-food recipe combines chicken thighs, plump dumplings, and plenty of vegetables for a meal that's warm and filling.
                                These chicken and dumplings are ready in about an hour, so try them for a weekend meal. </p>

                            <!-- The details in numbers -->
                            <ul class="top-intro-times mslo-credits">
                                <li>
                                    <span class="credit-label">Prep:</span>
                                    <time>
                                        30 mins </time>
                                </li>

                                <li class="mslo-credits">
                                    <span class="credit-label">Total Time:</span>
                                    <time>
                                        1 hour </time>
                                </li>

                                <li class="mslo-credits">
                                    <span class="credit-label">Servings:</span> 4 </li>

                            </ul>

                            <div class="mslo-share-bar-wrap">
                                <div class="mslo-share-bar ">
                                    <div class="mslo-share-default">

                                        <span class="mslo-share-btn mslo-share-count">
    <div class="mslo-share-count-inner">
      <span class="mslo-shorthand-number mslo-share-count-number">
        24.5                  <span class="mslo-shorthand-suffix">
            k          </span>
                                        </span>
                                        <span class="mslo-share-count-name">
        Shares
      </span>
                                    </div>
                                    </span>
                                    <span class="mslo-share-btn mslo-btn-pin">
    <a title="Pinterest Share" data-pin-config="none" data-pin-do="buttonBookmark" data-pin-custom="true" data-pin-log="button_pinit_bookmarklet" data-pin-href="https://www.pinterest.com/pin/create/button/">
      <span class="social-icon glyph gl-pinterest-btn"></span>
                                    <span class="social-icon-label">Pinterest</span>
                                    </a>
                                    </span>
                                    <span class="mslo-share-btn mslo-btn-fb-share">
    <a href="#" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.marthastewart.com/341261/chicken-and-dumplings&amp;tel=recipe_fb-share','facebookShare','width=626,height=436'); return false;" title="Facebook Share">
      <span class="social-icon glyph gl-facebook-btn"></span>
                                    <span class="social-icon-label">Facebook</span>
                                    </a>
                                    </span>
                                    <span class="mslo-share-btn mslo-btn-expand" data-open="MORE" data-close="LESS" data-status="open">
          MORE<span class="arrow glyph gl-down-dbl-arw"></span>
                                    </span>
                                </div>
                                <div class="mslo-share-extra">
                                    <span class="indicator-arrow"></span>

                                    <span class="mslo-share-btn mslo-btn-comment">
  <span>
    <span class="social-icon glyph gl-comment-btn" title="Add a Comment"></span>
                                    <span class="social-icon-label">Comment</span>
                                    </span>
                                    </span>
                                    <span class="mslo-share-btn mslo-btn-twitter">
  <a href="#" onclick="window.open('https://twitter.com/share?text=Chicken+and+Dumplings&amp;url=http://www.marthastewart.com/341261/chicken-and-dumplings?tel=recipe_twitter','twitterShare','width=626,height=436'); return false;" title="Twitter Share">
    <span class="social-icon glyph gl-twitter-btn"></span>
                                    <span class="social-icon-label">Twitter</span>
                                    </a>
                                    </span>
                                    <span class="mslo-share-btn mslo-btn-google-plus">
  <a href="#" onclick="window.open('https://plus.google.com/share?url=http://www.marthastewart.com/341261/chicken-and-dumplings&amp;tel=recipe_google','googleShare','width=626,height=436'); return false;" title="Google Share">
    <span class="social-icon glyph gl-google-btn"></span>
                                    <span class="social-icon-label">Google+</span>
                                    </a>
                                    </span>
                                    <span class="mslo-share-btn mslo-btn-email clear-fix" title="Email">
  <div class="ugc-content-wrap clearfix">
    <a href="mailto:?subject=Check%20out%20this%20article%20from%20Martha%20Stewart%20Living%21&amp;body=Chicken%20and%20Dumplings%0Ahttp%3A%2F%2Fwww.marthastewart.com%2F341261%2Fchicken-and-dumplings%0ALove%20this%20Martha%20Stewart%20Living%20article%3F%20Post%20it%2C%20pin%20it%2C%20share%20it%21" class="email-frame"><span class="glyph gl-mail-btn"></span></a>
                                </div>
                                </span>
                                <span class="mslo-share-btn mslo-btn-print" onclick="window.print();">
  <span class="glyph gl-print"></span>
                                </span>
                                <div class="mslo-share-btn mslo-btn-save clear-fix favorite-it js-mslo-authenticate" data-user-action="favorite" title="Add To Favorites"
                                    data-uuid="f408604c-48ef-11e0-9e39-a4badb5123e3" data-title="Chicken and Dumplings" data-interaction-count="true"
                                    data-image="http://www.marthastewart.com/amazons3/image-derivative/drupal-assets-prod-ms/styles/img_120x120/d24/0406_edf_chick_dumplings/0406_edf_chick_dumplings_sq.jpg?itok=xgQOLnde">
                                    <div class="ugc-content-wrap clearfix">
                                        <span class="login-frame fave-glyph"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Top intro image -->
                <div class="top-intro-image has-video">
                    <div class="inner">
                        <div class="top-intro-image-play">

                            <img src="http://assets.marthastewart.com/styles/wmax-520-highdpi/d24/0406_edf_chick_dumplings/0406_edf_chick_dumplings_vert.jpg?itok=vqA9iiOR"
                                data-original="http://assets.marthastewart.com/styles/wmax-520-highdpi/d24/0406_edf_chick_dumplings/0406_edf_chick_dumplings_vert.jpg?itok=vqA9iiOR"
                                alt="" title="" class="feat-primary-img" style="display: inline;">
                            <noscript>
                                &lt;img src="http://assets.marthastewart.com/styles/wmax-520-highdpi/d24/0406_edf_chick_dumplings/0406_edf_chick_dumplings_vert.jpg?itok=vqA9iiOR"
                                alt="" title="" /&gt;
                            </noscript>

                            <span class="top-intro-badge mslo-badge mslo-badge-"></span>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <span class="top-intro-shadow"></span>

    </section>
    <!-- 2 column intro -->

    <section class="directions-components main-unit">
        <!-- Components -->
        <div class="col1">

            <h2 class="page-section-title">
                Ingredients </h2>

            <div class="components-container">
                <section class="components-group">
                    <ul class="components-list" id="krakenRoot">
                        <li class="components-item">3 tablespoons butter</li>
                        <li class="components-item">1 medium onion, cut into 1-inch pieces
                            <table onclick="event.stopPropagation();" class="promotionDiv clearfix">
                                <tbody>
                                    <tr>
                                        <td colspan="2"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="promotion-div-content">
                                                <div class="promotion-div-content-img"><img height="60px" src="http://images.groceryserver.com/groceryserver/haxor/log/clientId/d638ccca55f354cb713f1392bc23c507/zipCode/97203/recipeId/1005323/upcValue/33383050211/latitude/45.611119/longitude/-122.741338/entityType/promotion/entityId/31404634/retailerLocationId/79505/distance/3.16/usage/getRecipeInformationByExternalId/promotion/200x188/34/33383050211.jpg.d.jpg"></div>
                                                <div>
                                                    <div class="promotion-div-content-ddd">Onions Organic Yellow/ Brown</div>
                                                    <div class="promotion-div-content-title">3 For $3.96 thru 03/18</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                        <li class="components-item">5 medium carrots, cut crosswise into 1 1/2-inch pieces</li>
                        <li class="components-item">1/2 teaspoon dried thyme</li>
                        <li class="components-item">1 cup (spooned and leveled) all-purpose flour</li>
                        <li class="components-item">1 can (14.5 ounces) reduced-sodium chicken broth</li>
                        <li class="components-item">Coarse salt and freshly ground pepper</li>
                        <li class="components-item">1 1/2 pounds boneless, skinless chicken thighs, cut into 2-inch pieces</li>
                        <li class="components-item">2 tablespoons chopped fresh dill, or 3/4 teaspoon dried dill weed</li>
                        <li class="components-item">1 3/4 teaspoons baking powder</li>
                        <li class="components-item">1/2 cup plus 2 tablespoons milk</li>
                        <li class="components-item">1 package (10 ounces) frozen peas</li>
                    </ul>
                </section>
            </div>
        </div>

        <!-- Directions -->
        <div class="col2">

            <h2 class="page-section-title">
                Directions </h2>

            <section class="directions-group">
                <ol class="directions-list">
                    <li class="directions-item">
                        <p class="directions-item-text">
                            In a Dutch oven (or a 5- to 6-quart heavy pot with a tight-fitting lid), heat butter over medium. Add onion, carrots, and
                            thyme. Cover and cook, stirring occasionally, until onion is soft, about 5 minutes. </p>
                        <div class="watch-link-container">
                            <span class="icon"></span>
                            <span class="watch-link-blurb">
              Watch:
              </span>
                            <a href="http://www.marthastewart.com/973730/how-chop-onion" class="watch-link-title">How to Chop an Onion</a>                            </div>
                    </li>
                    <li class="directions-item">
                        <p class="directions-item-text">
                            Add 1/4 cup flour and cook, stirring, 30 seconds. Add broth and bring to a boil, stirring constantly; season with salt and
                            pepper. Nestle chicken in pot; reduce heat to medium-low. Cover and cook, stirring occasionally,
                            20 minutes. </p>
                        <div class="watch-link-container">
                            <span class="icon"></span>
                            <span class="watch-link-blurb">
              Watch:
              </span>
                            <a href="http://www.marthastewart.com/940507/properly-measuring-flour" class="watch-link-title">How to Measure Flour</a>                            </div>
                    </li>
                    <li class="directions-item">
                        <p class="directions-item-text">
                            Meanwhile, make dumplings: In a medium bowl, whisk together remaining 3/4 cup flour, dill, baking powder, and 1/2 teaspoon
                            salt. With a fork, gradually stir in 1/2 cup milk to form a moist and soft batter. It should
                            be just a little thicker than pancake batter and should easily drop from the tip of a spoon.
                            (Add additional 2 tablespoons milk if too thick.) Set aside. </p>
                    </li>
                    <li class="directions-item">
                        <p class="directions-item-text">
                            Stir peas into pot. Drop batter in simmering liquid in 10 heaping tablespoonfuls, keeping them spaced apart (dumplings will
                            swell as they cook). Cover, and simmer until chicken is tender and dumplings are firm, 20 minutes.
                            Serve. </p>
                    </li>
                </ol>
                <div class="rd_mayWeSuggestDiv" id="mayWeSuggestDiv"></div>
            </section>



        </div>
    </section>

    </div>

    </div>
</article>`;

test("should return parsed content", t => {
    const url = "testUrl";
    const recipe = MarthaStewart(url, chickndumplings);

    t.is(recipe.url, url);
    t.is(recipe.title, "Chicken and Dumplings");
    t.is(recipe.ingredientsBody.replace(/\s/g, ""), `<ul class="ingredients-list">
            <li class="ingredients-item">3 tablespoons butter</li>
            <li class="ingredients-item">1 medium onion, cut into 1-inch pieces</li>
            <li class="ingredients-item">5 medium carrots, cut crosswise into 1 1/2-inch pieces</li>
            <li class="ingredients-item">1/2 teaspoon dried thyme</li>
            <li class="ingredients-item">1 cup (spooned and leveled) all-purpose flour</li>
            <li class="ingredients-item">1 can (14.5 ounces) reduced-sodium chicken broth</li>
            <li class="ingredients-item">Coarse salt and freshly ground pepper</li>
            <li class="ingredients-item">1 1/2 pounds boneless, skinless chicken thighs, cut into 2-inch pieces</li>
            <li class="ingredients-item">2 tablespoons chopped fresh dill, or 3/4 teaspoon dried dill weed</li>
            <li class="ingredients-item">1 3/4 teaspoons baking powder</li>
            <li class="ingredients-item">1/2 cup plus 2 tablespoons milk</li>
            <li class="ingredients-item">1 package (10 ounces) frozen peas</li>

        </ul>`.replace(/\s/g, ""));
    t.is(recipe.directionsBody.replace(/\s/g, ""), `<ol class="directions-list">
            <li class="directions-item">
                <p class="directions-item-text">
                    In a Dutch oven (or a 5- to 6-quart heavy pot with a tight-fitting lid), heat butter over medium. Add onion, carrots, and
                    thyme. Cover and cook, stirring occasionally, until onion is soft, about 5 minutes. </p>
            </li>
            <li class="directions-item">
                <p class="directions-item-text">
                    Add 1/4 cup flour and cook, stirring, 30 seconds. Add broth and bring to a boil, stirring constantly; season with salt and
                    pepper. Nestle chicken in pot; reduce heat to medium-low. Cover and cook, stirring occasionally,
                    20 minutes. </p>
            </li>
            <li class="directions-item">
                <p class="directions-item-text">
                    Meanwhile, make dumplings: In a medium bowl, whisk together remaining 3/4 cup flour, dill, baking powder, and 1/2 teaspoon
                    salt. With a fork, gradually stir in 1/2 cup milk to form a moist and soft batter. It should
                    be just a little thicker than pancake batter and should easily drop from the tip of a spoon.
                    (Add additional 2 tablespoons milk if too thick.) Set aside. </p>
            </li>
            <li class="directions-item">
                <p class="directions-item-text">
                    Stir peas into pot. Drop batter in simmering liquid in 10 heaping tablespoonfuls, keeping them spaced apart (dumplings will
                    swell as they cook). Cover, and simmer until chicken is tender and dumplings are firm, 20 minutes.
                    Serve. </p>
            </li>

        </ol>`.replace(/\s/g, ""));
});
