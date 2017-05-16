<?php
/*
Plugin Name: Blaze Support
Plugin URI: http://www.blazeconcepts.co.uk
Description: This plugin can install blaze plugins and scripts in one click
Author: Blaze Concepts
Version: 1.3.2
Author URI: http://www.blazeconcepts.co.uk
*/
//--------------------------------------------------------------------------
//including plugin class
require_once('blz-Class.php');
$blzobj = new blazeinstaller(); 

//set up features
require_once('blz-features.php');

//plugins admin interface
require_once('blz-admin.php');

//dashboard widget
require_once('blz-widget.php');



//define plugin constants
$blz_uploadDir = wp_upload_dir();
define('blzUPLOADDIR_PATH', $blz_uploadDir['basedir']);
define('blzPLUGIN_PATH', plugin_dir_path(__FILE__));
define('blzPLUGIN_URL', plugin_dir_url(__FILE__));
define('blz_WP_PLUGIN_DIR',dirname(plugin_dir_path(__FILE__)));

// ADD Styles and Script in head section
add_action('admin_init', 'blz_backend_scripts');
function blz_backend_scripts() {
	if(is_admin()){
		if(isset($_REQUEST['page']) && $_REQUEST['page']=="blazeinstaller"){
			wp_enqueue_script ('jquery');
			wp_enqueue_script( 'blz_admin_script',plugins_url('js/blz.js',__FILE__), array('jquery'));
			wp_enqueue_style( 'blz_admin_style',plugins_url('css/blz.css',__FILE__), false, '1.0.0' );
		}
	}
}

// get blazeinstaller version
    function blz_get_version(){
    	if (!function_exists( 'get_plugins' ) )
    		require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
    	$plugin_folder = get_plugins( '/' . plugin_basename( dirname( __FILE__ ) ) );
    	$plugin_file = basename( ( __FILE__ ) );
    	return $plugin_folder[$plugin_file]['Version'];
    }	

// Add settings link on plugin page
    function bi_settings_link($links) { 
    	$settings_link = '<a href="admin.php?page=blazeinstaller">Settings</a>'; 
    	array_unshift($links, $settings_link); 
    	return $links; 
    }

    $plugin = plugin_basename(__FILE__); 
    add_filter("plugin_action_links_$plugin", 'bi_settings_link' );

register_activation_hook(__FILE__,'blz_activation');
    function blz_activation() {
        if(!is_dir(blzUPLOADDIR_PATH.'/blz_logs')){ @mkdir(blzUPLOADDIR_PATH.'/blz_logs', 0777);}
        if(!is_dir(blzUPLOADDIR_PATH.'/blz_logs/files')){ @mkdir(blzUPLOADDIR_PATH.'/blz_logs/files', 0777);}
        if(!is_dir(blzUPLOADDIR_PATH.'/blz_logs/files/tmp')){ @mkdir(blzUPLOADDIR_PATH.'/blz_logs/files/tmp', 0777);}
    }

    ?>