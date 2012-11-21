function quickFilter(inputid, tableid, child) {
    child = typeof child !== 'undefined' ? child : 1;
    $('table#'+tableid).append("<div id=\"noresults\">There are no Results</div>");
    $('#noresults').hide();
    $('#'+inputid).bind('keyup', function(){
        var searchlen = ($(this).val()).length;
        var searchstr = ($(this).val()).toUpperCase();
        $.each($('table#'+tableid+' tbody tr'), function(){
           $(this).css('display','table-row');
        }); 
        $.each($('table#'+tableid+' tbody tr td:nth-child('+child+')'), function(){
            var inputvalue = $(this).text().toUpperCase();
            var pos = (inputvalue).indexOf(searchstr.toUpperCase());              
            if (pos != "-1") {
                var mainString = $(this).text(); 
                var arr = mainString.substring(pos,searchlen); 
                var len = arr.length;
                var finalString="";
                if (pos != 0) {
                    finalString = mainString.substring(0, pos);
                }
                finalString += '<span style="background-color: yellow;">'+searchstr.toUpperCase()+'</span>';
                finalString += mainString.substring(pos+searchlen, mainString.length);
                $(this).html(finalString);
            } else {
                $(this).parents('table#'+tableid+' tbody tr:first').css('display','none');
            }
        });
        var count = $('table#'+tableid+' tbody tr:visible').length;
        if (count == 0) {
            $('#noresults').show();
        } else {
            $("#noresults").hide();
        }
    });
}