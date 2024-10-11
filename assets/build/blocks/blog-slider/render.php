<?php 
if (!defined('ABSPATH')) {
    die();
}

$postType = $attributes['postType'];

if (!empty($attributes['postType'])) {
    $postType = $attributes['postType'];
}

if (!empty($attributes['postCount'])) {
    $postPerPage = $attributes['postCount'];
}

if (!empty($attributes['orderBY'])) {
    $orderBY = $attributes['orderBY'];
}

if (!empty($attributes['order'])) {
    $order = $attributes['order'];
}

if (!empty($attributes['postCategory'])) {
    $category = $attributes['postCategory'];
}

$args = array(
    'post_type' => $postType,
    'posts_per_page' => $postPerPage,
    'orderby' => $orderBY,
    'order' => $order,
    'post_status' => 'publish',
);

if (!empty($category)) {
    $args['category_name'] = $category;
}

if (!empty($attributes['webshopCategory'])) {
    $catTerm = explode(',', $attributes['webshopCategory']);
    $args['tax_query'] = array(
        array(
            'taxonomy' => 'product_cat',
            'field' => 'slug',
            'terms' => $catTerm,
        ),
    );
}

$isShop = false;

if (!empty($attributes['isShop'])) {
    $isShop = $attributes['isShop'];
}
?>

