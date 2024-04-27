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

// Support  svg file to import it to the media files.

function allow_svg_upload($mimes)
{
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'allow_svg_upload');

// function wpacg_dch_admin_color_scheme()
// {
// 	$theme_dir = get_stylesheet_directory_uri();
// 	wp_admin_css_color('dch', __('dch'), $theme_dir . '/dch.css', array('#fff8f8', '#000000', '#d54e21', '#00ffc2'));
// }
// add_action('admin_init', 'wpacg_dch_admin_color_scheme');
