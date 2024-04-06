<?php

// Variables

// Includes
include_once(get_theme_file_path('/includes/front/enqueue.php'));
include(get_theme_file_path('/includes/setup.php'));
include_once(get_theme_file_path('/blocks/register_blocks.php'));

// Hooks
add_action('wp_enqueue_scripts', 'dch_enqueue');
add_action('after_setup_theme', 'dch_setup_theme');
