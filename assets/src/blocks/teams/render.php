<?php
$postsToShow = $attributes['postsToShow'];
$order = $attributes['order'];
$orderBy = $attributes['orderBy'];

$postArgs = [
	'post_type' => 'team',
	'posts_per_page' => $postsToShow,
	'order' => $order,
	'orderby' => $orderBy,
];
?>
<section class="py-11 relative">
    <div class="container team-slider overflow-hidden">
        <div class="teams swiper-wrapper w-full h-full">
            <?php $posts = new WP_Query($postArgs);
			if ($posts->have_posts()) :
				while ($posts->have_posts()) :
					$posts->the_post();
					$postID = get_the_ID();
					$imageUrl = get_the_post_thumbnail_url($postID, 'full');
			?>
            <div class="team swiper-slide text-center flex justify-center items-center">
                <div class="team-wrapper flex flex-col justify-center items-center">
                    <div class="team-image">
                        <img src="<?php echo $imageUrl ?>" alt="<?php the_title(); ?>" />
                    </div>
                    <hr>
                    <h3 class="heading"><?php the_title(); ?></h3>
                    <div class="excerpt"><?php the_excerpt(); ?></div>
                </div>
            </div>
            <?php
			endwhile;
			endif;
			?>
        </div>
    </div>
    <div class="navigation flex justify-center items-center gap-6 mt-6">
        <div class="team-button-prev cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"></path>
            </svg>
        </div>
        <div class="team-button-next cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"></path>
            </svg>
        </div>
    </div>
</section>