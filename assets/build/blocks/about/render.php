<?php
if (!isset($attributes['imgURL'])) {
	$attributes['imgURL'] = get_theme_file_uri('/assets/images/hero.webp');
}
?>

<section id="about" class="about-section overflow-hidden">
    <div class="container">
        <div class="wrapper">
            <div class="about-section_content">
                <h2 class="" data-shadow-animation="true" data-animation-delay="700">
                    <?php echo $attributes['headingField']?><span></span></h2>
                <p class=""><?php echo $attributes['contentField']?></p>
                <div class="buttons">
                    <a href="<?php echo $attributes['buttonLinkPrimary']?>" class="btn btn-primary">
                        <span class="flex justify-between items-center">
                            <span class="btn-double-text"><?php echo $attributes['buttonText']?></span>
                        </span>
                    </a>
                    <a href="<?php echo $attributes['buttonLinkSecondary']; ?>"
                        class="btn btn-link btn-secondary btn-hover-animation-switch">
                        <span class="flex justify-between items-center gap-2 relative">
                            <span class="btn-text"><?php echo $attributes['buttonTextSecondary']?></span>
                            <span class="btn-icon icon-left absolute -left-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </span>
                            <span class="btn-icon icon-right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
            <div class="about-section_image">
                <div class="relative w-[12rem] sm:w-72 lg:w-[30rem]">
                    <img src="<?php echo $attributes['imgURLLeft'] ? $attributes['imgURLLeft'] : $attributes['imgURL']; ?>"
                        class="rounded-lg" alt="about-section-left-imag">
                </div>

                <div
                    class="absolute right-[15px] -bottom-[60px] rounded-md w-52 md:w-72 lg:w-80 xl:w-[25rem] overflow-hidden">
                    <img src="<?php echo $attributes['imgURLRight'] ? $attributes['imgURLRight'] : $attributes['imgURL']; ?>"
                        class="shadow-xl w-full" alt="about-section-right-image">
                </div>
            </div>
        </div>
    </div>
</section>