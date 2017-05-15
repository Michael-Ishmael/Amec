<?php
function ajax_auth_init()
{
    wp_register_style('ajax-auth-style', get_stylesheet_directory_uri() . '/css/ajax-auth-style.css');
    wp_enqueue_style('ajax-auth-style');

    wp_register_script('validate-script', get_stylesheet_directory_uri() . '/js/jquery.validate.js', array('jquery'));
    wp_enqueue_script('validate-script');

    wp_register_script('ajax-auth-script', get_stylesheet_directory_uri() . '/js/ajax-auth-script.js', array('jquery'));
    wp_enqueue_script('ajax-auth-script');

    wp_localize_script('ajax-auth-script', 'ajax_auth_object', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'redirecturl' => get_permalink(),
        'loadingmessage' => __('Sending user info, please wait...'),
        'logout_nonce' => wp_create_nonce('ajax-logout-nonce'),
        'login_nonce' => wp_create_nonce('ajax-login-nonce'),
        'register_nonce' => wp_create_nonce('ajax-register-nonce'),
        'logged_in_nonce' => wp_create_nonce('ajax-logged-in-nonce'),
        'rest_nonce' => wp_create_nonce('wp_rest'),
        'resturl' => esc_url_raw( rest_url() ),

    ));

    // Enable the user with no privileges to run ajax_login() in AJAX
    add_action('wp_ajax_nopriv_ajaxlogin', 'ajax_login');
    // Enable the user with no privileges to run ajax_register() in AJAX
    add_action('wp_ajax_nopriv_ajaxregister', 'ajax_register');

    add_action('wp_ajax_ajaxlogout', 'ajax_logout');

    add_action('wp_ajax_nopriv_ajaxloggedin', 'ajax_is_logged_in');
    add_action('wp_ajax_ajaxloggedin', 'ajax_is_logged_in');

}

// Execute the action only if the user isn't logged in
//if (!is_user_logged_in()) {
add_action('init', 'ajax_auth_init');
//}

function ajax_is_logged_in()
{
    check_ajax_referer('ajax-logged-in-nonce', 'security');
    auth_user_logged_in();

    die();
}

function ajax_login()
{

    // First check the nonce, if it fails the function will break
    check_ajax_referer('ajax-login-nonce', 'security');

    // Nonce is checked, get the POST data and sign user on
    // Call auth_user_login
    auth_user_login($_POST['username'], $_POST['password'], 'Login');

    die();
}


function ajax_logout()
{

    // First check the nonce, if it fails the function will break
    check_ajax_referer('ajax-logout-nonce', 'security');
    wp_clear_auth_cookie();
    wp_logout();
    ob_clean();
    echo json_encode(array('loggedOut' => true));
    wp_die();

}


function ajax_register()
{

    // First check the nonce, if it fails the function will break
    check_ajax_referer('ajax-register-nonce', 'security');

    // Nonce is checked, get the POST data and sign user on
    $info = array();

    $email = sanitize_email($_POST['email']);
    $firstName = sanitize_text_field($_POST['firstName']);

    $info['user_login'] = sanitize_user($_POST['username']);
    $info['user_pass'] = sanitize_text_field($_POST['password']);
    $info['user_email'] = $email;
    $info['user_nicename'] = $info['nickname'] = $info['display_name'] = $info['first_name'] = $firstName;
    $info['last_name'] = sanitize_text_field($_POST['lastName']);
    $info['locale'] = sanitize_text_field($_POST['locale']);
    $info['role'] = 'author';
    $info['show_admin_bar_front'] = 'false';

    // Register the user
    $user_register = wp_insert_user($info);
    if (is_wp_error($user_register)) {
        $error = $user_register->get_error_codes();

        if (in_array('empty_user_login', $error))
            echo json_encode(array('loggedIn' => false, 'message' => __($user_register->get_error_message('empty_user_login'))));
        elseif (in_array('existing_user_login', $error))
            echo json_encode(array('loggedIn' => false, 'message' => __('This email address is already registered.')));
        elseif (in_array('existing_user_email', $error))
            echo json_encode(array('loggedIn' => false, 'message' => __('This email address is already registered.')));
    } else {

        $user_signon = wp_signon(array('user_login' => $info['user_login'], 'user_password' => $info['user_pass']), false);
        if (is_wp_error($user_signon)) {
            echo json_encode(array('loggedIn' => false, 'message' => __('Wrong username or password.')));
            die;
        }

        wp_set_current_user($user_signon->ID);

        add_user_meta($user_signon->ID, "organisation", sanitize_text_field($_POST['organisation']), true);
        add_user_meta($user_signon->ID, "jobTitle", sanitize_text_field($_POST['jobTitle']), true);
        add_user_meta($user_signon->ID, "contactNumber", sanitize_text_field($_POST['contactNumber']), true);

        $draft_framework_id = -1;
        if(!empty($_POST['tempFramework'])){
            $post_id = wp_insert_post(array(
                'post_id' => 0,
                'post_content' => $_POST['tempFramework'],
                'post_title' => "Aif##Temp_" . $user_signon->ID,
                'post_excerpt' => "Pre-save framework",
                'post_status' => "draft",
                'post_type' => "aif_workflow"
            ), true);
            if (!is_wp_error($post_id)){
                $draft_framework_id = $post_id;
            }
        }

        echo json_encode(array('loggedIn' => true,
            'message' => __('user logged in'),
            'userId' => $user_signon->ID,
            'email' => $email,
            'displayName' => $firstName,
            'draftFrameworkId' => $draft_framework_id
        ));

    }

    die();
}

function auth_user_login($user_login, $password, $login)
{
    $info = array();
    $info['user_login'] = $user_login;
    $info['user_password'] = $password;
    $info['remember'] = true;

    $user_signon = wp_signon($info, false);
    if (is_wp_error($user_signon)) {
        echo json_encode(array('loggedIn' => false, 'message' => __('Wrong username or password.')));
    } else {
        wp_set_current_user($user_signon->ID);
        $draft_framework_id = -1;
        if(!empty($_POST['tempFramework'])){
            $post_id = wp_insert_post(array(
                'post_id' => 0,
                'post_content' => $_POST['tempFramework'],
                'post_title' => "Aif##Temp_" . $user_signon->ID,
                'post_excerpt' => "Pre-save framework",
                'post_status' => "draft",
                'post_type' => "aif_workflow"
            ), true);
            if (!is_wp_error($post_id)){
                $draft_framework_id = $post_id;
            }
        }

        echo json_encode(array('loggedIn' => true,
            'message' => __($login . ' successful'),
            'userId' => $user_signon->ID,
            'displayName' => $user_signon->display_name,
            'draftFrameworkId' => $draft_framework_id
        ));
    }

    die();
}


function auth_user_logged_in()
{
    $user = wp_get_current_user();

    if (is_wp_error($user)) {
        echo json_encode(array('loggedIn' => false, 'message' => __('error checking user')));
    } else {
        if ($user->ID == 0) {
            echo json_encode(array('loggedIn' => false, 'message' => __('no current user')));
            die();
        }

        echo json_encode(array('loggedIn' => true,
            'message' => __('user logged in'),
            'userId' => $user->ID,
            'email' => $user->user_email,
            'displayName' => $user->display_name
        ));
    }

    die();
}

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
//show_admin_bar_front ??