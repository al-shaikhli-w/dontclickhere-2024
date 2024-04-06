<?php


$Heading1 = get_field('heading_h1');
$Heading2 = get_field('heading_h2');
$contnet = get_field('content');
$cta_primary = get_field('cta_primary');
$cta_secondary = get_field('cta_secondary');
?>
<section class="hero">
    <div class="container">
        <div class="hero__content">
            <h2 class="hero__subheading"><?php echo $Heading2; ?></h2>
            <h1 class="hero__heading"><?php echo $Heading1; ?></h1>
            <p class="hero__text"><?php echo $contnet; ?></p>
            <div class="hero__cta">
                <?php if ($cta_primary) : ?>
                    <a href="<?php echo $cta_primary['url']; ?>" class="btn btn--primary"><?php echo $cta_primary['title']; ?></a>
                <?php endif; ?>
                <?php if ($cta_secondary) : ?>
                    <a href="<?php echo $cta_secondary['url']; ?>" class="btn btn--secondary"><?php echo $cta_secondary['title']; ?></a>
                <?php endif; ?>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="logo-big" fill="none" viewBox="0 0 337 292" width="400">
            <path fill="#00FFC2" d="M168.079 6.00123c22.28-.00001 41.73 3.71325 58.351 11.13977v87.527c-6.719-3.183-14.853-5.8355-24.401-7.9573-9.548-2.4755-20.335-3.7133-32.358-3.7133-25.463 0-45.267 4.5974-59.412 13.7926-14.1462 9.194-21.219 22.809-21.219 40.845 0 4.598.5305 9.725 1.5914 15.384 1.0609 5.304 2.4755 10.432 4.2437 15.383H28.567c-1.7682-4.597-3.0059-9.725-3.7132-15.383-1.061-5.659-1.5914-11.67-1.5914-18.036 0-23.34 4.5973-44.382 13.7921-63.1253L.982854 51.6212 42.3591.69659 78.4307 31.4635c11.6702-8.1337 25.1083-14.3225 40.3153-18.5662 15.207-4.59739 31.651-6.89607 49.333-6.89607ZM247.118 146.574V26.6894c20.512 10.6092 36.602 26.3463 48.273 47.2113 11.316 20.5113 16.975 44.7363 16.975 72.6733 0 12.378-1.238 24.048-3.714 35.011-2.122 10.609-5.481 20.511-10.079 29.706l38.194 31.297-42.437 49.334-36.602-30.767c-11.67 8.133-24.932 14.499-39.785 19.096-15.207 4.244-31.828 6.366-49.864 6.366-32.889 0-60.826-7.78-83.8132-23.34-22.9868-15.561-39.0775-36.779-48.2723-63.656H168.079c25.109 0 44.559-4.598 58.351-13.792 13.792-9.549 20.688-22.633 20.688-39.255Z" />
        </svg>
    </div>
</section>