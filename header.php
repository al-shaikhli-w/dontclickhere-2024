<?php
header('Access-Control-Allow-Origin: *'); ?>
<!doctype html>
<html <?php language_attributes(); ?> class="font-body">

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="<?php bloginfo('name'); ?>">
    <meta name="copyright" content="<?php bloginfo('name'); ?>">
    <meta name="keywords" content="">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot-news" content="nosnippet">
    <meta name="googlebot" content="nosnippet">
    <meta name="bingbot" content="nosnippet">
    <meta name="msnbot" content="nosnippet">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="<?php bloginfo('name'); ?>">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="theme-color" content="#ffffff">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php bloginfo('template_url'); ?>/assets/images/icons/fav-light.webp">
    <meta name="application-name" content="<?php bloginfo('name'); ?>">
    <meta name="msapplication-tooltip" content="<?php bloginfo('description'); ?>">
    <meta name="msapplication-starturl" content="<?php bloginfo('url'); ?>">
    <meta name="msapplication-navbutton-color" content="#ffffff">
    <!-- add fav icon  -->
    <link rel="manifest" href="<?php bloginfo('template_url'); ?>/manifest.json">
    <link rel="icon" type="image/png" href="<?php bloginfo('template_url'); ?>/assets/images/icons/512x512.png">
    <link rel="canonical" href="<?php bloginfo('url'); ?>">
    <link rel="shortlink" href="<?php bloginfo('url'); ?>">
    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> Feed" href="<?php bloginfo('url'); ?>/feed/">
    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> Comments Feed" href="<?php bloginfo('url'); ?>/comments/feed/">
    <link rel="alternate" type="application/atom+xml" title="<?php bloginfo('name'); ?> Feed" href="<?php bloginfo('url'); ?>/feed/atom/">
    <link rel="alternate" type="application/rdf+xml" title="<?php bloginfo('name'); ?> Feed" href="<?php bloginfo('url'); ?>/feed/rdf/">
    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> Feed" href="<?php bloginfo('url'); ?>/feed/rss/">
    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> Comments Feed" href="<?php bloginfo('url'); ?>/comments/feed/rss/">
    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> Feed" href="<?php bloginfo('url'); ?>/feed/rss2/">
    <title>
        <?php wp_title(' | ', true, 'right'); ?>
        <?php bloginfo('name'); ?> –
        <?php bloginfo('description'); ?>
    </title>
    <meta property="og:title" content="<?php bloginfo('name'); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php bloginfo('url'); ?>">
    <meta property="og:site_name" content="<?php bloginfo('name'); ?>">
    <meta property="og:image" content="<?php bloginfo('template_url'); ?>/assets/images/icons/fav-light.webp">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>">

    <?php wp_head(); ?>
</head>
<!-- 
    TODO: Add overlay 
      <div class="overlay first"></div>
  <div class="overlay second"></div>
  <div class="overlay third"></div>
  https://codepen.io/chouaibblgn45/pen/ZEbaadr

 -->

