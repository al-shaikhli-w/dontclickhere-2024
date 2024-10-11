<?php
$postType = $attributes['postType'];
$postsToShow = $attributes['postsToShow'];
$order = $attributes['order'];
$orderBy = $attributes['orderBy'];
$categories = $attributes['category'];
$postsideimage = $attributes['postsideimage'];

$postArgs = array(
	'post_type' => $postType,
	'posts_per_page' => $postsToShow,
	'order' => $order,
	'orderby' => $orderBy,
);

if (!empty($categories)) {
	$postArgs['category_name'] = $categories;
}
?>

<section class="py-11 <?php echo $postsideimage ? 'blog-simple' : 'blog-side-image'; ?>">
    <div class="container">
        <ul class="blog-wrapper">
            <?php $posts = new WP_Query($postArgs);
			if ($posts->have_posts()) {
				while ($posts->have_posts()) {
					$posts->the_post();
					$postID = get_the_ID();
					$imageUrl = get_the_post_thumbnail_url($postID, 'full');
					if ($postsideimage) {
			?>
            <li class="grid-item">
                <figure class="relative mb-0 box-hover">
                    <div class="blog-image h-[425px]">
                        <?php the_post_thumbnail('full', ['class' => 'w-full h-full object-cover', 'title' => 'Feature image']); ?>
                        <span class="box-overlay bg-dark-slate-blue"></span>
                        <span
                            class="bg-gradient-gray-light-dark-transparent position-absolute opacity-6 top-0px left-0px w-100 h-100"></span>
                    </div>
                    <figcaption>
                        <div class="blog-hover-icon">
                            <a href="<?php the_permalink(); ?>" class="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </a>
                        </div>
                        <div
                            class="relative post-content bg-black bg-opacity-50 lg:bg-transparent lg:bg-opacity-0 p-14 text-center">
                            <div class="relative z-2 overflow-hidden">
                                <a href="<?php the_permalink(); ?>" class="card-time"><?php the_time('F j, Y'); ?></a>
                                <a href="<?php the_permalink(); ?>" class="card-title"><?php the_title(); ?></a>
                                <div class="hover-text">
                                    <a href="<?php the_permalink(); ?>"
                                        class="btn btn-black mt-4"><?php _e('Continue reading', 'dch-base-theme');?></a>
                                </div>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </li>

            <?php
					} else {
			?>
            <li class="grid-item">
                <div class="blog-box">
                    <picture class="relative pb-[400px] w-full block overflow-hidden">
                        <?php echo get_the_post_thumbnail(get_the_ID(),'large',['large' => 'full','class' => 'absolute inset-0 h-full w-full object-cover wp-post-image',"loading" => "lazy"]); ?>
                    </picture>
                    <div class="blog-content">
                        <div class="category-and-time-wrapper">
                            <a href="<?php 
								$categories = get_the_category();
								if (!empty($categories)) {
									echo esc_url(get_category_link($categories[0]->term_id));
								}
								?>" class="categories-btn">
                                <?php
									$categories = get_the_category();
									if (!empty($categories)) {
										echo esc_html($categories[0]->name);
									}
									?>
                            </a>
                            <a href="<?php the_permalink(); ?>" class="card-time"><?php the_time('F j, Y'); ?></a>
                        </div>
                        <a href="<?php the_permalink(); ?>" class="card-title">
                            <h3 data-splitting><?php the_title(); ?></h3>
                        </a>

                        <p class="excerpt" data-splitting>
                            <?php the_excerpt();
								?>
                        </p>
                        <div class="read-more" data-splitting>
                            <a href="<?php the_permalink(); ?>"
                                class="permalink-button"><?php _e('Learn more', 'dch-base-theme') ?></a>
                        </div>
                    </div>
                </div>
            </li>

            <?php
					}
				}
			}
			?>
        </ul>
    </div>
</section>