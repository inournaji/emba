/**
 * Created by Nour on 7/26/2017.
 */
/* LOADER */

jQuery(window).load(function () {
    jQuery(".spinner").fadeOut("slow");
});
jQuery(document).ready(function(){
    jQuery("#block-views-content-view-block-4").scroll(function() {
        jQuery('#block-views-content-view-block-4 .pager__item a').click();
    });
});

