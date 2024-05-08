<section class="accordion mt-12">
    <?php
    if (have_rows('faqs')) :
        while (have_rows('faqs')) : the_row();
            $heading = get_sub_field('heading');
            $body_content = get_sub_field('body_content');
            $page_link = get_sub_field('page_link');
            //echo $page_link;
    ?>
            <article class="accordion-item scrollFromBottom">
                <button id="accordion-button-1" aria-expanded="false">
                    <span class="accordion-title"><?php echo $heading; ?></span>
                    <span class="icon" aria-hidden="false"></span>
                </button>
                <div class="accordion-content">
                    <p>
                        <?php echo $body_content; ?>
                    </p>
                    <?php if ($page_link) : ?>
                        <a href="<?php echo $page_link; ?>" class="link inline-block" rel="<?php echo $heading; ?>"><?php echo _e("Mehr", "dch") ?> </a>
                    <?php endif; ?>
                </div>
            </article>
    <?php
        endwhile;
    endif;
    ?>

</section>