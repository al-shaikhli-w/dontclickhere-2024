<?php
$sliderHasproduct = $attributes['sliderHasproduct'] ? 'slider-has-product' : '';
?>

<div class="slider-section <?php echo $sliderHasproduct ?>">
    <div class="slides-nav">
        <button class="slides-nav__item slides-nav__item--prev">
            &larr;
        </button>
        <button class="slides-nav__item slides-nav__item--next">
            &rarr;
        </button>
    </div>
    <div class="fancy-slides">
        <?php echo $content; ?>
    </div>
</div>
<!-- set the image from images from assets -->
<!-- <img src="<?php //echo  get_theme_file_uri('/assets/images/before-effects.png'); ?>" alt=""> -->