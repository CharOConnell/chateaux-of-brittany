function initMap() {
  // Create a map centered in Brittany.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.000, lng: -3.000},
    zoom: 7.5
  });

  // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);
      

}
// Loop through the results array and place a marker for each
      // set of coordinates.
      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }
    }

function getNearbyPlaces(position) {
    let request = {
    location: position,
    radius: 50000,
    // rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: 'chateau'
    };

    service = new google.maps.places.PlacesService(map);
    console.log(service);
    service.nearbySearch(request, nearbyCallback);
}

// Handle the results (up to 20) of the Nearby Search
function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    createMarkers(results);
    }
}

/* TODO: Step 3C, Generate markers for search results */
// Set markers at the location of each place result
function createMarkers(places) {
    places.forEach(place => {
    let marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name
        });
    });
}