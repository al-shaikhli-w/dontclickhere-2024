<?php

/**
 * Block Name: Our Clients
 *
 * This is the template that displays the ourClients block.
 */
if (have_rows('clients')) : ?>
    <div class="client-logos">
        <?php while (have_rows('clients')) : the_row();
            $logo_image_id = get_sub_field('logo'); ?>
            <div class="client-logo">
                <?php echo wp_get_attachment_image($logo_image_id, 'full'); ?>
            </div>
        <?php endwhile; ?>
    </div>
<?php
endif;
