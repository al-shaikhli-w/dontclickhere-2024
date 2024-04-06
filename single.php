<?php get_header();
while (have_posts()) :
    the_post();
    echo '<main class="single-page">';
    the_content();
    echo '</main>';
endwhile;

get_footer();
