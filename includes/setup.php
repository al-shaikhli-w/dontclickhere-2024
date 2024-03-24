<?php

function dch_setup_theme()
{
	add_theme_support('editor-styles');

	add_editor_style([
		'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
		'assets/public/index.css',
		'assets/editor.css'
	]);
}

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
