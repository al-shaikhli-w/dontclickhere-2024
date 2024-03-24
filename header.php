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

<body <?php body_class("bg-black text-white font-body"); ?>>
    <?php wp_body_open(); ?>
    <header class="header absolute w-full z-10">
        <section class="header-container" name="header-container">

            <div class="header-logo">
                <a href="<?php bloginfo('url'); ?>" aria-label="dontclickhere">
                    <svg xmlns="http://www.w3.org/2000/svg" class="logo-s relative" fill="none" viewBox="0 0 117 120">
                        <path class="" fill="#fff" d="M26.2063 2.89618c-2.0533 2.05552-.3862 5.90835 6.6681 15.53972 8.337 11.1725 10.0046 12.7134 11.9296 10.7863 1.2833-1.2847-5.6416-16.3106-10.7719-23.759-2.3087-3.21048-6.0291-4.494035-7.8258-2.56702Zm44.744.76199C68.769 7.1268 66.9692 24.3394 68.2507 29.6055c.7689 3.0826 1.1537 3.3394 2.6933 1.7977 2.6943-2.8265 9.6249-20.2972 9.6259-24.40756.0005-2.31208-.897-4.11016-2.436-5.00896C74.4145.060801 73.1317.317993 70.9503 3.65817ZM94.9457 29.0938C81.7264 38.3431 80.186 40.655 84.6766 43.6076c1.668.8985 3.2079.7698 6.4163-.772 6.2884-2.9551 25.6691-19.012 25.0271-20.6813-.256-.8989-2.181-1.669-4.234-1.9253-2.951-.2562-6.673 1.671-16.9403 8.8648ZM1.25985 44.9515c-2.56853 2.8164.73213 4.7227 10.93585 6.1062 14.8838 1.9891 15.7849 1.8803 17.5099-1.1087 1.4527-2.517 1.3863-2.7651-1.9055-4.1419-4.0114-1.5827-20.5158-3.6687-23.24344-2.9368-.99187.2661-2.47089 1.1948-3.29681 2.0812ZM22.6688 75.3618C9.96827 79.57 3.29485 85.0735 5.91317 88.7822c1.36153 1.9285 2.39504 1.9755 8.87873.6113 10.011-2.1928 19.5005-9.6899 20.6309-16.2752.326-1.8996-1.1521-1.6318-12.754 2.2435Zm28.7684 6.528c-.7697.8993-3.4644 6.2949-6.2873 11.9474-3.8496 8.0928-4.8765 11.8188-5.0061 17.5988-.0009 4.111.6396 7.45 1.2809 7.578 1.7955.385 9.4958-20.8108 11.037-30.1881 1.2844-7.9643 1.0282-9.6341-1.0245-6.9361Z" />
                        <path fill="#84CC16" d="M112.391 77.1776 68.2995 57.7919c-1.5221-.4708-2.9284 1.0924-2.3913 2.4742l16.8669 43.3969c.3774.972 1.4715 1.453 2.4422 1.075.4571-.178.8271-.525.9797-.877l5.816-11.0951 13.692 13.9751c.233.238.551.375.885.379.162-.001.32-.03.468-.088.157-.061.301-.155.424-.276l6.291-6.178c.498-.485.506-1.2831.019-1.7793l-13.256-13.5343 11.774-4.5872c.971-.3782 1.452-1.4733 1.075-2.4445-.111-.2839-.349-.6826-.994-1.0551Z" />
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