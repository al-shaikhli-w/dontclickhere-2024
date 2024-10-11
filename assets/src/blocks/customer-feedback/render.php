<?php
$postsToShow = $attributes['postsToShow'];
$order = $attributes['order'];
$orderBy = $attributes['orderBy'];

$postArgs = [
	'post_type' => 'customer_feedback',
	'posts_per_page' => $postsToShow,
	'order' => $order,
	'orderby' => $orderBy,
];

?>

<section class="py-11 customer_feedback-section">
    <div class="container customer_feedback-slider">
        <div class="customer_feedbacks swiper-wrapper w-full h-full">
            <?php $posts = new WP_Query($postArgs);
			if ($posts->have_posts()) :
				while ($posts->have_posts()) :
					$posts->the_post();
					$postID = get_the_ID();
					$imageUrl = get_the_post_thumbnail_url($postID, 'full');
			?>
            <div class="customer_feedback swiper-slide bg-white min-h-[250px]">
                <div class="excerpt"><?php the_excerpt(); ?></div>
                <div class="customer_feedback-wrapper">
                    <div
                        class="avatar relative inline-flex ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <div class="customer_feedback-image w-24 rounded-full overflow-hidden">
                            <img src="<?php echo $imageUrl ?>" class="w-full h-full object-cover"
                                alt="<?php the_title(); ?>" />
                        </div>
                    </div>
                    <h3 class="heading" data-splitting><?php the_title(); ?></h3>
                </div>
            </div>
            <?php
				endwhile;
			endif;
			?>
        </div>
    </div>
    <div class="navigation">
        <div class="customer_feedback-button-prev"><?php _e('prev', 'dch-base-theme') ?></div>
        <div class="customer_feedback-button-next"><?php _e('next', 'dch-base-theme') ?></div>
    </div>
</section>