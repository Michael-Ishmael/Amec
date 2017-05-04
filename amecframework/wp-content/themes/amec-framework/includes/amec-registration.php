<?php if (is_user_logged_in()) { ?>
    <a class="login_button" id="logout" href="">Logout</a>
<?php } else { get_template_part('ajax', 'auth'); ?>
    <a class="login_button" id="show_login" href="">Login</a>
    <a class="login_button" id="show_signup" href="">Signup</a>
<?php } ?>