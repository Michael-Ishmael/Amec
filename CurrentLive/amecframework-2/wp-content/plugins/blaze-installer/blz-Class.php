<?php
class blazeinstaller
{
    var $plugin_url;
    var $key;
    
    function __construct(){
        $this->plugin_url = trailingslashit(get_bloginfo('wpurl')) . PLUGINDIR . '/' . dirname(plugin_basename(__FILE__));
        $this->key = 'blazeinstaller';
    }
	  
	// download the plugin handler form the wordpress org
    function blz_plugin_handle_download($plugin_name,$package,$blz_action,$whform)
	{
        global $wp_version;
        
        if(version_compare($wp_version, '3.0', '<')){
            include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';  
            $upgrader = new Plugin_Upgrader(); 
            $upgrader->install($package);
            
        	if ($upgrader->plugin_info()){
        		echo '<a href="' . wp_nonce_url('plugins.php?action=activate&amp;plugin=' . $upgrader->plugin_info(), 'activate-plugin_' . $plugin_file) . '" title="' . esc_attr__('Activate this plugin') . '" target="_parent">' . __('Activate Plugin') . '</a>';
        	}
        }			
        else{
			include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			$upgrader = new Plugin_Upgrader( new Plugin_Installer_Skin( compact('type', 'title', 'nonce', 'url') ) ); 
			$res=$upgrader->install($package);  


			//remove temp files
			if($whform == "upload_locFiles"){
				@unlink($package);
			}
			
			if (!$upgrader->plugin_info()){
				echo $res;
			}
			
			elseif($blz_action =="activate"){
				$blzplugins = get_option('active_plugins');
				if($blzplugins){
					$puginsToActiv = array($upgrader->plugin_info());
					foreach ($puginsToActiv as $blzplugin){
						if (!in_array($blzplugin, $blzplugins)) {
							 array_push($blzplugins,$blzplugin);
							 update_option('active_plugins',$blzplugins);
						}
					}
				}
				_e('<b class="blz_act">Plugin activated successfully.</b><br/>','blz');
			}
        }
    }
	
	// get plugin information	
    function blz_get_plugin($plugin_name){
        $name = $plugin_name;
        $plugin = $plugin_name;
        $description = '';
        $author = '';
        $version = '0.1';
        $plugin_file = "$name.php";
        
        return array(
        	'Name' => $name, 
        	'Title' => $plugin, 
        	'Description' => $description, 
        	'Author' => $author, 
        	'Version' => $version
        );
    }
	
	function blz_create_file($plugins_arr,$blz_cfilenm)
	{
		if($plugins_arr){
				$blz_filetxt = "";
			foreach($plugins_arr as $blz_plugin){
				$blz_filetxt .= $blz_plugin.",";
			}

			$blz_filetxt = substr($blz_filetxt, 0, -1);
			
			if($blz_cfilenm){
				$blz_flnm = $blz_cfilenm.'_'.time().".blz";
				$blz_file = blzUPLOADDIR_PATH.'/blz_logs/files/'.$blz_flnm;
			}
			else{
				$blz_flnm = "blz_".time().".blz";
				$blz_file = blzUPLOADDIR_PATH.'/blz_logs/files/'.$blz_flnm;
			}
			
			$blz_handle = fopen($blz_file, 'w+') or die('Cannot open file:  '.$blz_file);
			fwrite($blz_handle, $blz_filetxt);
			fclose($blz_handle);
		}
	}
    
