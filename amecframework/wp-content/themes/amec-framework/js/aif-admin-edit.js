
jQuery(document).ready(

    function($){


        tinyMCE.init(
            {
                "selector": ".aif-trans-edit",
                "theme": "modern",
                "skin": "lightgray",
                "language": "en",
                "browser_spellcheck": true,
                "fix_list_elements": true,
                "entities": "38,amp,60,lt,62,gt",
                "entity_encoding": "raw",
                "keep_styles": false,
                "preview_styles": "font-family font-size font-weight font-style text-decoration text-transform",
                "end_container_on_empty_block": true,
                "wpeditimage_disable_captions": false,
                "wpeditimage_html5_captions": false,
                "plugins": "colorpicker,lists,fullscreen,image,wordpress,wpeditimage,wplink",
                "wp_lang_attr": "en-US",
                "wp_shortcut_labels": {
                    "Heading 1": "access1",
                    "Heading 2": "access2",
                    "Heading 3": "access3",
                    "Heading 4": "access4",
                    "Heading 5": "access5",
                    "Heading 6": "access6",
                    "Paragraph": "access7",
                    "Blockquote": "accessQ",
                    "Underline": "metaU",
                    "Strikethrough": "accessD",
                    "Bold": "metaB",
                    "Italic": "metaI",
                    "Code": "accessX",
                    "Align center": "accessC",
                    "Align right": "accessR",
                    "Align left": "accessL",
                    "Justify": "accessJ",
                    "Cut": "metaX",
                    "Copy": "metaC",
                    "Paste": "metaV",
                    "Select all": "metaA",
                    "Undo": "metaZ",
                    "Redo": "metaY",
                    "Bullet list": "accessU",
                    "Numbered list": "accessO",
                    "Insert/edit image": "accessM",
                    "Insert/edit link": "metaK",
                    "Remove link": "accessS",
                    "Toolbar Toggle": "accessZ",
                    "Insert Read More tag": "accessT",
                    "Insert Page Break tag": "accessP",
                    "Distraction-free writing mode": "accessW",
                    "Keyboard Shortcuts": "accessH"
                },
                "content_css": "http://localhost:8888/wp-content/themes/amec-framework/css/aif-admin.css",
                "resize": "vertical",
                "menubar": false,
                "wpautop": false,
                "indent": false,
                "toolbar1": "undo redo | bold italic | bullist numlist outdent indent",
                "toolbar2": "",
                "toolbar3": "",
                "toolbar4": "",
                "tabfocus_elements": ":prev,:next",
                "body_class": "aif-trans-S1_I1_H post-type-aif_page_copy post-status-publish page-template-default locale-en-us",
                "remove_linebreaks": true,
                forced_root_block : ""
            }

        );




        $( '#post' ).submit( function( e ) {
            tinyMCE.triggerSave();
            return true;
        } );


        $('#aif_translation_widget').find('.aif-admin-edit').click(function(e){

            var cont = $(e.target).closest('tr'); //.find('.translation');
            cont.find('.disp').hide();
            cont.find('.edit').show();
            cont.find('.aif-admin-edit').hide();
            cont.find('.aif-admin-visual').hide();
            cont.find('.aif-admin-view').show();
            cont.find('.aif-admin-raw').show();
        });

        $('#aif_translation_widget').find('.aif-admin-view').click(function(e){

            var cont = $(e.target).closest('tr');

            var editorId = cont.find('textarea').attr('id');

            if(editorId){
                var content = tinyMCE.editors[editorId].getContent();
                tinyMCE.triggerSave();
            }


            cont.find('.disp').html(content).show();
            cont.find('.edit').hide();
            cont.find('.aif-admin-edit').show();
            cont.find('.aif-admin-view').hide();
            cont.find('.aif-admin-visual').hide();
            cont.find('.aif-admin-raw').hide();

        });

        $('#aif_translation_widget').find('.aif-admin-raw').click(function(e){

            var cont = $(e.target).closest('tr');
            cont.find('.aif-admin-raw').hide();
            cont.find('.aif-admin-visual').show();

            var editorId = cont.find('textarea').attr('id');

            if(editorId){
                tinyMCE.triggerSave();
                tinyMCE.editors[editorId].hide();
            }


        });

        $('#aif_translation_widget').find('.aif-admin-visual').click(function(e){

            var cont = $(e.target).closest('tr');
            cont.find('.aif-admin-visual').hide();
            cont.find('.aif-admin-raw').show();

            var editorId = cont.find('textarea').attr('id');

            if(editorId){
                tinyMCE.editors[editorId].show();
            }

        });

    }

);


function textarea_to_tinymce(id){
    if ( typeof( tinyMCE ) === "object" && typeof( tinyMCE.execCommand ) === "function" ) {
        tinyMCE.execCommand("mceAddEditor", false, id);
        tinyMCE.execCommand('mceAddControl', false, id);
    }

    // tinymce.init({
    //     selector: id,
    //     height: 200,
    //     menubar: false
    //     // plugins: [
    //     //     'advlist autolink lists link image charmap print preview anchor',
    //     //     'searchreplace visualblocks code fullscreen',
    //     //     'insertdatetime media table contextmenu paste code'
    //     // ],
    //     // toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    //     // content_css: [
    //     //     '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    //     //     '//www.tinymce.com/css/codepen.min.css']
    // });

}