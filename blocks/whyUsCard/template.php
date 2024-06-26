<?php
if (have_rows('why_us_cards')) : ?>
	<div class="why_us_cards overflow-y-hidden">
		<div class="swiper whyUsCards container relative">
			<div class="swiper-wrapper why-us-wrapper">
				<?php
				while (have_rows('why_us_cards')) : the_row();
					$icon    = get_sub_field('icon');
					$heading = get_sub_field('heading'); ?>
					<div class="swiper-slide why-us-card">
						<img src="<?php echo wp_get_attachment_image_url($icon, 'full'); ?>" alt="<?php echo $heading; ?>">
						<h3 class="heading"><?php echo acf_esc_html($heading); ?></h3>
						<p class="contents"><?php echo acf_esc_html(get_sub_field('content')); ?></p>
						<span class="light-border"></span>
					</div>
				<?php
				endwhile; ?>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
<?php
endif; ?>