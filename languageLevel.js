$( ".language" ).hover(function(e) {

    var percent, level, language;
    percent = "100%";

    console.log($(this).find("p").text());

    if($(this).is("#en")){
        percent = "75%";
        level = "<b>B2</b>";
        language = "English";
    }else if($(this).is("#deu")){
        percent = "40%";
        level = "<b>A2</b>";
        language = "German";
    }else{
        level = "<b>Native</b>";
        language = "Bulgarian"
    }

    $(this).css("--language-level-percent",e.type === "mouseenter"?percent:"100%").find("p").html(e.type === "mouseenter"?level:language).stop( true, true );
});