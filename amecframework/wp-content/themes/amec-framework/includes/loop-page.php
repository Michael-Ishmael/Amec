<?php

// check if we got posts to display:
if (have_posts()) :

    while (have_posts()) : the_post();
        ?>


        <?php
//                echo '<header class="entry-content-header">';

        $thumb = get_the_post_thumbnail(get_the_ID(), $avia_config['size']);


        if ($thumb) echo "<div class='page-thumb'>{$thumb}</div>";
        echo '</header>';

        //display the actual post content
        /*                echo '<div class="entry-content" '.avia_markup_helper(array('context' => 'entry_content','echo'=>false)).'>';
                        the_content(__('Read more','avia_framework').'<span class="more-link-arrow">  &rarr;</span>');
                        echo '</div>';*/
        get_template_part("includes/amec", "aif");

        echo '<footer class="entry-footer">';
        wp_link_pages(array('before' => '<div class="pagination_split_post">',
            'after' => '</div>',
            'pagelink' => '<span>%</span>'
        ));
        echo '</footer>';

        ?>
        <!--
            Hidden element that should contain string of JSON page copy to be retrieved by JS
            Faster than an AJAX call at load time.

            The js will revert to default English copy if post_content not parsed correctly
        -->
        <script id="aif-copy" type="application/json" style="display: none">

            <?php
            //N.B> Content will be json so deliberately not using the_content()
            global $post;
            echo $post->post_content
            ?>

        </script>

        <?php

        do_action('ava_after_content', get_the_ID(), 'page');
        ?>


        <?php
        $post_loop_count++;
    endwhile;
else:
    ?>

    <article class="entry">
        <header class="entry-content-header">
            <h1 class='post-title entry-title'><?php _e('Nothing Found', 'avia_framework'); ?></h1>
        </header>

        <?php get_template_part('includes/error404'); ?>

        <footer class="entry-footer"></footer>
    </article>

    <?php

endif;
?>
