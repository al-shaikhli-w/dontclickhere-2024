<section class="section slider-section mt-40">
    <div class="container slider-column">
        <div class="swiper work-slider">
            <div class="swiper-wrapper flex">
                <?php
                $args = array(
                    'post_type' => 'work',
                    'posts_per_page' => -1,
                );
                $query = new WP_Query($args);
                if ($query->have_posts()) :
                    while ($query->have_posts()) : $query->the_post();
                        $image = get_the_post_thumbnail_url();
                ?>
                        <div class="swiper-slide">
                            <img src="<?php echo $image; ?>" alt="<?php the_title(); ?>">
                        </div>
                <?php
                    endwhile;
                endif;
                wp_reset_postdata();
                ?>
            </div>
            <span class="swiper-pagination"></span>
        </div>
    </div>
</section>