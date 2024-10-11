<?php

if (!empty($attributes['themeimage'])) {
	$attributes['imgURL'] = get_theme_file_uri('/assets/images/' . $attributes['themeimage']);
}

if (!isset($attributes['imgURL'])) {
    $attributes['imgURL'] = get_theme_file_uri('/assets/images/library-hero.jpg');
}

?>



<div class="swiper-slide">
    <div class="image-container" style="background-image:url('<?php echo $attributes['imgURL'] ?>');"></div>
    <div class="bg-gradient-nero-grey-brown"></div>
    <div class="container h-full relative z-2">
        <div class="content">
            <div class="relative text-white text-center z-10">
                <?php echo $content; ?>
            </div>
        </div>
    </div>
</div>