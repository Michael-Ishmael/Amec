<?php

/* Interactive FrameWork */

function amec_adding_scripts() {
	//wp_enqueue_script( 'edge', get_stylesheet_directory_uri() . '/js/edge.6.0.0.min.js', array( 'jquery' ), '1.0', true );
	//wp_enqueue_script( 'interactive-framework', get_stylesheet_directory_uri() . '/js/interactive-framework-edge_edge.js', array( 'edge' ), '1.0', true );
	//wp_enqueue_script( 'blaze-wp-edge', get_stylesheet_directory_uri() . '/js/blaze-wp-edge.js', array( 'edge' ), '1.0', true );
	wp_enqueue_script( 'blaze', get_stylesheet_directory_uri() . '/js/blaze.js', array( 'jquery' ), '1.0', true );
	wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese', false );

}

function aif_add_scripts() {

    wp_register_script( 'tether-js', get_stylesheet_directory_uri() . '/js/vendor/tether.min.js', array('jquery'), NULL, true );

    wp_register_style( 'bootstrap-css', get_stylesheet_directory_uri() . '/css/vendor/bootstrap.css', false, NULL, 'all' );
//    wp_register_style( 'perfect-scrollbar-css', get_stylesheet_directory_uri() . '/css/vendor/perfect-scrollbar.min.css', false, NULL, 'all' );

    wp_register_script( 'bootstrap-js', get_stylesheet_directory_uri() . '/js/vendor/bootstrap.min.js', array('jquery'), NULL, true );
//    wp_register_script( 'perfect-scrollbar-js', get_stylesheet_directory_uri() . '/js/libs/perfect-scrollbar.jquery.min.js', array('jquery'), NULL, true );
    wp_register_script( 'spin-js', get_stylesheet_directory_uri() . '/js/libs/spin.min.js', array('jquery'), NULL, true );


    wp_register_script( 'angular-js', get_stylesheet_directory_uri() . '/js/libs/angular/angular.min.js', array('jquery'), NULL, true );
    wp_register_script( 'angular-cookies-js', get_stylesheet_directory_uri() . '/js/libs/angular/angular-cookies.js', array('angular-js'), NULL, true );
    wp_register_script( 'angular-cookies-js', get_stylesheet_directory_uri() . '/js/libs/shepherd.min.js', array('tether-js'), NULL, true );
    wp_register_script( 'export-pdf', get_stylesheet_directory_uri() . '/js/generate-pdf.js', array('jquery'), NULL, true );
    wp_register_script( 'aif-app', get_stylesheet_directory_uri() . '/js/build/build.js', array('angular-js', 'angular-cookies-js'), NULL, true );

    wp_localize_script( 'aif-app', 'aif_constants', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'templateDir' => get_stylesheet_directory_uri(),
        'redirecturl' => get_permalink(),
        'logout_nonce' => wp_create_nonce('ajax-logout-nonce'),
    ));

    wp_enqueue_style( 'bootstrap-css' );
    wp_enqueue_style( 'bootstrap-grid-css' );
    wp_enqueue_style( 'bootstrap-reboot-css' );
//    wp_enqueue_style( 'perfect-scrollbar-css' );
    wp_enqueue_style( 'aif-css', get_stylesheet_directory_uri() . '/css/aif-app.css');


    wp_enqueue_script( 'tether-js' );
    wp_enqueue_script( 'angular-js' );
    wp_enqueue_script( 'angular-cookies-js' );
//    wp_enqueue_script( 'perfect-scrollbar-js' );
    wp_enqueue_script( 'spin-js' );
    wp_enqueue_script( 'export-pdf' );
    wp_enqueue_script( 'aif-app' );
}


add_action( 'wp_enqueue_scripts', 'amec_adding_scripts');
add_action( 'wp_enqueue_scripts', 'aif_add_scripts' , 99);

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
