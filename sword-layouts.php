<?php
/**
* Plugin Name: Gutenberg - Sword Layouts
* Plugin URI: https://github.com/davidsword/sword-layouts
* Description: Some Gutenberg blocks that add modern layouts
* Author: davidsword
* Author URI: https://davidsword.ca/
* Version: 1.0.4
* License: GPL3
* License URI: https://raw.githubusercontent.com/davidsword/sword-layouts/master/LICENSE
*/

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_assets', 'sword_layouts_block_assets' );
add_action( 'enqueue_block_editor_assets', 'sword_layouts_editor_assets' );

function sword_layouts_block_assets() {
	wp_enqueue_style(
		'swrdlyts-style-css',
		plugins_url( 'dist/blocks.style.build.css',  __FILE__  ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'dist/blocks.style.build.css' )
	);
}

function sword_layouts_editor_assets() {
	wp_enqueue_script(
		'swrdlyts-block-js',
		plugins_url( '/dist/blocks.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . '/dist/blocks.build.js' )
	);
	wp_enqueue_style(
		'swrdlyts-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css',  __FILE__  ),
		array( 'wp-edit-blocks' ),
		filemtime( dirname( __FILE__ ) . '/dist/blocks.editor.build.css' )
	);
}
