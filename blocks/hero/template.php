<?php


$Heading1 = get_field('heading_h1');
$Heading2 = get_field('heading_h2');
$contnet = get_field('content');
$cta_primary = get_field('cta_primary');
$cta_secondary = get_field('cta_secondary');
?>
<section class="hero">
    <div class="wrapper">
        <div class="hero__content">
            <h2 class="hero__subheading"><?php echo $Heading2; ?></h2>
            <h1 class="hero__heading"><?php echo $Heading1; ?></h1>
            <p class="hero__text"><?php echo $contnet; ?></p>
            <div class="hero__cta">
                <?php if ($cta_primary) : ?>
                    <a href="<?php echo $cta_primary['url']; ?>" class="btn btn--primary">
                        <?php echo $cta_primary['title']; ?>
                        <span class="icon">
                            <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83301 14H22.1663" stroke="black" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 5.83325L22.1667 13.9999L14 22.1666" stroke="black" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span> 
                    </a>
                <?php endif; ?>
                <?php if ($cta_secondary) : ?>
                    <a href="<?php echo $cta_secondary['url']; ?>" class="btn btn--secondary">
                        <?php echo $cta_secondary['title']; ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>
        <img src="<?php bloginfo('template_url'); ?>/assets/images/hero.svg" alt="hero" class="hero--image">
    </div>
</section>