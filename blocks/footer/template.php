<footer class="footer scrollFromBottom">
    <div class="footer__bg">
    </div>
    <div class="footer__content">
        <div class="wrapper">
            <div class="footer__content__left">
                <h2><?php the_field("heading_big") ?></h2>
            </div>
            <div class="footer__content__middle">
                <ul>
                    <li>
                        <?php $tel = get_field("tel"); ?>
                        <a href="tel:<?php echo str_replace(' ', '', $tel); ?>"> <?php echo $tel; ?></a>
                    </li>
                    <li>
                        <a href="mailto:<?php the_field("email"); ?>"><?php the_field("email"); ?></a>
                    </li>
                </ul>
            </div>
            <div class="footer__content__right">
                <ul class="social-media">
                    <?php
                    if (have_rows("social_media")) :
                        while (have_rows("social_media")) : the_row();
                            $socialMediaLink = get_sub_field("social_media_linke");
                            if ($socialMediaLink) {
                                $link_url = $socialMediaLink['url'];
                                $link_title = $socialMediaLink['title'];
                                $link_target = $socialMediaLink['target'] ? $socialMediaLink['target'] : '_self';
                            } ?>
                            <li>
                                <a href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>">
                                    <?php echo $link_title; ?>
                                </a>
                            </li>
                    <?php endwhile;
                    endif; ?>

                </ul>
            </div>
        </div>
    </div>
    <div class="under__footer">
        <div class="logo">
            <a href="<?php bloginfo('url'); ?>" aria-label="dontclickhere">
                <?php $logo_image_id = get_field("logo"); ?>
                <img src="<?php echo wp_get_attachment_image_url($logo_image_id, 'full'); ?>" alt="logo" width="180px">
            </a>
        </div>
        <nav class="footer__nav">
            <ul class="footer__nav__items">
                <?php
                if (have_rows("nav_links")) :
                    while (have_rows("nav_links")) : the_row();
                        $navLink = get_sub_field("item");
                        if ($navLink) {
                            $nav_url = $navLink['url'];
                            $nav_title = $navLink['title'];
                            $nav_target = $navLink['target'] ? $navLink['target'] : '_self';
                        } ?>
                        <li>
                            <a href="<?php echo esc_url($nav_url); ?>" target="<?php echo esc_attr($nav_target); ?>">
                                <?php echo $nav_title; ?>
                            </a>
                        </li>
                <?php endwhile;
                endif; ?>
            </ul>
        </nav>
    </div>
</footer>
<div class="copy-write relative bottom-[-148px]">
    <p class="text-center !text-xs pb-2 !text-opacity-80">© DONTCLICKHERE • MADE IN AUSTRIA WITH LOVE</p>
</div>