    function blz_get_packages($plugins_arr,$blz_action,$blz_cfilenm,$whform)
	{
        global $wp_version;
        
        if (!function_exists('fsockopen')) return false;
        
        foreach ($plugins_arr as $val){
            $val = trim($val);
            
			$tmp = explode('.', $val);
			$file_extension = end($tmp);
			
            if ($file_extension == 'zip'){
               $this->blz_plugin_handle_download("temp",$val,$blz_action,$whform);
            }
            else {
                $plugins[plugin_basename($val . ".php")] = $this->blz_get_plugin($val);
                $send = 1;
            }
        }
        
        //$plugins = blz_get_plugins();
        
        if ($send) 
        {
			$to_send = new stdClass();
            $to_send->plugins = $plugins;
            
            $send = serialize($to_send);
            
            $request = 'plugins=' . urlencode($send);
            $http_request = "POST /plugins/update-check/1.0/ HTTP/1.0\r\n";
            $http_request .= "Host: api.wordpress.org\r\n";
            $http_request .= "Content-Type: application/x-www-form-urlencoded; charset=" . get_option('blog_charset') . "\r\n";
            $http_request .= "Content-Length: " . strlen($request) . "\r\n";
            $http_request .= 'User-Agent: WordPress/' . $wp_version . '; ' . get_bloginfo('url') . "\r\n";
            $http_request .= "\r\n";
            $http_request .= $request;
            
            //echo $http_request."<br><br>";
            
            $response = '';
            if (false !== ($fs = @fsockopen('api.wordpress.org', 80, $errno, $errstr, 3)) && is_resource($fs)) 
            {
                fwrite($fs, $http_request);
                
                while (!feof($fs)){
                    // One TCP-IP packet
                    $response .= fgets($fs, 1160);
                }
                
                fclose($fs);
                //echo $response;
                $response = explode("\r\n\r\n", $response, 2);
            }
            
            $response = unserialize($response[1]);
            
            $i = 0;
            foreach ($plugins_arr as $val) 
            {
                ++$i;
                if ($plugins[plugin_basename("$val.php")]) 
                {
                    if ($response) 
                    {
                        $r = $response[plugin_basename("$val.php")];
                        if (!$r) 
                        {
                            echo '<p class="not-found">' . $i . '. <strong>' . $val . '</strong> not found. Try <a href="http://google.com/search?q=' . $val . ' +wordpress">manual</a> install.</p>';
                        } 
                        elseif ($r->package) 
                        {
                            $this->_blzflush("<p class=\"found\">$i. Found <strong>" .stripslashes($val). "</strong> ($r->slug, version $r->new_version). Processing installation...</strong></p>");
                            $this->blz_plugin_handle_download($r->slug,$r->package,$blz_action,$whform);
							$blz_fileArr[] = $r->slug;
                        } 
                        else
                        {	
                           echo '<p class="not-found">' . $i . '. Package for <strong><em>' . $val . '</em></strong> not found. Try <a href="' . $r->url . '">manual</a> install.</p>';
                        }
                    } 
                    else
                    {
                        echo '<p class="not-found">' . $i . '. <strong>' . $val . '</strong> not found. Try <a href="http://google.com/search?q=' . $val . ' +wordpress">manual</a> install.</p>';
                    }
                }
            }
			
			if($blz_cfilenm != "nocreate" && $blz_fileArr > 0){
				$this->blz_create_file($blz_fileArr,$blz_cfilenm);
			}
        }
    }
	
	function blz_copy_directory($source, $destination) {
		if ( is_dir( $source ) ) {
			@mkdir($destination);
			$directory = dir( $source );
			while ( FALSE !== ( $readdirectory = $directory->read() ) ) {
				if ( $readdirectory == '.' || $readdirectory == '..' ) {
					continue;
				}
				$PathDir = $source . '/' . $readdirectory; 
				if ( is_dir( $PathDir ) ) {
					$this->blz_copy_directory( $PathDir, $destination . '/' . $readdirectory );
					continue;
				}
				@copy( $PathDir, $destination . '/' . $readdirectory );
			}
	 
			$directory->close();
		}else {
			@copy( $source, $destination );
		}
	}
	
	function blz_delete_directory($path){
		if (is_dir($path) === true){
			$files = array_diff(scandir($path), array('.', '..'));
			foreach ($files as $file){
				$this->blz_delete_directory(realpath($path) . '/' . $file);
			}
			return @rmdir($path);
		}
		else if (is_file($path) === true){
			return @unlink($path);
		}
		return false;
	}
	
	
	function blz_getWP_maxupload_filesize(){
		$upload_size_unit = $max_upload_size = wp_max_upload_size();
		$sizes = array( 'KB', 'MB', 'GB' );
		for ( $u = -1; $upload_size_unit > 1024 && $u < count( $sizes ) - 1; $u++ ) {
			$upload_size_unit /= 1024;
		}
		if ( $u < 0 ) {
			$upload_size_unit = 0;
			$u = 0;
		} else {
			$upload_size_unit = (int) $upload_size_unit;
		}
		printf( __( 'Maximum upload file size: %d%s.' ), esc_html($upload_size_unit), esc_html($sizes[$u]) );
	}
	
	
    function _blzflush($s){
        echo $s;
        flush();
    }
	
