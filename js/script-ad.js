$(document).ready(function(){

    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var infoHeight = $('#info').height();
    var infoWidth = $('#info').width();

    $('#wrapper').css({
        width: viewportWidth,
        height: viewportHeight,
    });

    $('#infoWrapper').css({
        width: viewportWidth,
        height: viewportHeight,
    });

    $('#legend').hide();

    $('#legendHeaderMin').click(
        function(){
            $(this).css({
                display:'none',
            });
            $('#legend').toggle(100);
        }
    );

    $('#legendHeaderMax').click(
        function(){
            $('#legendHeaderMin').css({
                display:'block',
            });
            $('#legend').toggle(100);
        }
    );

    // $('#map-canvas').css({
    //     width: viewportWidth,
    //     height: viewportHeight,
    //     zIndex:30,
    // });

    $('#info').css({
        left:(viewportWidth-infoWidth)/2,
    });

    $('#info').delay(1200).animate({
        top:120,
        opacity:1,
    },300);

    $('#infoClose, #exploreButton').click(
        function(){
            $('#info').animate({
                top:-350,
                opacity:0,
            },300);
            $('#infoWrapper').delay(400).animate({
                opacity:0,
                zIndex:70,
            },300);
        }
    );

    // $('#marker').hover(
    //     function(){
    //         $('#trackHoverCard').css({
    //             display:'block',
    //         });
    //         $('#trackHoverCard').filter(':not(:animated)').animate({
    //             opacity:1,
    //         },100);
    //     },
    //     function() {
    //         $('#trackHoverCard').animate({
    //             opacity:0,
    //         },100);
    //         $('#trackHoverCard').css({
    //             display:'none',
    //         });
    //     }
    // );



    $("#trackHoverMetro").on("click", "#trackHoverChart", 
        function(){
            $('#videoPlayer').css({
                display:'none',
            });
            $('#videoPlayer').filter(':not(:animated)').animate({
                opacity:0,
            },100);
        }
    );

    $('#modalClose').click(
        function() {
            $('#metroChartModal').animate({
                opacity:0,
            },100);
            $('#metroChartModal').css({
                display:'none',
            });
        }
    );

});


