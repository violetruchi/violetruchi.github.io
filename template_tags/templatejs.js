$(document).ready(function(){
    var script_path = $("#templatejs").attr('src');
    var footer_path = script_path.replace("templatejs.js", "footer.html");
    $('#footer').load(footer_path);
});
if($(".loading").length){
    $('head').append('<link rel="stylesheet" type="text/css" href="template_tags/loader_style.css">');
    $(window).on('load', function() {
        $(".loading").delay(1500).fadeOut(1800);
    });
    setTimeout(function () {
         $(".loading").delay(1500).fadeOut(1800);
    }, 7500);
}

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});