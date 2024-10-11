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
        <meta name="mobile-web-app-capable" content="yes">
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
<body id="agenturen" <?php body_class("bg-white max-w-[100svw] overflow-x-hidden"); ?>>
<div class="navbar">
    <div class="navbar__content container mt-4 flex justify-between items-center">
        <div class="navbar__content__left">
            <a href="<?php bloginfo('url'); ?>/agenturen" aria-label="dontclickhere">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="38" fill="none"><path fill="#DC2626" d="M21.91 1.177c2.831 0 5.302.471 7.414 1.415v11.121c-.853-.404-1.887-.741-3.1-1.01-1.213-.315-2.584-.473-4.112-.473-3.235 0-5.751.585-7.549 1.753-1.797 1.168-2.696 2.898-2.696 5.19 0 .584.068 1.236.202 1.955.135.674.315 1.325.54 1.954H4.184a8.305 8.305 0 0 1-.472-1.954 12.426 12.426 0 0 1-.202-2.292c0-2.966.584-5.64 1.752-8.02L.679 6.972 5.936.503l4.583 3.909c1.483-1.034 3.19-1.82 5.123-2.36 1.932-.583 4.021-.875 6.268-.875Zm10.043 17.861V3.805c2.606 1.348 4.65 3.348 6.134 6 1.437 2.605 2.156 5.683 2.156 9.233a20.16 20.16 0 0 1-.471 4.449 14.954 14.954 0 0 1-1.281 3.774l4.853 3.977-5.392 6.268-4.651-3.91c-1.483 1.034-3.168 1.843-5.055 2.427-1.932.54-4.044.81-6.336.81-4.179 0-7.729-.99-10.65-2.966-2.92-1.978-4.965-4.674-6.133-8.089H21.91c3.19 0 5.662-.584 7.414-1.752 1.753-1.213 2.629-2.876 2.629-4.988Z"/></svg>
            </a>
        </div>
        <div class="navbar__content__right font-orbitron">
            <button type="button" class="burger visible lg:invisible flex flex-col gap-2 h-full w-full justify-center items-center lg:hidden" id="burger">
                <span class="burger-line w-8 bg-red h-[3px]"></span>
                <span class="burger-line w-6 bg-red h-[3px]"></span>
                <span class="burger-line w-4 bg-red h-[3px]"></span>
            </button>
            <nav class="menu hidden lg:inline-flex opacity-0 invisible lg:opacity-100 lg:visible">
                <ul class="menu lg:flex items-center lg:flex-row gap-6 lg:gap-6 xl:gap-8">
                    <li class="menu-item"><a href="#about" class="menu-link">Über Mich</a></li>
                    <li class="menu-item"><a href="#services" class="menu-link">Services</a></li>
                    <li class="menu-item"><a href="#work" class="menu-link">Unsere Arbeit</a></li>
                    <li class="menu-item"><a href="#contact" class="menu-link contact">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>
<?php wp_body_open();


while (have_posts()) :
the_post();
echo '<main class="page">';
    the_content();
    echo '</main>';
endwhile;
?>
<footer class="border-t border-gray py-4 top-0 m-0 mt-12">
    <div class="footer__wrapper container flex justify-between flex-col md:flex-row gap-6 py-6 items-center">
        <div class="footer__content__left">
            <a href="<?php bloginfo('url'); ?>/agenturen" aria-label="dontclickhere">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="38" fill="none"><path fill="#DC2626" d="M21.91 1.177c2.831 0 5.302.471 7.414 1.415v11.121c-.853-.404-1.887-.741-3.1-1.01-1.213-.315-2.584-.473-4.112-.473-3.235 0-5.751.585-7.549 1.753-1.797 1.168-2.696 2.898-2.696 5.19 0 .584.068 1.236.202 1.955.135.674.315 1.325.54 1.954H4.184a8.305 8.305 0 0 1-.472-1.954 12.426 12.426 0 0 1-.202-2.292c0-2.966.584-5.64 1.752-8.02L.679 6.972 5.936.503l4.583 3.909c1.483-1.034 3.19-1.82 5.123-2.36 1.932-.583 4.021-.875 6.268-.875Zm10.043 17.861V3.805c2.606 1.348 4.65 3.348 6.134 6 1.437 2.605 2.156 5.683 2.156 9.233a20.16 20.16 0 0 1-.471 4.449 14.954 14.954 0 0 1-1.281 3.774l4.853 3.977-5.392 6.268-4.651-3.91c-1.483 1.034-3.168 1.843-5.055 2.427-1.932.54-4.044.81-6.336.81-4.179 0-7.729-.99-10.65-2.966-2.92-1.978-4.965-4.674-6.133-8.089H21.91c3.19 0 5.662-.584 7.414-1.752 1.753-1.213 2.629-2.876 2.629-4.988Z"/></svg>
            </a>
        </div>
        <div class="footer__content__right">
            <ul class="social-media" style="flex-direction: row !important;">
                <li>
                    <a href="https://wa.me/436649232255" target="_self" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/dontclickhere_websites?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/dontclickhereweb" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/dontclickhere/" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>

</footer>
<p class="copyright text-center p-4 font-orbitron border-t border-gray">
    Copyright © <?php echo date('Y');?> <br>
    Designed and dev with love <span>❤️</span> by
    <a href="https://dontclickhere.at" target="_blank" class="underline font-bold">dontclickhere.at</a>
</p>
<?php wp_footer(); ?>
</body>

</html>
