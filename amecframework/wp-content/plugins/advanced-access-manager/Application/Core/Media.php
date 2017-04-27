<?php

/**
 * ======================================================================
 * LICENSE: This file is subject to the terms and conditions defined in *
 * file 'LICENSE', which is part of this source code package.           *
 * ======================================================================
 */

/**
 * AAM Media Access
 *
 * @package AAM
 * @author Vasyl Martyniuk <vasyl@vasyltech.com>
 */
class AAM_Core_Media {

    /**
     * Instance of itself
     * 
     * @var AAM_PlusPackage 
     * 
     * @access private
     */
    private static $_instance = null;
    
    /**
     * Initialize the extension
     * 
     * @return void
     * 
     * @access protected
     */
    protected function __construct() {
        if (AAM_Core_Request::get('aam-media')) {
            $area = (is_admin() ? 'backend' : 'frontend');
            if (AAM_Core_Config::get("{$area}-access-control")) {
                $this->checkMediaAccess();
            }
        }
    }
    
    /**
     * Check media access
     * 
     * @return void
     * 
     * @access protected
     */
    protected function checkMediaAccess() {
        $directory = wp_get_upload_dir();
        
        $abspath = str_replace('\\', '/', ABSPATH);
        $uploads = str_replace('\\', '/', $directory['basedir']);
        $request = AAM_Core_Request::server('REQUEST_URI');
        
        if (strpos($request, str_replace($abspath, '/', $uploads)) === 0) {
            $media = $this->findMedia($request);
            $area  = (is_admin() ? 'backend' : 'frontend');
            
            if (empty($media) || !$media->has("{$area}.read")) {
                @header('Content-Type: ' . $media->post_mime_type);
                echo file_get_contents(ABSPATH . $request);
                exit;
            } elseif (!empty($media)) {
                AAM_Core_API::reject(
                    $area, array('object' => $media, 'action' => "{$area}.read")
                );
            }
        }
    }
    
    /**
     * Find media by URI
     * 
     * @global Wpdb $wpdb
     * 
     * @param string $uri
     * 
     * @return AAM_Core_Object_Post|null
     * 
     * @access protected
     */
    protected function findMedia($uri) {
        global $wpdb;
        
        $s  = addslashes(preg_replace('/(-[\d]+x[\d]+)(\.[\w]+)$/', '$2', $uri));
        $id = $wpdb->get_var("SELECT ID FROM {$wpdb->posts} WHERE guid LIKE '%$s'");
        
        return ($id ? AAM::getUser()->getObject('post', $id) : null);
    }
    
    /**
     * Bootstrap the extension
     * 
     * @return AAM_Skeleton
     * 
     * @access public
     */
    public static function bootstrap() {
        if (is_null(self::$_instance)) {
            self::$_instance = new self;
        }

        return self::$_instance;
    }

}