<section class="accordion mt-12">
    <?php
    if (have_rows('faqs')) :
        while (have_rows('faqs')) : the_row();
            $heading = get_sub_field('heading');
            $body_content = get_sub_field('body_content');
    ?>
            <article class="accordion-item">
                <button id="accordion-button-1" aria-expanded="false">
                    <span class="accordion-title"><?php echo $heading; ?></span>
                    <span class="icon" aria-hidden="false"></span>
                </button>
                <div class="accordion-content">
                    <?php echo $body_content; ?>
                </div>
            </article>
    <?php
        endwhile;
    endif;
    ?>

</section>