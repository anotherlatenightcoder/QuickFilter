jQuery(document).ready(function(){
    jQuery('input#quickfilter').bind('keyup', function(){
       var searchlen = (jQuery(this).val()).length;
       var searchstr = (jQuery(this).val()).toUpperCase();
       jQuery.each(jQuery('table#filter tbody tr'), function(){
           jQuery(this).css('display','table-row');
       }); 
       jQuery.each(jQuery('table#filter tbody tr td#col'), function(){
           var inputvalue = jQuery(this).text().toUpperCase();
           var pos = (inputvalue).indexOf(searchstr.toUpperCase());              
           if (pos != "-1") {
                var mainString = jQuery(this).text(); 
                var arr = mainString.substring(pos,searchlen); 
                var len = arr.length;
                var finalString="";
                if (pos != 0) {
                    finalString = mainString.substring(0, pos);
                }
                finalString += '<span style="background-color: yellow;">'+searchstr.toUpperCase()+'</span>';
                finalString += mainString.substring(pos+searchlen, mainString.length);
                jQuery(this).html(finalString);
           } else {
               jQuery(this).parents('table#filter tbody tr:first').css('display','none');
           }
       });
    });
});