var Slider = {
    id: '',
    nbSlides: 0,
    widthTotal: 0,
    actualPos : 0,
    init: function (id, nbSlides) {
        var self = this;
        self.id = id;
        self.nbSlides = nbSlides;
        self.widthTotal = 100 * nbSlides;


        var rollover = setInterval(function () {
            self.nextSlide();
        }, 1000);

        $('#monSliderContent').on('mouseover', function () {
            clearInterval(rollover)
        });

        $('#monSliderContent').on('mouseout', function () {
            rollover = setInterval(function () {
                self.nextSlide();
            }, 1000);
        });




    },

    nextSlide : function () {
        var self = this;
        var nextPos = '-' + (self.actualPos + 1) % self.nbSlides * 100 + '%';
        self.actualPos += 1;
        $('#monSliderContent').css('left', nextPos);
    }


}


Slider.init('slide', 4);
console.log(Slider);