<body <?php body_class("bg-[#020617]"); ?>>
    <?php wp_body_open(); ?>
    <header class="header absolute w-full z-10">
        <section class="header-container" name="header-container">

            <div class="header-logo">
                <a href="<?php bloginfo('url'); ?>" aria-label="dontclickhere">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 705 150">
                        <path fill="#00FFC2" d="M48.6132 35.9584c6.2009 0 11.6144 1.0335 16.2406 3.1005v24.3609c-1.8702-.8859-4.134-1.6241-6.7916-2.2147-2.6575-.689-5.6596-1.0335-9.0061-1.0335-7.0868 0-12.5988 1.2796-16.5359 3.8387-3.9371 2.5592-5.9056 6.3486-5.9056 11.3684 0 1.2796.1476 2.7068.4429 4.2816.2953 1.4765.689 2.9037 1.1811 4.2816l-18.45517.0001c-.49214-1.2796-.83663-2.7068-1.03349-4.2817-.29529-1.5748-.44293-3.2481-.44293-5.0198 0-6.4962 1.27956-12.3527 3.83869-17.5693L2.10606 48.6556 13.6221 34.482l10.0396 8.5632c3.2482-2.2638 6.9884-3.9863 11.2208-5.1674 4.2324-1.2796 8.8093-1.9194 13.7307-1.9194Zm21.9986 39.1251V41.7164c5.7088 2.9529 10.1872 7.3329 13.4354 13.1401 3.1497 5.7089 4.7245 12.4512 4.7245 20.2269 0 3.445-.3445 6.6931-1.0335 9.7444-.5906 2.9528-1.5256 5.7088-2.8052 8.2679l10.6302 8.7113-11.8113 13.73-10.1873-8.563c-3.2481 2.264-6.9391 4.036-11.0731 5.315-4.2324 1.181-8.8585 1.772-13.8783 1.772-9.1538 0-16.9296-2.166-23.3274-6.496-6.3978-4.331-10.8763-10.2369-13.4354-17.7174h36.7628c6.9883 0 12.4019-1.2795 16.2406-3.8387 3.8386-2.6575 5.758-6.2993 5.758-10.9254Z" />
                        <path fill="#00FFC2" d="M447.127 114.197H428.65V36.2828h18.477v77.9142Zm47.862-77.9142V63.219h-18.477V36.2828h18.477Zm-18.477 77.9142V82.8089h-24.821V67.6712h43.298v46.5258h-18.477Zm36.27-77.9142h18.477v31.8336h27.159v13.9133h-27.159v13.0229h-18.477V36.2828Zm47.862 0-.891 14.6925h-23.931V36.2828h24.822Zm-47.862 77.9142V99.5048h49.309l-.891 14.6922h-48.418Zm106.656-32.3899 17.03 32.3899h-20.147l-14.024-28.3829h-25.601V36.2828c1.559-.2226 3.451-.4081 5.677-.5565 2.226-.1484 4.452-.2597 6.678-.3339 2.301-.1484 4.341-.2597 6.122-.3339v38.178h6.79c4.229 0 7.383-1.1872 9.461-3.5618 2.152-2.4487 3.228-5.4911 3.228-9.1271 0-3.9328-1.113-6.901-3.339-8.9045-2.227-2.0777-5.38-3.1166-9.462-3.1166h-2.114v-13.468c1.558.0742 3.042.1484 4.452.2226 1.484.0742 2.894.2226 4.23.4452 8.385 1.1131 14.618 3.7473 18.699 7.9027 4.155 4.1555 6.233 9.3127 6.233 15.4716 0 4.9717-1.187 9.424-3.562 13.3568-2.374 3.9328-5.825 7.0494-10.351 9.3497Zm-42.742 32.3899V90.2664h18.477v23.9306h-18.477Zm72.502-77.9142h18.476v31.8336h27.159v13.9133h-27.159v13.0229h-18.476V36.2828Zm47.861 0-.89 14.6925h-23.931V36.2828h24.821Zm-47.861 77.9142V99.5048h49.308l-.89 14.6922h-48.418Z" />
                        <path fill="#fff" d="M174.867 51.0866c-2.374 0-4.712.2226-7.012.6678-2.226.4452-4.341 1.076-6.344 1.8922-2.004.7421-3.822 1.6696-5.454 2.7827V39.1768c2.374-1.4099 5.045-2.4488 8.014-3.1166 3.042-.742 6.121-1.1131 9.238-1.1131 4.378 0 8.608.5195 12.689 1.5583 4.155 1.0389 7.717 2.4488 10.685 4.2297l-3.561 14.0246c-2.969-1.1873-6.011-2.0777-9.128-2.6714-3.116-.6678-6.159-1.0017-9.127-1.0017Zm-23.374-9.3498V75.24c0 3.9329.556 7.5689 1.67 10.9081 1.187 3.265 2.894 6.196 5.12 8.7932h-20.369c-1.485-2.5972-2.672-5.5282-3.562-8.7932-.891-3.265-1.336-6.8639-1.336-10.7967 0-7.8657 1.633-14.6554 4.898-20.3691 3.265-5.7879 7.791-10.2031 13.579-13.2455Zm21.927 73.7962c-7.42 0-13.913-1.41-19.478-4.23-5.566-2.894-9.981-6.864-13.246-11.9095h31.389c4.155 0 7.977-.2597 11.464-.7791 3.562-.5937 6.753-1.5583 9.573-2.894l3.561 14.0246c-2.968 1.855-6.493 3.302-10.574 4.341-4.081.965-8.311 1.447-12.689 1.447Zm53.924-79.2502v57.9906h-18.477V36.2828h18.477Zm31.5 62.4429-.891 15.4713h-49.086V98.7257h49.977Zm30.349 15.4713h-18.477V36.2828h18.477v77.9142Zm55.895-63.1104c-2.375 0-4.712.2226-7.013.6678-2.226.4452-4.341 1.076-6.344 1.8922-2.004.7421-3.822 1.6696-5.454 2.7827V39.1768c2.374-1.4099 5.046-2.4488 8.014-3.1166 3.042-.742 6.122-1.1131 9.238-1.1131 4.378 0 8.608.5195 12.689 1.5583 4.156 1.0389 7.718 2.4488 10.686 4.2297l-3.562 14.0246c-2.968-1.1873-6.011-2.0777-9.127-2.6714-3.117-.6678-6.159-1.0017-9.127-1.0017Zm-23.375-9.3498V75.24c0 3.9329.557 7.5689 1.67 10.9081 1.187 3.265 2.894 6.196 5.12 8.7932h-20.369c-1.484-2.5972-2.671-5.5282-3.562-8.7932-.89-3.265-1.335-6.8639-1.335-10.7967 0-7.8657 1.632-14.6554 4.897-20.3691 3.265-5.7879 7.791-10.2031 13.579-13.2455Zm21.928 73.7962c-7.421 0-13.914-1.41-19.479-4.23-5.565-2.894-9.98-6.864-13.245-11.9095h31.388c4.155 0 7.977-.2597 11.465-.7791 3.561-.5937 6.752-1.5583 9.572-2.894l3.562 14.0246c-2.968 1.855-6.493 3.302-10.574 4.341-4.082.965-8.311 1.447-12.689 1.447Zm53.923-1.336h-18.477V36.2828h18.477v77.9142Zm45.747-77.9142-41.183 58.9924V66.6695l21.371-30.3867h19.812ZM421.94 114.197l-13.468-20.7027 11.354-16.8073 24.487 37.51H421.94Z" />
                    </svg>
                </a>
            </div>
            <nav class="header-menu">
                <button class="burgermenu">
                    <span></span>
                </button>
                <?php
                wp_nav_menu([
                    'theme_location' => 'header-menu',
                    'container' => false,
                ]);
                ?>
            </nav>

        </section>
    </header>