<?php


$copy = json_decode($post->post_content, true);
$editor_settings = array('textarea_name' => 'description',
    'quicktags' => false,
    'media_buttons' => false,
    'teeny' => true,
    'tinymce' => array(
            'toolbar1' => 'undo redo | bold italic | bullist numlist outdent indent',
        'remove_linebreaks' => true,
        'content_css' => get_stylesheet_directory_uri() . '/css/aif-admin.css',


    )
);

?>

<div id="aif_translation_widget">

    <?php wp_nonce_field(plugin_basename(__FILE__), 'aif_translation_widget') ?>

    <?php foreach ($copy as $key => $value): ?>
        <div class="item">
            <h4><?= $value['description'] ?><span class="key"><?= $key ?></span></h4>

            <table>
                <tr>
                    <td>
                        <h6>English</h6>
                    </td>
                    <td>
                        <h6><label for="aif-trans-<?= $key ?>"></label></h6>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td class="item-text english">
                        <?= $value['en'] ?>
                    </td>
                    <td class="item-text translation">
                        <div class="disp"><?= $value['translation'] ?></div>
                        <div class="edit">
                            <textarea class="aif-trans-edit" id="aif-trans-<?= $key ?>" name="aif-trans-<?= $key ?>">

                                <?= $value['translation'] ?>

                            </textarea>
                        </div>
                    </td>
                    <td class="controls">
                        <input type="button" class="btn aif-admin-edit" value="edit">
                        <input type="button" class="btn aif-admin-view" value="view">
                        <input type="button" class="btn aif-admin-raw" value="html">
                        <input type="button" class="btn aif-admin-visual" value="visual">
                    </td>
                </tr>
            </table>


        </div>
    <?php endforeach; ?>
</div>