	function blz_app_DirTesting(){
		if(!is_dir(blzUPLOADDIR_PATH.'/blz_testing')){ 
			if(@mkdir(blzUPLOADDIR_PATH.'/blz_testing', 0777)){
				@rmdir(blzUPLOADDIR_PATH.'/blz_testing');
				return true;
			}
			else
			return false;
		}
	}
	
	function blz_app_wpInstall($blz_role){
		check_admin_referer($this->key);
		_e('<div class="blz_h3">Plugin installation process:</div>','blz');
		$plugin_install = !isset($_POST['blz_wplists']) ? '' : $_POST['blz_wplists'];
		$blz_expfilenm = $_POST['blz_expfilenm'];
		if ($plugin_install != '') {
			$plugin_install = str_replace(array("\r\r\r", "\r\r", "\r\n", "\n\r", "\n\n\n", "\n\n"), "\n", $plugin_install);
			$options = explode("\n", $plugin_install);
			$this->blz_get_packages($options,$blz_role,$blz_expfilenm,"");
		}
	}
	
	function blz_app_locInstall(){
		check_admin_referer($this->key);
		_e('<div class="blz_h3">Plugin installation process:</div>','blz');
		
		for($i=0; $i<count($_FILES['blz_locFiles']['name']); $i++){
			$blz_locFilenm = $_FILES['blz_locFiles']['name'][$i];

			if (strpos($blz_locFilenm,'blzpluginsbackup') === false){								
				//Get the temp file path
				$tmpFilePath = $_FILES['blz_locFiles']['tmp_name'][$i];

				//Make sure we have a filepath
				if ($tmpFilePath != ""){
					//Setup our new file path
					$newFilePath = blzUPLOADDIR_PATH.'/blz_logs/files/tmp' . $_FILES['blz_locFiles']['name'][$i];
					
					//Upload the file into the temp dir
					if(@move_uploaded_file($tmpFilePath, $newFilePath)) {
						$blz_tempurls[] = blzUPLOADDIR_PATH.'/blz_logs/files/tmp'.$_FILES['blz_locFiles']['name'][$i];
					}
				}
			}
			else{
			_e('This is <b>'.$blz_locFilenm.'</b> not a valid zip archive.','blz');
			}
		}
		if($blz_tempurls)
		$this->blz_get_packages($blz_tempurls,"activate","nocreate","upload_locFiles");
	}
	
	function blz_app_expFileUpload(){
		check_admin_referer($this->key);
		_e('<div class="blz_h3">Plugin installation process:</div>','blz');
		$plugin_install = file_get_contents($_FILES['blz_expfileUp']['tmp_name']); 
		if ($plugin_install != '') {
			$options = explode(",", $plugin_install);
			$this->blz_get_packages($options,"activate","nocreate","");
		}
	}
	
	function blz_app_downloadFiles(){
		$blz_filesDir = blzUPLOADDIR_PATH.'/blz_logs/files/';
		if(glob($blz_filesDir . "*.blz") != false){
			$sr_count = 1;
			echo '<table class="blz_files" border="1" cellpadding="7" cellspacing="0">
			<tr><th>S. No.</th><th>Exported File Name</th><th>Exported Date,Time</th><th>Download</th><th>Delete</th></tr>';
			foreach(glob($blz_filesDir . "*.blz") as $filename){	
				$blz_filenm = str_replace($blz_filesDir, "",$filename);
				$blz_backupfilenm = str_replace($blz_filesDir, "",$blz_filenm);
				$blz_timedate = explode("_",$blz_backupfilenm);
				$blz_timedate = str_replace('.blz', "",$blz_timedate[1]);
				$blz_timedate = date("m-d-Y , H:i:s", $blz_timedate);
				$blz_full_filenm = $blz_filenm;
				$arr_params = array( 'dn' => 1, 'filename' => $blz_full_filenm);
				$download_path =  esc_url( add_query_arg( $arr_params ) );

				$del_arr_params = array( 'dl' => 1, 'filename' => $blz_full_filenm);
				$delete_path =  esc_url( add_query_arg( $del_arr_params ) );

				?>
					<tr>
						<td class="sr_no"><?php echo $sr_count; ?></td>
						<td class="blz_filenm"><?php echo $blz_filenm; ?></td>
						<td class="blz_filenm"><?php echo $blz_timedate; ?></td>
						<td class="blz_dwnload"><a class="blz_filedwn expfile" title="Download file" href='<?php echo $download_path ;?>' ></a></td>
						<td class="blz_del"><a class="blz_trashdwn expfile" title="Delete file" href='<?php echo $delete_path ;?>' onClick="return blz_delcfirm();" ></a></td>
					</tr>
				<?php
				$sr_count++;
			}
			echo '</table>';
		}
		else{
			_e('<b style="color:#9B0707;">No Exported Files Are Avialable To Download.</b>','blz');
		}
	}
	