<section class="swiper blog-slider <?php echo $isShop ? 'style-products' : $attributes['style'] ?>">
    <div class="swiper-wrapper">
        <?php 
        $query = new WP_Query($args);
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $postId = get_the_ID();
                if ($postType == 'apartment') {
                    ?>
        <article class="swiper-slide apartment">    
            <div class="swiper-slide relative bg-white rounded-md shadow-md">
                <a href="<?php the_permalink(); ?>" title="<?php the_title();?>" class="w-full h-full slide-item">
                    <div class="apartment-image overflow-hidden transition-all duration-500 ease-linear">
                        <?php the_post_thumbnail('full', ['class' => 'w-full h-full object-cover transition-all duration-500 ease-linear', 'title' => 'Feature image']); ?>
                    </div>
                    <div class="apartment-content p-4 text-black">
                        <p class="font-bold text-2xl">
                            <?php echo get_post_meta($postId, "price", true);?>
                        </p>
                        <?php the_title('<h6 class="text-base font-bold">', ' </h6>'); ?>
                        <?php echo get_post_meta($postId, "address", true);?>
                        <ul class="flex gap-4 mt-2">
                            <li class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20" height="20" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 22 15"><path d="M1 19V4h2v10h8V6h8c1.1 0 2.042.392 2.825 1.175C22.608 7.958 23 8.9 23 10v9h-2v-3H3v3H1Zm6-6a2.894 2.894 0 0 1-2.125-.875A2.894 2.894 0 0 1 4 10c0-.833.292-1.542.875-2.125A2.894 2.894 0 0 1 7 7c.833 0 1.542.292 2.125.875S10 9.167 10 10s-.292 1.542-.875 2.125A2.894 2.894 0 0 1 7 13Zm6 1h8v-4a1.93 1.93 0 0 0-.587-1.413A1.93 1.93 0 0 0 19 8h-6v6Zm-6-3a.969.969 0 0 0 .713-.288A.968.968 0 0 0 8 10a.968.968 0 0 0-.287-.712A.969.969 0 0 0 7 9a.965.965 0 0 0-.712.288A.965.965 0 0 0 6 10c0 .283.096.521.288.712A.965.965 0 0 0 7 11Zm6-3v6-6Z" style="fill-rule:nonzero" transform="translate(-1 -4)"/></svg>
                                <?php echo get_post_meta($postId, "badrooms-numbers", true);?>
                            <li class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 20 20"><path d="M7 9c-.55 0-1.021-.196-1.412-.587A1.927 1.927 0 0 1 5 7c0-.55.196-1.021.588-1.413A1.926 1.926 0 0 1 7 5c.55 0 1.021.196 1.413.587C8.804 5.979 9 6.45 9 7a1.93 1.93 0 0 1-.587 1.413A1.93 1.93 0 0 1 7 9ZM5 22a.965.965 0 0 1-.712-.288A.965.965 0 0 1 4 21c-.55 0-1.021-.196-1.412-.587A1.927 1.927 0 0 1 2 19v-6h3v-.75c0-.633.217-1.167.65-1.6.433-.433.967-.65 1.6-.65.333 0 .642.067.925.2.283.133.542.317.775.55l1.4 1.55c.133.133.263.258.388.375.125.117.262.225.412.325H18V4.85a.818.818 0 0 0-.25-.6.818.818 0 0 0-.6-.25c-.1 0-.196.021-.287.063a.886.886 0 0 0-.263.187L15.35 5.5c.083.283.1.563.05.837-.05.276-.15.53-.3.763l-2.75-2.8c.233-.15.483-.246.75-.288.267-.041.533-.012.8.088l1.25-1.25c.267-.267.571-.475.913-.625.341-.15.704-.225 1.087-.225.8 0 1.475.275 2.025.825.55.55.825 1.225.825 2.025V13h2v6a1.93 1.93 0 0 1-.587 1.413A1.93 1.93 0 0 1 20 21a.968.968 0 0 1-.287.712A.969.969 0 0 1 19 22H5Zm-1-3h16v-4H4v4Zm0 0h16H4Z" style="fill-rule:nonzero" transform="translate(-2 -2)"/></svg>
                            <?php echo get_post_meta($postId, "rooms", true);?>
                        </li>
                        </ul>
                    </div>
                </a>
            </div>
        </article>
        <?php } else {
        ?>
        <article class="swiper-slide blog text-black">
            <div class="swiper-slide relative">
                <a href="<?php the_permalink(); ?>" title="<?php the_title();?>" class="w-full h-full slide-item">
                    <div class="blog-image">
                        <?php the_post_thumbnail('full', ['class' => 'w-full h-full object-cover', 'title' => 'Feature image']); ?>
                    </div>
                    <?php if ($isShop) { ?>
                    <div class="shop-info">
                        <h6 class="title font-body-heading"><?php the_title(); ?></h6>
                        <div class="price">
                            <span class="text-xs">
                                <?php _e('ab', 'dch-base-theme') ?>
                            </span>
                            <?php echo wc_price(wc_get_product()->get_price()); ?>
                        </div>
                        <div class="product-rate">
                            <?php echo wc_get_rating_html(wc_get_product()->get_average_rating()); ?>
                        </div>
                    </div>
                    <?php } else { ?>
                    <div class="blog-content">
                        <a href="<?php the_permalink(); ?>" class="card-title">
                            <?php the_title('<h6 class="title">', ' </h6>'); ?>
                        </a>
                        <div class="excerpt">
                            <span class="inline-block">
                                <?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?>
                            </span>
                        </div>
                        <div class="read-more">
                            <span class="text-xs">
                                <a href="<?php the_permalink(); ?>" class="btn btn-black">
                                    <?php _e('Read more', 'dch-base-theme') ?>
                                </a>
                            </span>
                        </div>    

                    </div>
                    <?php } ?>
                </a>
            </div>
        </article>
        <?php
                }
            }
        }
        ?>
    </div>
    <?php 

    if (!$postType == 'apartment') {
        ?>
    <div class="swiper-pagination"></div>
    <?php
    }?>
    <div class="navigation flex justify-center items-center gap-4 mt-4">
        <div class="blog-button-prev cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                viewBox="0 0 16 16">
                <path
                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z">
                </path>
            </svg>
        </div>
        <div class="blog-button-next cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                viewBox="0 0 16 16">
                <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z">
                </path>
            </svg>
        </div>
    </div>
</section>
