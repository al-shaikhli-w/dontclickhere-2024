<?php

if (!empty($attributes['themeimage'])) {
    $attributes['imgURL'] = get_theme_file_uri('/assets/images/' . $attributes['themeimage']);
}

if (!isset($attributes['imgURL'])) {
    $attributes['imgURL'] = get_theme_file_uri('/assets/images/library-hero.jpg');
}

?>

<div class="pricing-card">
    <div class="pricing-card-wrapper">
        <div class="image-wrapper">
            <img src="<?php echo $attributes['imgURL'] ?>" alt="Pricing Image" />
        </div>
        <div class="content">
            <div class="pricing-card-title">
                <h3 class="heading" data-splitting><?php echo $attributes['heading'] ?> </h3>
                <p class="description" data-splitting><?php echo $attributes['description'] ?> </p>
            </div>
            <?php if ($attributes['price']) : ?>
            <h4 class="price" data-splitting><sup>€</sup><?php echo $attributes['price'] ?></h4>
            <?php endif; ?>
        </div>
    </div>
</div>