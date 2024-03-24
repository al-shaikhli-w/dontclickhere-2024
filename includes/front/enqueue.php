<?php

function dch_enqueue()
{
	wp_register_style(
		'dch_theme',
		get_theme_file_uri('assets/public/dist/main.css')
	);

	wp_enqueue_style('dch_theme');
	wp_register_script(
		'dch_theme',
		get_theme_file_uri('assets/public/dist/main.js'),
		[],
		false,
		true
	);
	wp_enqueue_script('dch_theme');
}
