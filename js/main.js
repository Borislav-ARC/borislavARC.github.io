(function($) {

    // Lazyload images
    $("img").lazy({
        delay: 500,
        effect: 'fadeIn',
        effectTime: 500
    });


    // Slide arrows
    $('.item-arrow').click(function(){
        var parent = $(this).parents('.item');
        var current = parent.find('.slide.active');
        var next = current.next();
        var prev = current.prev();

        if($(this).hasClass('slide-left')) {
            if(prev.length) {
                current.removeClass('active');
                prev.addClass('active');

            } else {
                current.removeClass('active');
                parent.find('.slide').last().addClass('active')
            }

        } else {
            if(next.length) {
                current.removeClass('active');
                next.addClass('active');
            } else {
                current.removeClass('active');
                parent.find('.slide').first().addClass('active');
            }
        }
    });


    // Filter menu
    $('.filter-link').click(function() {
        var $this = $(this);
        var item = $('.item');
        var cat;

        if($this.hasClass('active')) { return }

        $('.filter-link.active').removeClass('active');
        $this.addClass('active');
        cat = $this.data('cat').toString();
        item.removeClass('show');

        if(cat == 'all') {
            item.removeClass('hide').addClass('show')
        } else {
            item.each(function() {
                var thisData = $(this).data('cat').toString();

                if(thisData.indexOf(cat) > -1 ) {
                    $(this).removeClass('hide').addClass('show');
                } else {
                    $(this).addClass('hide');
                }
            });
        }
    });
    $('.item').addClass('show');


    // Popap for image
    $(".image-preview").fancybox({
        openEffect	: 'elastic',
        closeEffect	: 'elastic',
        padding: 0
    });


    // Popap for video
    $(".video-preview").click(function() {
        $.fancybox({
            openEffect	: 'elastic',
            closeEffect	: 'elastic',
            padding		: 0,
            autoScale	: false,
            width		: 740,
            height		: 480,
            href		: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            type		: 'swf',
            swf			: {
                'wmode'				: 'transparent',
                'allowfullscreen'	: 'true'
            }
        });
        return false;
    });

})(jQuery);
