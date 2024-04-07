<?php

function dch_setup_theme()
{
	add_theme_support('editor-styles');

	add_editor_style([
		'assets/public/dist/main.css',
	]);
}
function enqueue_gutenberg_editor_styles()
{
	add_theme_support('editor-styles');
	add_editor_style(['assets/dist/css/main.css', 'assets/public/editor.css']);
}
add_action('enqueue_block_editor_assets', 'enqueue_gutenberg_editor_styles');

// create custom navbar
if (!function_exists('dch_register_menus')) {
	function dch_register_menus()
	{
		register_nav_menus([
			'header-menu' => 'Header Menu',
			'footer-menu' => 'Footer Menu'
		]);
	}
	add_action('after_setup_theme', 'dch_register_menus');
}


add_theme_support('post-thumbnails');
