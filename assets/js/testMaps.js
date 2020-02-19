function initMap() {
  // Create a map centered in Brittany.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.000, lng: -3.000},
    zoom: 7.5
  });

}

function getNearbyPlaces(position) {
      let request = {
    location: position,
    rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: 'chateau'
    };

    service = new google.maps.places.PlacesService(map);
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