	function blz_app_wholePluginsBkup(){
		$blz_backupDir = blzUPLOADDIR_PATH.'/blz_logs/';
		if(glob($blz_backupDir . "*.zip") != false){
			$sr_count = 1;
			echo '<table class="blz_files" border="1" cellpadding="7" cellspacing="0">
			<tr><th>S. No.</th><th>Backup File Name</th><th>Backup Date,Time</th><th>File Size</th><th>Download</th><th>Delete</th></tr>';
			foreach(glob($blz_backupDir . "*.zip") as $bfilename){	
				$blz_backupfilenm = str_replace($blz_backupDir, "",$bfilename);
				$blz_timedate = explode("_",$blz_backupfilenm);
				$blz_timedate = str_replace('.zip', "",$blz_timedate[1]);
				$blz_timedate = date("m-d-Y , H:i:s", $blz_timedate);
				$blz_filesize = round(filesize($bfilename)/1024,2);
				$blz_full_filenm = $blz_backupfilenm;
				if($blz_filesize > 1024){$blz_filesize = round($blz_filesize/1024,3)." MB";}
				else{$blz_filesize = $blz_filesize." KB";}

				$arr_params = array( 'dn' => 1, 'filename' => $blz_full_filenm);
				$download_path =  esc_url( add_query_arg( $arr_params ) );
				$del_arr_params = array( 'dl' => 1, 'filename' => $blz_full_filenm);
				$delete_path =  esc_url( add_query_arg( $del_arr_params ) );
				
				?>
					<tr>
						<td class="sr_no"><?php echo $sr_count; ?>.</td>
						<td class="blz_filenm"><?php echo $blz_backupfilenm; ?></td>
						<td class="blz_timedt"><?php echo $blz_timedate; ?></td>
						<td class="blz_timedt"><?php echo $blz_filesize; ?></td>
						<td class="blz_dwnload"><a class="blz_filedwn expfile" title="Download file" href='<?php echo $download_path; ?>' ></a></td>
						<td class="blz_del"><a class="blz_trashdwn expfile" title="Delete file" href='<?php echo $delete_path; ?>' onClick="return blz_delcfirm();" ></a></td>
					</tr>
				<?php
				$sr_count++;
			}
			echo '</table>';
		}
		else{
			_e('<b style="color:#9B0707; margin-left: 5px;">No Plugin Backup Files Are Avialable To Download.</b>','blz');
		}
	}
	
	function blz_app_pluginBkupFileUpload(){
		check_admin_referer($this->key);
		
		$bk_tmpFilePath = $_FILES['blz_upbackup']['tmp_name'];

		//Make sure we have a filepath
		if ($bk_tmpFilePath != ""){														
			//Setup our new file path
			$bk_newFilePath = blzUPLOADDIR_PATH.'/blz_logs/files/tmp/' . $_FILES['blz_upbackup']['name'];

			//Upload the file into the temp dir
			if(@move_uploaded_file($bk_tmpFilePath,$bk_newFilePath)) {
				//extract zip file here
				$zip = new ZipArchive;
				if($zip->open($bk_newFilePath) === TRUE) {
					$zip->extractTo(blzUPLOADDIR_PATH.'/blz_logs/files/tmp/');
					$zip->close();
					
					if(is_dir(blzUPLOADDIR_PATH.'/blz_logs/files/tmp/plugins')){
						@rename(blzUPLOADDIR_PATH.'/blz_logs/files/tmp/plugins', blzUPLOADDIR_PATH.'/blz_logs/files/tmp/blztemp');
						@unlink($bk_newFilePath);
						$pluginDir_src = blzUPLOADDIR_PATH.'/blz_logs/files/tmp/blztemp/';

						$this->blz_copy_directory($pluginDir_src,blz_WP_PLUGIN_DIR);
						$this->blz_delete_directory($pluginDir_src);
						
						_e('<b class="blz_act">Plugins Installed Successfully.</b><br/>','blz');
					}
					else{
						$blz_rmdirnm = str_replace('.zip', "",$bk_newFilePath);
						@unlink($bk_newFilePath);
						$this->blz_delete_directory($blz_rmdirnm);
						_e('<b style="color:#9B0707">Please upload valid plugins backup file.</b>','blz');
					}	
				}										
			}
		}
		else{
			_e('<b style="color:#9B0707">Please Increase WordPress Media Upload Size Limit.</b>','blz');
		}
	}


