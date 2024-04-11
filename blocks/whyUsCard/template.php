<?php if (have_rows('why_us_cards')) : ?>
    <div class="swiper whyUsCards">
        <div class="swiper-wrapper why-us-wrapper">
            <?php while (have_rows('why_us_cards')) : the_row();
                $icon = get_sub_field('icon');
                $heading = get_sub_field('heading');
            ?>
                <div class="swiper-slide">
                    <?php echo wp_get_attachment_image($icon, 'full'); ?>
                    <h3><?php echo acf_esc_html($heading); ?></h3>
                    <p><?php echo acf_esc_html(get_sub_field('content')); ?></p>
                </div>
            <?php endwhile; ?>

        </div>
        <div class="swiper-pagination"></div>
    </div>
<?php endif; ?>