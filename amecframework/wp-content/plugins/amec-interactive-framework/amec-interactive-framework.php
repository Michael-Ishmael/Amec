<?php
/*
Plugin Name: Amec Interactive Farmwork
Plugin URI:
Description: Plug-in to manage interactive framework
Version: 1.0
Author: Michael Ishmael
Author URI: http://66Bytes.com
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Define constants
 **/
if ( ! defined( 'AIF_PLUGIN_URL' ) ) {
    define( 'AIF_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}


function aif_init(){
    aif_set_taxonomy();
    aif_custom_post_type();
}

function aif_set_taxonomy()
{
    register_taxonomy(
        'aif_workflow_entry_type',
        'aif_workflow',
        [
            'hierarchical' => true,
            'label' => 'Entry Type',
            'query_var' => true,
            'rewrite' => [
                'slug' => 'aifw',
                'with_front' => false
            ]
        ]
    );


}


function aif_custom_post_type()
{
    register_post_type('aif_workflow',
        [
            'labels'      => [
                'name'          => __('AIF Workflows'),
                'singular_name' => __('AIF Workflow'),
            ],
            'show_ui' => true,
            'show_in_menu'      => true,
            'supports' => ['title', 'editor'],
            'taxonomies' => ['aif_workflow_entry_type']
        ]
    );
}
add_action('init', 'aif_init');


/*
 * Automatically create framwork page on activation
 *
 */
function aif_create_framework_page() {
    //Check to see if the framwork page has been created
//    $more_info_page = get_option ( 'ctcc_more_info_page' );
//    if ( empty ( $more_info_page ) ) { // The page hasn't been set yet
//        // Create the page parameters
//        $pagename = __( 'Cookie Policy', 'uk-cookie-consent' );
//        $content = __( 'This site uses cookies - small text files that are placed on your machine to help the site provide a better user experience. In general, cookies are used to retain user preferences, store information for things like shopping carts, and provide anonymised tracking data to third party applications like Google Analytics. As a rule, cookies will make your browsing experience better. However, you may prefer to disable cookies on this site and on others. The most effective way to do this is to disable cookies in your browser. We suggest consulting the Help section of your browser or taking a look at <a href="http://www.aboutcookies.org">the About Cookies website</a> which offers guidance for all modern browsers', 'uk-cookie-consent' );
//        $cpage = get_page_by_title ( $pagename ); // Double check there's not already a Cookie Policy page
//        if ( !$cpage ) {
//            global $user_ID;
//            $page['post_type']    = 'page';
//            $page['post_content'] = $content;
//            $page['post_parent']  = 0;
//            $page['post_author']  = $user_ID;
//            $page['post_status']  = 'publish';
//            $page['post_title']   = $pagename;
//            $pageid = wp_insert_post ( $page );
//        } else {
//            // There's already a page called Cookie Policy so we'll use that
//            $pageid = $cpage -> ID;
//        }
//
//        // Update the option
//        update_option ( 'ctcc_more_info_page', $pageid );
//
//    }

}

register_activation_hook ( __FILE__, 'aif_create_framework_page' );


function load_framework_for_user_filter( $content ) {

    $content = "Arnold's " . $content;

    return $content;
}

add_filter('the_content', 'load_framework_for_user_filter');