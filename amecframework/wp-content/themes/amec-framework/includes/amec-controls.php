
<div class="control-row row">
    <div class="col-md-1 low-pad-cell">
        <?php if (is_user_logged_in()) { ?>
            <div class="button background-dark_blue bottom-dark-border-dark_blue" id="logout">Logout</div>
        <?php } else { get_template_part('ajax', 'auth'); ?>
            <div class="button background-dark_blue bottom-dark-border-dark_blue" id="show_login">Login</div>
        <?php } ?>
    </div>
    <div class="col-md-2 low-pad-cell">
        <div class="button background-dark_blue bottom-dark-border-dark_blue">Save Progress</div>
    </div>
    <div class="col-md-8 low-pad-cell"></div>

    <div class="col-md-1 low-pad-cell">
        <div id="show_signup" class="button background-bright_green bottom-dark-border-bright_green">Submit</div>
    </div>
</div>
