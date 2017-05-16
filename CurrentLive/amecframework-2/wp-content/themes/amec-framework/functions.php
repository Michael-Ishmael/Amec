<?php


/* Interactive FrameWork */

function amec_adding_scripts() {
	//wp_enqueue_script( 'edge', get_stylesheet_directory_uri() . '/js/edge.6.0.0.min.js', array( 'jquery' ), '1.0', true );
	//wp_enqueue_script( 'interactive-framework', get_stylesheet_directory_uri() . '/js/interactive-framework-edge_edge.js', array( 'edge' ), '1.0', true );
	//wp_enqueue_script( 'blaze-wp-edge', get_stylesheet_directory_uri() . '/js/blaze-wp-edge.js', array( 'edge' ), '1.0', true );
	wp_enqueue_script( 'blaze', get_stylesheet_directory_uri() . '/js/blaze.js', array( 'jquery' ), '1.0', true );
	
	wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese', false );
}

add_action( 'wp_enqueue_scripts', 'amec_adding_scripts' );  

/* END - Interactive FrameWork */


add_filter( 'avf_google_content_font',  'avia_add_content_font');
function avia_add_content_font($fonts)
{
$fonts['Roboto'] = 'Roboto:400,700,900';
return $fonts;
}



/* Widget area for language switcher */

function amec_header_widgets_init() {

	register_sidebar( array(
		'name'          => 'Header Widget Area',
		'id'            => 'header-widget-area',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="rounded">',
		'after_title'   => '</h2>',
	) );

}
add_action( 'widgets_init', 'amec_header_widgets_init' );

function amec_header_widget_display(){
if ( is_active_sidebar( 'header-widget-area' ) ) : ?>
	<div id="header-sidebar" class="header-sidebar widget-area" role="complementary">
		<?php dynamic_sidebar( 'header-widget-area' ); ?>
	</div><!-- #primary-sidebar -->
<?php endif;
}

add_action( 'avia_meta_header', 'amec_header_widget_display' );


/* END - Widget area for language switcher */



?>
