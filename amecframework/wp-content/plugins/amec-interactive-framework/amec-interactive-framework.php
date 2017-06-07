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
            'show_ui' => false,
            'show_in_menu'      => true,
            'supports' => ['title', 'editor', 'author', 'excerpt'],
            'taxonomies' => ['aif_workflow_entry_type'],
            'capability_type'    => 'post',
            'show_in_rest'       => true,
            'rest_base'          => 'aifworkflows-api',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
        ]
    );

    register_post_type('aif_page_copy',
        [
            'labels'      => [
                'name'          => __('AIF Framework Pages'),
                'singular_name' => __('AIF Framework Page'),
            ],
            'show_ui' => true,
            'show_in_menu'      => true,
            'public' => true,
            'supports' => ['title', 'page-attributes'], //, 'editor', 'author', 'excerpt'],
            'capability_type'    => 'page',
            'hierarchical' => true,
            'rewrite' => array('slug' => 'framework'),
            'show_in_rest'       => true,
            'rest_base'          => 'aif-pages-api',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
        ]
    );
}

add_action('init', 'aif_init');


function aif_meta_box_init() {


    add_meta_box('aif_page_meta', "AIF Framework Copy", 'aif_translate_metabox', 'aif_page_copy', 'normal', 'high');

}

add_action('add_meta_boxes', 'aif_meta_box_init');


function aif_translate_metabox( $post, $box) {

    try{
        $aif_template_path = plugin_dir_path(__FILE__). 'includes/aif-admin-edit.php';

        include( $aif_template_path );
    } catch (\Exception $e){

        echo '<div id="aif_translation_widget"><p>There has been an error generating editor</p><p>'. $e->getMessage() .'</p></div>';

    }



}

function aif_save_translate_metabox( $data, $postarr) {


    if($postarr['post_type'] !== 'aif_page_copy') return $data;

    wp_verify_nonce(plugin_basename(__FILE__), 'aif_translation_widget');

    $updated = false;

    if(isset($_POST['aif-save-raw-json']) && $_POST['aif-save-raw-json'] == 'true' && isset($_POST['aif-raw-json'])){
        $valid = json_decode(wp_unslash($_POST['aif-raw-json']));
        if($valid){
            $data['post_content'] = $_POST['aif-raw-json'];
            return $data;
        }

    } else {

        $copy = json_decode(wp_unslash($data['post_content']), true);

        if(! isset($copy)) return $data;

        foreach ($_POST as $key => $value){

            if ( strpos($key, 'aif-trans-') !== false ){

                $parsed_val = isset($value) && trim($value)!== '' ? trim($value) : null;
                if(isset($parsed_val)){

                    $j_key = substr($key, 10);
                    if(isset($copy[$j_key])){
                        $copy[$j_key]['translation'] = $value;
                        $updated = true;
                    }

                }
            }

        }
    }



    if(!$updated) return $data;

    $json_content = json_encode($copy);
    $data['post_content'] = wp_slash($json_content);

    return $data;

}

add_action('wp_insert_post_data', 'aif_save_translate_metabox', 10, 3);

function aif_enqueue_translate_styles(){

   wp_enqueue_style( 'aif_admin_css', get_stylesheet_directory_uri() . '/css/aif-admin.css', false, '1.0.0' );
   wp_enqueue_style( 'tiny_mce_skin', includes_url('/js/tinymce/skins/lightgray/skin.min.css'));
   wp_enqueue_script( 'tiny_mce', includes_url('/js/tinymce/tinymce.min.js'));
//   wp_enqueue_script( 'tiny_mce_wp', includes_url('/js/tinymce/plugins/wpview/plugin.js'));
//   wp_enqueue_script( 'tiny_mce_code', get_stylesheet_directory_uri() . '/js/libs/tinymce/plugins/code/plugin.min.js');
   wp_enqueue_script( 'aif_admin_js', get_stylesheet_directory_uri() . '/js/aif-admin-edit.js', false, '1.0.0' );

}

add_action( 'admin_enqueue_scripts', 'aif_enqueue_translate_styles' );


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


