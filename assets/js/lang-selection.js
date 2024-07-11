function selectLanguage(language){
    $("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).show();
        else
            $(this).hide();
    });
}

selectLanguage('bg');