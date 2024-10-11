<?php
if (!isset($attributes['imgURL'])) {
	$attributes['imgURL'] = get_theme_file_uri('/assets/images/icons/PresentationChartLine.svg');
}

echo '<pre>';
print_r($attributes);
echo '</pre>';
?>

<div class="service">
    <div class="service-wrapper">
        <img class="service__img" src="<?php echo $attributes['imgURL']; ?>" alt="service icon" width="50" height="50">
        <div class="service-content">
            <?php echo $content; ?>
        </div>
    </div>
</div>