<?php
/**
 * Plugin Name: Custom Image Slider
 * Description: Creates a custom image slider for your WordPress site.
 * Version: 1.0.0
 * Author: Stefan
 * Text Domain: custom-image-slider
 * Domain Path: /languages
 */

function custom_image_slider_scripts() {
    wp_enqueue_style('custom-image-slider-style', plugin_dir_url(__FILE__) . 'assets/custom-image-slider.css');
    wp_enqueue_script('custom-image-slider-script', plugin_dir_url(__FILE__) . 'assets/custom-image-slider.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'custom_image_slider_scripts');

function custom_image_slider() {
    $images = array(
        'https://snaketrail.github.io/portfolio-web2/images/marketing.png',
        'https://snaketrail.github.io/portfolio-web2/images/teembuild.png',
        'https://snaketrail.github.io/portfolio-web2/images/matress.png'
    );

    $output = '<div class="custom-image-slider">';
    foreach ($images as $image) {
        $output .= '<img src="' . esc_url($image) . '" alt="Slider Image">';
    }
    $output .= '</div>';

    return $output;
}
add_shortcode('custom_image_slider', 'custom_image_slider');