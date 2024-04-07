<?php

/**
 * Block Name: Our Work Cards
 *
 * This is the template that displays the our work cards.
 */

$workId = get_field('work_id');
$workSize = get_field('card_size');

if (empty($workSize)) {
    echo 'Please select a card size';
    return;
}
$query = new WP_Query([
    'post_type' => 'work',
    'post__in' => [$workId],
]);

if (!$query->have_posts()) {
    echo 'No posts found';
    return;
}
?>

<article class="work-card">
    <?php
    // Loop through the posts
    while ($query->have_posts()) : $query->the_post();
        $post_id    = get_the_ID();
        $work_title = get_the_title();
        $underTitle = get_field('under_tilte', $post_id);
        $videoUrl   = get_field('video_url', $post_id);
    ?>
        <!-- <div class="media"> -->
        <?php if (!empty($videoUrl)) : ?>
            <video muted loop playsinline src="<?php echo esc_url($videoUrl); ?>">
                Your browser does not support the video tag.
            </video>
        <?php else :
            echo get_the_post_thumbnail($post_id, 'full', array('class' => 'alignleft'));
        endif; ?>
        <!-- </div> -->


        <div class="work-card__content">
            <div class="main">
                <div class="heading">
                    <h2 class="work-card__title"><?php echo esc_html($work_title); ?></h2>
                    <?php if (!empty($underTitle)) : ?>
                        <h3 class="work-card__under-title"><?php echo esc_html($underTitle); ?></h3>
                    <?php endif; ?>
                </div>
                <div class="useCase">
                    <a href="<?php echo esc_url(get_permalink($post_id)); ?>" class="work-card__link btn btn--secondary ">mehr details</a>
                </div>
            </div>
        </div>
    <?php endwhile; ?>
</article>

<?php
wp_reset_postdata();
?>