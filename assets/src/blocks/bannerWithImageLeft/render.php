<?php
if (!isset($attributes['imgURL'])) {
	$attributes['imgURL'] = get_theme_file_uri('/assets/images/heor1.webp');
}
$canonical = wc_get_page_permalink( 'shop' ).'page/'.get_query_var('paged').'/'
?>

<div class="page-banner">
    <div class="banner-image"></div>
    <a href="<?php echo !$attributes['imgLink'] ? $canonical : $attributes['imgLink']; ?>" target="_self" title="banner">
        <img src="<?php echo $attributes['imgURL'] ?>" alt="banner-products" class="max-w-[300px] lg:max-w-[360px] relative left-0 md:left-20 z-0 -rotate-6 banner-products">
    </a>
    <div class="page-banner__content">
        <?php echo $content; ?>
    </div>
    <div class="section-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mouse"
            viewBox="0 0 16 16">
            <path
                d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
        </svg>
    </div>
</div>