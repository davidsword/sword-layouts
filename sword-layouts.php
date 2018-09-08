<?php
/**
 * Plugin Name: Gutenberg Tile Block
 * Plugin URI: https://github.com/davidsword/sword-layouts
 * Description: Tile blocks for Gutenberg
 * Author: davidsword
 * Author URI: https://davidsword.ca/
 * Version: 1.0.6
 * License: GPL3
 * License URI: https://raw.githubusercontent.com/davidsword/sword-layouts/master/LICENSE
 *
 * @package sword-layouts
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load in the Editor assets for the FRONT and BACKEND
 */
function sword_layouts_block_assets() {
	wp_enqueue_style(
		'swrdlyts-style-css',
		plugins_url( 'dist/blocks.style.build.css', __FILE__ ),
		array( 'wp-blocks' ),
		sword_layouts_version()
	);
	return true;
}
add_action( 'enqueue_block_assets', 'sword_layouts_block_assets' );

/**
 * Load in the Editor assets for the BACKEND only
 */
function sword_layouts_editor_assets() {
	wp_enqueue_script(
		'swrdlyts-block-js',
		plugins_url( '/dist/blocks.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		sword_layouts_version(),
		true
	);
	wp_enqueue_style(
		'swrdlyts-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		sword_layouts_version()
	);
	return true;
}
add_action( 'enqueue_block_editor_assets', 'sword_layouts_editor_assets' );

/**
 * Get the current version number, or use cache bust version
 *
 * @return string the version number
 */
function sword_layouts_version() {
	if ( WP_DEBUG || SCRIPT_DEBUG ) {
		return time(); // Bust that cache!
	} else {
		$plugin_data = get_plugin_data( __FILE__ );
		return $plugin_data['Version'];
	}
}
