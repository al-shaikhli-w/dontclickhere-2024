<?php
if (!isset($attributes['imgURL'])) {
	$attributes['imgURL'] = get_theme_file_uri('/assets/images/library-hero.jpg');
}
?>

<div class="slide">
    <div class="slide-wrapper">
        <div class="slide__img" style="background-image:url(<?php echo $attributes['imgURL']; ?>)"></div>
        <div class="slide-content">
            <?php echo $content; ?>
        </div>
    </div>
</div>