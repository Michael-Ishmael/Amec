function changeBackgroundUrlToAbsolute(id)
{
    var elementToChange = document.getElementById(id);
    var absoluteBackgroundCSSValue = window.getComputedStyle(elementToChange, null).getPropertyValue('background-image');
    elementToChange.style.backgroundImage = absoluteBackgroundCSSValue;
}

function addRequiredPageBreaks()
{
    jQuery('.aif-p-page-break').css('page-break-after','always');
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
  }
}

function getStyles() {

    return ".background-red{background-color:#d50046}.background-dark-red{background-color:#8e002f}.background-pale-red{background-color:#ffd5e3}.background-yellow{background-color:#ff9a31}.background-dark-yellow{background-color:#e97700}.background-pale-yellow{background-color:#fff2e4}.background-green{background-color:#00c394}.background-dark-green{background-color:#007c5e}.background-pale-green{background-color:#c3fff1}.background-light_blue{background-color:#0090ff}.background-dark-light_blue{background-color:#0068b8}.background-pale-light_blue{background-color:#cce9ff}.background-dark_blue{background-color:#0072af}.background-dark-dark_blue{background-color:#004368}.background-pale-dark_blue{background-color:#afe3ff}.background-purple{background-color:#8a00b6}.background-dark-purple{background-color:#54006f}.background-pale-purple{background-color:#edb6ff}@page{size:A4;margin:0;padding:1cm;background:#fff}#printableFrameworkSummaryTable{font-family:lato,Roboto,Arial,sans-serif;font-size:14px;line-height:1.428571429;color:#fff}#printableFrameworkSummaryTable *{box-sizing:border-box}.aif-p-page-break{page-break-after:always}table{width:100%}tr.spacer-row td{height:15px}h1{color:#fffbfb;text-align:center;background-color:#b0c5d4;padding:10px;position:relative;margin-bottom:10px;font-size:1.3em}h1 .em{font-style:italic}.section-header{width:49px;background-color:gray}.section-header .label{width:49px;background-repeat:no-repeat}.section-header .label.prep{background-image:url(/images/ss-header-1.png);height:377px}.section-header .label.imp{background-image:url(/images/ss-header-2.png);height:377px}.section-header .label.mes{background-image:url(/images/ss-header-3.png);height:434px}th{text-transform:uppercase}.summary-box{height:210px;padding:10px;vertical-align:top;color:#404040;font-weight:400}.summary-box.half{width:50%}.summary-box.columns{-webkit-columns:300px 2;-moz-columns:300px 2;columns:300px 2}.summary-box.imp{height:330px}.summary-box.out{height:380px}";

}


function getEntireDom(title)
{
    title = title ? ' - ' + title : '';

    var pdfDOM = jQuery("html").clone();
    // var style = jQuery('#pageStyles').clone();
    pdfDOM.find("head").replaceWith($("<head></head>").append($("<title>Amec Measurement Framework' + title + '</title>")));

    var html = pdfDOM.html();
    var frameWork = pdfDOM.find("#printableFrameworkSummaryTable").clone();
    var newBody = jQuery("<body></body>").append(frameWork);

    pdfDOM.find("body").replaceWith(newBody);
    pdfDOM.find("head").append(jQuery("<style>" + getStyles() + "</style>"));
    html = pdfDOM.html();
    return pdfDOM.html();
}
//
$(document).ready(function(){
    $(document).on('click','#printableFrameworkSummaryTable',function(e){
        e.preventDefault();
       var opts = {
            document_type: 'pdf',
            document_content: getEntireDom('Nike 2016 Campaign'),
            name: 'Framework',
            javascript: false,
            test: false
        };
        downloadPDF(opts,'UmPbAOzv3fSfgTsHLZV');
    });
});



