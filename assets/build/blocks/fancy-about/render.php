<section class="fancy-about <?php echo $attributes['layout_variant'] ?>">
    <div class="fancy-about-wrapper">
        <div class="image-wrapper">
            <img src="<?php echo $attributes['image_url'] ?>" alt="Image-<?php echo $attributes['heading'] ?>">
        </div>
        <div class="content-wrapper">
            <h2 class="font-body-heading "><?php echo $attributes['heading'] ?></h2>
            <p><?php echo $attributes['body'] ?></p>
            <?php echo $attributes['button'] ?>
        </div>
</section>