<?php


$copy = json_decode( $post->post_content, true );
if($copy == null){

    ?>
    <div id="aif_translation_widget">
        <p>Unable to pass page json. JSON Dump:</p>
        <div class="raw-json-edit item">

            <input type="button" class="btn aif-admin-edit-json" value="edit raw json">
            <input type="button" class="btn aif-admin-hide-json" value="hide">
            <input type="button" class="btn aif-admin-save-json" value="save">
            <span class="aif-raw-json-save-rem">You will also need to press update to save your changes.
            This will ignore any edits above - <a id="aif-raw-json-cancel">Cancel</a>
        </span>
            <br>
            <br>
            <textarea class="aif-raw-json-text" name="aif-raw-json">

             <?= $post->post_content ?>

        </textarea>

            <input id="aif-save-raw-json" name="aif-save-raw-json" type="hidden" value="false">


        </div>
    </div>
    <?php

    exit();
}
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
                        <h6><label for="aif-trans-<?= $key ?>">Translation</label></h6>
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

    <div class="raw-json-edit item">

        <input type="button" class="btn aif-admin-edit-json" value="edit raw json">
        <input type="button" class="btn aif-admin-hide-json" value="hide">
        <input type="button" class="btn aif-admin-save-json" value="save">
        <span class="aif-raw-json-save-rem">You will also need to press update to save your changes.
            This will ignore any edits above - <a id="aif-raw-json-cancel">Cancel</a>
        </span>
        <br>
        <br>
        <textarea class="aif-raw-json-text" name="aif-raw-json">

             <?= $post->post_content ?>

        </textarea>

        <input id="aif-save-raw-json" name="aif-save-raw-json" type="hidden" value="false">


    </div>

</div>