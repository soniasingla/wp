<?php
/**
 * Plugin Name: Gutenberg Colorizer Block
 * Author: Sonia Singla
 * Author URI: https://soniasingla.com
 * Description: The Gutenberg Colorizer block features colored blocks, a title, followed by the summary, and it acts as a highlight in the content.
 * Version: 1.0
 */

// Load assets for wp-admin when editor is active
function gutenberg_colorizer_block() {
   wp_enqueue_script(
      'gutenberg_colorizer_block_files',
      plugins_url( 'block.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element' )
   );

   wp_enqueue_style(
      'gutenberg_colorizer_block_files',
      plugins_url( 'block.css', __FILE__ ),
      array()
   );
}
add_action( 'enqueue_block_editor_assets', 'gutenberg_colorizer_block' );

// Load assets for frontend
function gutenberg_colorizer_block_display() {

   wp_enqueue_style(
      'gutenberg_colorizer_block_files',
      plugins_url( 'block.css', __FILE__ ),
      array()
   );
}

add_action( 'wp_enqueue_scripts', 'gutenberg_colorizer_block_display' );
?>