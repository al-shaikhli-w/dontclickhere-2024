<?php
// Check rows exists.
if (have_rows('pricing')) :
?>
	<section class="pricing-cards">
		<?php
		while (have_rows('pricing')) : the_row();
			$popular = get_sub_field('popular');
			$heading = get_sub_field('heading');
			$paragraph = get_sub_field('paragraph');
			$euro = get_sub_field('euro'); ?>
			<article class="pricing-card <?php echo $popular ? "popular-card" : "" ?>">
				<div class="pricing-card-header">
					<h3 class="pricing-card-header__heading"><?php echo $heading; ?></h3>
					<p class="pricing-card-header__paragraph"><?php echo $paragraph; ?></p>
					<div class="pricing-card-header__pricing">
						<span class="text-xl relative -top-3 mr-2">* ab €</span>
						<span class="font-bold text-4xl"><?php echo $euro; ?></span>
						<span class="font-medium text-lg">00</span>
						<span class="mx-1">/</span>
						<span class="font-thin">einmalig</span>
					</div>
					<hr>
				</div>
				<div class="includes">
					<?php
					if (have_rows('items_content')) : ?>
						<ul class="includes__lists">
							<?php while (have_rows('items_content')) : the_row();
								$item_content = get_sub_field('item_content');
								$not_includes = get_sub_field('not_includes');
							?>
								<li class="includes__lists__item <?php echo $not_includes ? "not-includes" : ""; ?>">
									<div class="icon">
										<svg width="8px" height="8px" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
										</svg>
									</div>
									<span class="includes__lists__item__content"><?php echo $item_content ?></span>
								</li>
							<?php endwhile; ?>
						</ul>
					<?php endif; ?>
				</div>
				<a href="#" class="pricing-card-header__cta">
					Purchase Plan
				</a>
				<span class="light-border"></span>
				<?php
				if ($popular) { ?>
					<span class="popular">The most popular</span>
				<?php } ?>
			</article>
	<?php endwhile;
	endif; ?>
	</section>