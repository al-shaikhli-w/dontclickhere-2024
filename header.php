<?php
header('Access-Control-Allow-Origin: *'); ?>
<!doctype html>
<html <?php language_attributes(); ?>>

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

<body <?php body_class("bg-gray"); ?>>

    <?php wp_body_open(); ?>
    <header class=" container flex justify-between items-center bg-metal">
        <div class="logo">
            <a href="<?php bloginfo('url'); ?>">
                <img src="<?php bloginfo('template_url'); ?>/assets/images/icons/fav-light.webp" alt="<?php bloginfo('name'); ?>">
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="<?php bloginfo('url'); ?>">Home</a></li>
                <li><a href="<?php bloginfo('url'); ?>/about">About</a></li>
                <li><a href="<?php bloginfo('url'); ?>/contact">Contact</a></li>
            </ul>
        </nav>
    </header>