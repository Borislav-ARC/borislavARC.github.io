(function() {

    // FadeIn Presentation
    setTimeout(function() {
        document.querySelector('.presentation').classList.add('show');
    }, 300);


    // Add Events on Images
    var items = document.querySelectorAll('.item');

    for(var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', clickItem);
        items[i].addEventListener('mouseover', hoverItem);
        items[i].addEventListener('mouseout', mouseOutItem);
    }

    // Click on Item
    function clickItem(){
        this.parentNode.parentNode.classList.toggle('next');
    }

    // Hover on Item
    function hoverItem() {
        console.log('1');
        this.classList.add('hover')
    }

    // Mouse out from Item
    function mouseOutItem() {
        console.log('2');
        this.classList.remove('hover')
    }

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