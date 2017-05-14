function changeBackgroundUrlToAbsolute(id)
{
    var elementToChange = document.getElementById(id);
    var absoluteBackgroundCSSValue = window.getComputedStyle(elementToChange, null).getPropertyValue('background-image');
    elementToChange.style.backgroundImage = absoluteBackgroundCSSValue;
}

function addRequiredPageBreaks()
{
    jQuery('#Stage_Questions-Timeline_results_level_bg').css('page-break-after','always');
}

function downloadPDF(data, user_credentials){
  url = 'http://docraptor.com/docs';
  //url and data options required
  if( url && data ){
    jQuery('<form target="_top" style="display:none" id="dr_submission" action="' + url
           + '" method="post">'
           + '</form>').appendTo('body');
    //credentials
    jQuery('form#dr_submission').append('<textarea name="user_credentials"></textarea>');
    jQuery('form#dr_submission textarea[name=user_credentials]').val(user_credentials);

    //doc values
    for(var key in data) {
      if(key == "prince_options"){
        for(var prince_key in data.prince_options){
          jQuery('form#dr_submission').append('<textarea name="doc[prince_options]['+prince_key+']"></textarea>');
          jQuery('form#dr_submission textarea[name="doc[prince_options]['+prince_key+']"]').val(data.prince_options[prince_key]);
        }
      } else {
        jQuery('form#dr_submission').append('<textarea name="doc['+key+']"></textarea>');
        jQuery('form#dr_submission textarea[name="doc['+key+']"]').val(data[key]);
      }
    }

    //submit the form
    jQuery('form#dr_submission').submit().remove();
  };
};

function getEntireDom()
{
    var pdfDOM = jQuery("html").clone();

    var frameWork = pdfDOM.find("#frameworkSummary").clone();
    var newBody = jQuery("<body></body>").append(frameWork);
    var css = pdfDOM.find("#pageCSS").html();

    pdfDOM.find("body").replaceWith(newBody);
    pdfDOM.find("head").append("<style>" + css + "</style>")
    ;
    return pdfDOM.html();
}
//
// $(document).ready(function(){
//     $(document).on('click','#Stage_download-pdf-1',function(e){
//       //console.log('click event');
//         e.preventDefault();
//        var opts = {
//             document_type: 'pdf',
//             document_content: getEntireDom(),
//             name: 'Framework',
//             javascript: false,
//             test: false
//         };
//         downloadPDF(opts,'UmPbAOzv3fSfgTsHLZV');
//     });
// });