	/*Function to start download after blz_download.php bugs*/

function blz_download(){


	global $current_user;
		get_currentuserinfo();

		if ($current_user->user_level < 9 ) {
			wp_die('You do not have permission to perform this action');
		}

		$blz_upload_dir = blzUPLOADDIR_PATH.'/blz_logs/';
		$name= $_REQUEST['filename'];
		$file      = $blz_upload_dir.$_REQUEST['filename'];
		
		 //Check the file premission
		 if(!is_readable($file)) wp_die('File not found or inaccessible!');

		 $size = filesize($file);
		 /* Figure out the MIME type | Check in array */
		 $known_mime_types=array(
		 	"pdf" => "application/pdf",
		 	"txt" => "text/plain",
		 	"html" => "text/html",
		 	"htm" => "text/html",
			"exe" => "application/octet-stream",
			"zip" => "application/zip",
			"doc" => "application/msword",
			"xls" => "application/vnd.ms-excel",
			"ppt" => "application/vnd.ms-powerpoint",
			"gif" => "image/gif",
			"png" => "image/png",
			"jpeg"=> "image/jpg",
			"jpg" =>  "image/jpg",
			"php" => "text/plain",
			"blz" => "text/plain"
		 );
		 
		 if($mime_type==''){
			 $file_extension = strtolower(substr(strrchr($file,"."),1));
			 if(array_key_exists($file_extension, $known_mime_types)){
				$mime_type=$known_mime_types[$file_extension];
			 } else {
				$mime_type="application/force-download";
			 };
		 };
		 
		 //turn off output buffering to decrease cpu usage
		 ob_start(); 
		 
		 // required for IE, otherwise Content-Disposition may be ignored
		 if(ini_get('zlib.output_compression'))
		  ini_set('zlib.output_compression', 'Off');
		 
		 header('Content-Type: ' . $mime_type);
		 header('Content-Disposition: attachment; filename="'.$name.'"');
		 header("Content-Transfer-Encoding: binary");
		 header('Accept-Ranges: bytes');
		 
		 /* The three lines below basically make the 
		    download non-cacheable */
		 header("Cache-control: private");
		 header('Pragma: private');
		 header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
		 
		 // blazepart-download and download resuming support
		 if(isset($_SERVER['HTTP_RANGE']))
		 {
			list($a, $range) = explode("=",$_SERVER['HTTP_RANGE'],2);
			list($range) = explode(",",$range,2);
			list($range, $range_end) = explode("-", $range);
			$range=intval($range);
			if(!$range_end) {
				$range_end=$size-1;
			} else {
				$range_end=intval($range_end);
			}
			/*
			------------------------------------------------------------------------------------------------------
			------------------------------------------------------------------------------------------------------
		 	*/
			$new_length = $range_end-$range+1;
			header("HTTP/1.1 206 Partial Content");
			header("Content-Length: $new_length");
			header("Content-Range: bytes $range-$range_end/$size");
		 } else {
			$new_length=$size;
			header("Content-Length: ".$size);
		 }
		 
		 /* Will output the file itself */
		 $chunksize = 1*(1024*1024); //you may want to change this
		 $bytes_send = 0;
		 if ($file = fopen($file, 'r'))
		 {
			if(isset($_SERVER['HTTP_RANGE']))
			fseek($file, $range);
		 
			while(!feof($file) && 
				(!connection_aborted()) && 
				($bytes_send<$new_length)
			     )
			{
				$buffer = fread($file, $chunksize);
				print($buffer); //echo($buffer); // can also possible
				flush();
				$bytes_send += strlen($buffer);
			}
		 fclose($file);
		 } else
		 //If no permissiion
		 die('Error - can not open file.');

}

function blz_delete(){

global $current_user;
get_currentuserinfo();

if ($current_user->user_level < 9 ) {
	wp_die('You do not have permission to perform this action');
}
$blz_upload_dir = blzUPLOADDIR_PATH.'/blz_logs/';
$file_path      = $blz_upload_dir.$_REQUEST['filename'];
if(!is_readable($file_path)) wp_die('File not found or inaccessible!');

if(@unlink($file_path))
header('Location: ' . $_SERVER['HTTP_REFERER']);
else
wp_die('Error in deleting file');

}



}
