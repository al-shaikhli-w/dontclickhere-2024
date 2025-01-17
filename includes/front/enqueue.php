<?php

function dch_enqueue()
{
	wp_register_style(
		'dch_theme',
		get_theme_file_uri('assets/dist/main.css')
	);

	wp_enqueue_style('dch_theme');
	wp_register_script(
		'dch_theme',
		get_theme_file_uri('assets/dist/mainJS.js'),
		[],
		false,
		true
	);
	wp_enqueue_script('dch_theme');
}
function dch_nav_menu_css_class(array $classes, $item, $args, $depth)
{
	// add class to menu item parent also 
	if (in_array('current-menu-item', $classes)) {
		$classes[] = 'active-page';
	}
	return $classes;
}
add_filter('nav_menu_css_class', 'dch_nav_menu_css_class', 10, 4);
