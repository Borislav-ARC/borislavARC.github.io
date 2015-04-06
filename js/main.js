(function() {

    // FadeIn Presentation
    setTimeout(function() {
        document.querySelector('.presentation').classList.add('show');
    }, 300);


    // Add Click Event on Images
    var items = document.querySelectorAll('.item');

    for(var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(){
            this.parentNode.parentNode.classList.toggle('next');
        });
    }
})();