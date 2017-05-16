<?php
$blzObj = new blazeinstaller();

function is_string_in_file($path, $searchPhrase) {
	$file = fopen($path, "r") or die("Unable to open file!");
	$fileContent = fread($file,filesize($path));
	fclose($file);

	$pos = strpos($fileContent, $searchPhrase);

	if($pos === false) {
		return false;
	} else {
		return true;
	}
}
?>

<div class="wrap pc-wrap">
	<div class="blzicon icon32"></div>
	<h1 class="blztitle"><?php _e('Blaze Installer','blz') ?></h1>
	<?php
	if (!current_user_can('edit_plugins')) { 
		_e('You do not have sufficient permissions to manage plugins on this blog.<br>','blz');
		return;
	}
	?>
	
	<div id="blzblock-side">
		<h2>Task Completion Checklist</h2>
		
		<!-- Check .htaccess has been amended -->
		<?php 
		$filePath = get_home_path().".htaccess";
		if(is_string_in_file($filePath, "ExpiresByType text/javascript A2592000")) {
			echo '<p class="found"><strong>.htaccess has been amended</strong></p>';
		} else {
			echo '<p class="not-found"><strong>.htaccess has not been amended</strong></p>';
		}
		?>
		
		<!-- Check Howdy replaced with Welcome in admin bar -->
		<p class="found"><strong>Howdy replaced with Welcome in admin bar</strong></p>
		
		<!-- Check WP logo removed from admin bar -->
		<p class="found"><strong>WP logo removed from admin bar</strong></p>

		<!-- Check default WP login error messages are hidden -->
		<p class="found"><strong>Default WP login error messages are hidden</strong></p>

		<!-- Check Apple Touch Icon link is added to wp_head -->
		<p class="found"><strong>Apple Touch Icon link is added to wp_head</strong></p>

		<!-- Check Sitemap page with Pagelist shortcode added -->
		<?php
		if (get_page_by_title('Sitemap', 'OBJECT', 'page')) {
			echo '<p class="found"><strong>Sitemap page with Pagelist shortcode added. Plugin required (see below)</strong></p>';
		} else {
			echo '<p class="not-found"><strong>No Sitemap found</strong></p>';
		}
		?>

		<!-- Check Custom CSS Class is enabled on for Enfold theme -->
		<p class="found"><strong>Custom CSS Class field for all Enfold elements enabled</strong></p>

	</div>

	<div id="blzblock">
		<div><?php if($blzObj->blz_app_DirTesting()){} else{ _e('<div class="blz_error">oops!!! Seems like the directory permission are not set right so some functionalities of plugin will not work.<br/>Please set the directory permission for the folder "uploads" inside "wp-content" directory to 777.</div>','blz'); } ?></div>
		
		<!-- Enter PoC details -->
		<h2>Your Details</h2>
		<p>These details will be shown on the dashboard widget as a point of contact for the client. Please keep these details up to date.</p>
		
		<?php 
		update_response();
		function update_response(){
			global $response;
			if(isset ($_POST['blz_support_name'])) {
				$blz_support_name = $_POST['blz_support_name'];
				update_option( 'blz_widget_name', $blz_support_name, '', 'yes' );
			}
			if(isset ($_POST['blz_support_email'])) {
				$blz_support_email = $_POST['blz_support_email'];
				update_option( 'blz_widget_email', $blz_support_email, '', 'yes' );
			}
			if(isset ($_POST['blz_support_tel'])) {
				$blz_support_tel = $_POST['blz_support_tel'];
				update_option( 'blz_widget_tel', $blz_support_tel, '', 'yes' );
			}
		};

		$current_support_name = get_option('blz_widget_name');
		$current_support_email = get_option('blz_widget_email');
		$current_support_tel = get_option('blz_widget_tel');

		?>
		<table class="form-table blz-settings">
			<tbody>
				<form name="form_blz_details" method="post" action="">
					<tr>
						<th>
							<label for="blz_support_name">Name</label>
						</th>
						<td>
							<input type="text" id="blz_support_name" name="blz_support_name" value="<?php echo $current_support_name; ?>">
						</td>
					</tr>
					<tr>
						<th>
							<label for="blz_support_email">Email</label>
						</th>
						<td>
							<input type="text" id="blz_support_email" name="blz_support_email" value="<?php echo $current_support_email; ?>">
						</td>
					</tr>
					<tr>
						<th>
							<label for="blz_support_tel">Telephone</label>
						</th>
						<td>
							<input type="text" id="blz_support_tel" name="blz_support_tel" value="<?php echo $current_support_tel; ?>">
						</td>
					</tr>
					<tr>
						<td class="blz-save-button blz-save-details">
							<button class="button button-primary align-right" type="submit">Update Details</button>
						</td>
					</tr>
				</form>
			</tbody>
		</table>
		<br/>

		<!-- Install Scripts -->
<!--		<form method="post">
			<label for="fontawe">Add Font Awesome: <input type="checkbox" name="fontawe" id="fontawe" <?php // if(isset($_POST['fontawe'])) echo "checked='checked'"; ?> /></label><br/>
			<label for="enfold_class">Enable custom CSS Class field for all Enfold elements: <input type="checkbox" name="enfold_class" id="enfold_class" <?php if(isset($_POST['enfold_class'])) echo "checked='checked'"; ?>/></label><br/>
			<button class="button button-primary align-left" type="submit">Install Scripts</button>
		</form>

		<?php 
//		if(isset($_POST['fontawe'])) {
//			wp_register_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css');
//			wp_enqueue_style('font-awesome');
//		}
//
//		if(isset($_POST['enfold_class'])) {
//			add_theme_support('avia_template_builder_custom_css');
//			echo 'enfold_class';
//		}
		?>

	-->

		<!-- Install Plugins -->
		<h2>Install Plugins</h2>
		<form name="form_blz_plugins" method="post" action="">
			<?php wp_nonce_field($blzObj->key); ?>
			<div> 						
				<p><?php _e('Enter the plugin names to install','blz'); ?></p>
				<p><?php _e('For example: <em>https://en-gb.wordpress.org/plugins/<strong>wordpress-seo</strong></em>','blz'); ?></p>
				<textarea style="border:1px solid #D1D1D1;width:575px;" name="blz_wplists" id="blz_wplists" cols="40" rows="20">advanced-access-manager&#10;contact-form-7&#10;contact-form-7-to-database-extension&#10;uk-cookie-consent&#10;google-analytics-dashboard-for-wp&#10;better-wp-security&#10;page-list&#10;wp-smushit&#10;wordpress-seo&#10;better-search-replace&#10;wp-recaptcha-integration&#10;my-wp-login-logo</textarea><br/><small style="color:#9B0707;">&nbsp;(<?php _e('Please enter one name in one line.','blz') ?>)</small>
				<br/><br/>
				<div>
					<!-- <input style="float:left;" class="button button-primary" type="submit" name="blz_wpInstall" value="<?php _e('Install','blz'); ?>" /> -->
					<input style="float:left;"  class="button button-primary" type="submit" name="blz_wpActivate" value="<?php _e('Install & Activate','blz'); ?>" />
					<div class="blz_clear"></div>
				</div>
			</div>
		</form>

		<!-- Submit forms -->			
		<?php
		if(isset($_POST['blz_wpInstall']) && trim($_POST['blz_wplists'])){
			$blzObj->blz_app_wpInstall('install');
		}
		if(isset($_POST['blz_wpActivate']) && trim($_POST['blz_wplists'])){
			$blzObj->blz_app_wpInstall('activate');
		}	
		?>

	</div>
</div>