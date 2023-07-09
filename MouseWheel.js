$(document).ready(function() {
    var owl1 = $('#carousel1');
    owl1.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    var owl2 = $('#carousel2');
    owl2.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    var owl3 = $('#carousel3');
    owl3.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    var owl4 = $('#carousel4');
    owl4.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    owl1.on('mousewheel', '.owl-stage', function (e) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            owl1.trigger('prev.owl');
        } else {
            owl1.trigger('next.owl');
        }
        e.preventDefault();
    });

    owl2.on('mousewheel', '.owl-stage', function (e) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            owl2.trigger('prev.owl');
        } else {
            owl2.trigger('next.owl');
        }
        e.preventDefault();
    });

    owl3.on('mousewheel', '.owl-stage', function (e) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            owl3.trigger('prev.owl');
        } else {
            owl3.trigger('next.owl');
        }
        e.preventDefault();
    });

    owl4.on('mousewheel', '.owl-stage', function (e) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            owl4.trigger('prev.owl');
        } else {
            owl4.trigger('next.owl');
        }
        e.preventDefault();
    });
});