(function() {

    // Set height for main content
    function setHeight() {
        var content = $('.content-main');
        if($(window).width() >= 960 ) {
            content.height( $('html').height() - $('.content-top').outerHeight() - $('.content-bottom').outerHeight());
        } else {
            content.css({'height': ''})
        }
    }
    setTimeout(function() {
        setHeight();
    }, 10);


    $(window).resize(function(){
        setHeight();
    });

    // FadeIn Presentation
    setTimeout(function() {
        document.querySelector('.presentation').classList.add('show');
    }, 300);


    // Add Events on Images
    //var items = document.querySelectorAll('.item');
    //
    //for(var i = 0; i < items.length; i++) {
    //    items[i].addEventListener('mouseover', hoverItem);
    //    items[i].addEventListener('mouseout', mouseOutItem);
    //}

    // Click on Item
    if($('html').hasClass('touch')) {
        $('.item').on('tap', function () {

            var $this = $(this);
            $this.addClass('hover');

            if($this.hasClass('hover')) {
                $('.content-main').toggleClass('next');
            }

            setTimeout(function () {
                $this.removeClass('hover')
            }, 3000);


        });

        //$(document).on('tap', '.item.hover', function() {
        //
        //
        //
        //    return false;
        //})
    } else {
        $('.item').on('click', function(){
            $('.content-main').toggleClass('next');
        });

        $('.item').hover(function() {
            var $this = $(this);
            $this.addClass('hover');

            setTimeout(function() {
                $this.addClass('animate')
            }, 300);

        }, function() {
            var $this = $(this);

            $this.removeClass('hover');

            setTimeout(function() {
                $this.removeClass('animate')
            }, 500);

            //setTimeout(function() {
            //    $this.removeClass('hover')
            //}, 500);
        })
    }

    // Hover on Item


    // Mouse out from Item


    // Check IE or old browsers for css property - transform: preserve3d
    Modernizr.addTest('csstransformspreserve3d', function () {
        var prop, val, cssText, ret;

        prop = 'transform-style';
        if ('webkitTransformStyle' in document.documentElement.style) {
            prop = '-webkit-' + prop;
        }
        val = 'preserve-3d';
        cssText = '#modernizr { ' + prop + ': ' + val + '; }';

        Modernizr.testStyles(cssText, function (el, rule) {
            ret = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
        });

        return (ret === val);
    });
})();