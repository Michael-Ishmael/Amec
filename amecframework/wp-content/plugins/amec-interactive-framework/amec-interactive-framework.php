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

require_once( plugin_dir_path(__FILE__). 'includes/custom-ajax-auth.php' );

function aif_init(){
    aif_custom_post_type();
}

function aif_custom_post_type()
{
    register_taxonomy_for_object_type('post_tag', 'page');

    register_post_type('aif_workflow',
        [
            'labels'      => [
                'name'          => __('AIF Workflows'),
                'singular_name' => __('AIF Workflow'),
            ],
            'show_ui' => true,
            'show_in_menu'      => true,
            'supports' => ['title', 'editor', 'author', 'excerpt'],
            'taxonomies' => ['aif_workflow_entry_type'],
            'capability_type'    => 'post',
            'show_in_rest'       => true,
            'rest_base'          => 'aifworkflows-api',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
        ]
    );
}

add_action('init', 'aif_init');


function aif_register_api_hooks( ) {

    register_rest_field(
        'aif_workflow',
        'content_json',
        array(
            'get_callback'    => 'aif_add_content_json_field',
            'update_callback' => null,
            'schema'          => null,
        )
    );


    register_rest_route( 'aif/v1', '/userframeworks/', array(
        'methods' => 'GET',
        'callback' => 'aif_rest_get_user_frameworks',
    ) );


}
add_action( 'rest_api_init', 'aif_register_api_hooks');


function aif_add_content_json_field( $object, $field_name, $request )
{

    //global $post;
    //$post = get_post ($object['id']);

    $raw = get_the_content($object->ID);

    return $raw;
}

function aif_rest_get_user_frameworks() {


    $user_id = get_current_user_id();
    $return = array();

    $all_posts = get_posts( array(
        'author' => $user_id,
        'numberposts' => -1,
        'post_type'   => 'aif_workflow',
        'fields'      => 'title',
        'post_status'      =>  array('publish', 'draft'),
    ) );

    foreach($all_posts as $post) {
        $newPost = array();
        $newPost['id'] = $post->ID;
        $newPost['title'] = $post->post_title;
        $newPost['excerpt'] = $post->post_excerpt;
        $newPost['status'] = $post->post_status;
        $return[] = $newPost;
    }



    return $return;
}



function load_framework_for_user_filter( $content ) {

    //$content = " " . $content;

    global $post;

    if (is_single() && $post->post_type == 'aif_workflow' ){
        remove_filter('the_content', 'wpautop');
    }
    else {
        $posttags = get_the_tags();
        foreach($posttags as $tag) {
            if($tag->name == 'AifPageCopy'){
                remove_filter('the_content', 'wpautop');
                break;
            };
        }
    }

    return $content;
}

//remove_filter( 'the_content', 'wpautop' );
add_filter('the_content', 'load_framework_for_user_filter');


/*
 * Automatically create framwork page on activation
 *
 *
 */
function aif_create_framework_page() {


    //Check to see if the framework page has been created
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

//register_activation_hook ( __FILE__, 'aif_create_framework_page' );


function aif_hide_admin_bar_settings()
{
    ?>
    <style type="text/css">
        .show-admin-bar {
            display: none;
        }
    </style>
    <?php
}

function aif_disable_admin_bar()
{
    if (!current_user_can('administrator')) {
        add_filter('show_admin_bar', '__return_false');
        add_action('admin_print_scripts-profile.php', 'aif_hide_admin_bar_settings');
    }
}

add_action('init', 'aif_disable_admin_bar', 9);


