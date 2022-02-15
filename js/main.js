/* Map */

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-122.4194, 37.7749]),
        zoom: 17
    })
});

/* Smooth Scrolling */

$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate (
            {
                scrollTop: $(hash).offset().top -50
            },
            800
        );
    }
});