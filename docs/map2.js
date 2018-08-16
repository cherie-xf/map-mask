//window.addEventListener('load', function() {
function initMap() {
    var nightStyle = null;
        var markerImg = {
            url: './images/marker1.png',
            scaledSize: new google.maps.Size(40, 40),
        };

        var features = data.map(d => {
            return Object.assign({ position: new google.maps.LatLng(d.lat, d.lng) }, d);
        })
        var bMarkers = [];
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: features[0].position,
            styles: nightStyle,
        });
        var newBoundary = new google.maps.LatLngBounds();
        // Create markers.
        var markers = features.map(f => {
            newBoundary.extend(f.position);
            return new google.maps.Marker({
                position: f.position,
                label: f.label,
                icon: markerImg,
                map: map
            });
        });
        var markerCluster = new MarkerClusterer(map, markers,
            {
                //  styles: styles, 
                imagePath: "./images/m"
            });
        // var graphCluster = new GraphCluster(map, markers, null);
        setTimeout(function () {
            map.fitBounds(newBoundary);
        }, 500);

}
//  });
