<?php

/*
	*
	* Blaze Set Up Features
	*
*/
//ADD actions
add_action('admin_init', 'add_htaccess');
add_action( 'admin_bar_menu', 'wp_admin_bar_my_custom_account_menu', 11 );
add_action('admin_bar_menu', 'remove_wp_logo', 999);
add_filter('login_errors', 'wrong_login');
add_action('wp_head', 'appleTouch');
add_action('admin_init', 'new_page_sitemap');

// ----- Add compression lines to .htaccss ----- //
function add_htaccess(){
// Get path to main .htaccess for WordPress
$htaccess = get_home_path().".htaccess";

	$lines = array();
	$lines[] = "<IfModule mod_deflate.c>";
	$lines[] = "# Compress HTML, CSS, JavaScript, Text, XML and fonts";
	$lines[] = "AddOutputFilterByType DEFLATE application/javascript";
	$lines[] = "AddOutputFilterByType DEFLATE application/rss+xml";
	$lines[] = "AddOutputFilterByType DEFLATE application/vnd.ms-fontobject";
	$lines[] = "AddOutputFilterByType DEFLATE application/x-font";
	$lines[] = "AddOutputFilterByType DEFLATE application/x-font-opentype";
	$lines[] = "AddOutputFilterByType DEFLATE application/x-font-otf";
	$lines[] = "AddOutputFilterByType DEFLATE application/x-font-truetype";
	$lines[] = "AddOutputFilterByType DEFLATE application/x-font-ttf";
	$lines[] = "AddOutputFilterByType DEFLATE application/x-javascript";
	$lines[] = "AddOutputFilterByType DEFLATE application/xhtml+xml";
	$lines[] = "AddOutputFilterByType DEFLATE application/xml";
	$lines[] = "AddOutputFilterByType DEFLATE font/opentype";
	$lines[] = "AddOutputFilterByType DEFLATE font/otf";
	$lines[] = "AddOutputFilterByType DEFLATE font/ttf";
	$lines[] = "AddOutputFilterByType DEFLATE image/svg+xml";
	$lines[] = "AddOutputFilterByType DEFLATE image/x-icon";
	$lines[] = "AddOutputFilterByType DEFLATE text/css";
	$lines[] = "AddOutputFilterByType DEFLATE text/html";
	$lines[] = "AddOutputFilterByType DEFLATE text/javascript";
	$lines[] = "AddOutputFilterByType DEFLATE text/plain";
	$lines[] = "AddOutputFilterByType DEFLATE text/xml";
	$lines[] = "# Remove browser bugs (only needed for really old browsers)";
	$lines[] = "BrowserMatch ^Mozilla/4 gzip-only-text/html";
	$lines[] = "BrowserMatch ^Mozilla/4\.0[678] no-gzip";
	$lines[] = "BrowserMatch \bMSIE !no-gzip !gzip-only-text/html";
	$lines[] = "Header append Vary User-Agent";
	$lines[] = "</IfModule>";
	$lines[] = "<IfModule mod_headers.c>";
	$lines[] = "<FilesMatch '.(js|css|xml|gz|html)$'>";
	$lines[] = "Header append Vary: Accept-Encoding";
	$lines[] = "</FilesMatch>";
	$lines[] = "</IfModule>";
	$lines[] = "FileETag none";
	$lines[] = "# Expire images header";
	$lines[] = "ExpiresActive On";
	$lines[] = "ExpiresDefault A0";
	$lines[] = "ExpiresByType image/gif A2592000";
	$lines[] = "ExpiresByType image/png A2592000";
	$lines[] = "ExpiresByType image/jpg A2592000";
	$lines[] = "ExpiresByType image/jpeg A2592000";
	$lines[] = "ExpiresByType image/ico A2592000";
	$lines[] = "ExpiresByType text/css A2592000";
	$lines[] = "ExpiresByType text/javascript A2592000";

	insert_with_markers($htaccess, "Blaze", $lines);
}

// ----- Replaces Howdy with Welcome in Admin bar ----- //
 function wp_admin_bar_my_custom_account_menu( $wp_admin_bar ) {
	$user_id = get_current_user_id();
	$current_user = wp_get_current_user();
	$profile_url = get_edit_profile_url( $user_id );

	if ( 0 != $user_id ) {
		$avatar = get_avatar( $user_id, 28 );
		$howdy = sprintf( __('Welcome, %1$s'), $current_user->display_name );
		$class = empty( $avatar ) ? '' : 'with-avatar';
		$wp_admin_bar->add_menu( array(
			'id' => 'my-account',
			'parent' => 'top-secondary',
			'title' => $howdy . $avatar,
			'href' => $profile_url,
			'meta' => array(
				'class' => $class,
				),
			) );
	}
}

// ----- Removes WP Logo from Admin bar ----- //
function remove_wp_logo( $wp_admin_bar ) {
	$wp_admin_bar->remove_node('wp-logo');
}

//  ----- Hides Login Error Messages ----- //
function wrong_login() {
	return 'Wrong username or password.';
}

// ----- Add Apple Touch Icon ----- //
function appleTouch() {
	echo('<link rel="apple-touch-icon" href="'. get_site_url() .'/apple-touch-icon-precomposed.png" />');
}

//Add Sitemap
function new_page_sitemap(){
	$title = 'Sitemap';

	if (!get_page_by_title($title, 'OBJECT', 'page')) {

		$my_post = array(
			'post_title'    => $title,
			'post_content'  => '[pagelist]',
			'post_type' => 'page',
			'post_status'   => 'publish',
			'post_author'   => 1
			);

		wp_insert_post( $my_post );
	}
}

// ----- ENFOLD ONLY: Turn on Custom CSS Class field for all Enfold elements ----- //
    add_theme_support('avia_template_builder_custom_css');


?>