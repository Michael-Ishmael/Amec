<?php
//admin menu hook
add_action('admin_menu', 'blz_add_menu');
require_once('blz-Class.php');

//add menu page 
function blz_add_menu() {
	add_menu_page('Blaze Installer Page', 'Blaze Installer', 'administrator','blazeinstaller', 'blz_appearance', plugins_url( 'images/icon.png' , __FILE__ ));
}

function blz_appearance(){
//plugins admin interface
	require_once('blz_appearance.php');
}
?>