<?php

if (!empty($attributes['themeimage'])) {
	$attributes['imgURL'] = get_theme_file_uri('/assets/images/' . $attributes['themeimage']);
}

if (!isset($attributes['imgURL'])) {
    $attributes['imgURL'] = get_theme_file_uri('/assets/images/library-hero.jpg');
}

?>
<div class="swiper-slide shrink-0 relative block w-auto transition-all">
    <div class="gallery-box">
        <a href="<?php echo $attributes['imgURL'] ?>" data-fslightbox="gallery" title="gallery image">
            <div class="relative gallery-image bg-gray-900 overflow-clip rounded-md">
                <img src="<?php echo $attributes['imgURL'] ?>" class="h-[450px] w-full object-cover"
                    alt="gallery-image" />
                <div class="gallery-hover">
                    <div class="flex items-center justify-center w-[80px] h-[80px] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class=" fill-gray-900 feather icon-feather-zoom-in" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                            <path
                                d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                            <path fill-rule="evenodd"
                                d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>