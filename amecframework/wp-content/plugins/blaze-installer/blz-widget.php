<?php

/*
	*
	* Blaze Dashboard Widget
	*
*/

//ADD dashboard widget
add_action('wp_dashboard_setup', 'blaze_dashboard_widget');
add_action( 'admin_enqueue_scripts', 'blaze_widget_styles' );

add_option('blz_widget_name', '');
add_option('blz_widget_email', '');
add_option('blz_widget_tel', '');


function blaze_dashboard_widget() {
global $wp_meta_boxes;
wp_add_dashboard_widget('blaze_widget', 'Blaze Support', 'blaze_dashboard_help');
}

//Widget content
function blaze_dashboard_help() {
echo "
<p>You point of contact is:</p>
<p><strong>" . get_option('blz_widget_name') . "</strong></p>
<p>Email: <strong>" . get_option('blz_widget_email') . "</strong></p>
<p>Tel: <strong>" . get_option('blz_widget_tel') . "</strong></p>

<iframe src='http://www.blazeconcepts.co.uk/client-dashboard-news.htm'></iframe>
";
}

//ADD widget styles
function blaze_widget_styles( $hook ) {
	if( 'index.php' != $hook ) {
		return;
	}
	wp_enqueue_style( 'dashboard-widget-styles', plugins_url( '', __FILE__ ) . '/css/widget.css' );
}

?>