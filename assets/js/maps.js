function initMap() {
  // Create a map centered in Brittany.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.000, lng: -3.000},
    zoom: 7.5
  });
  
  var request = {
    location: {lat: 48.000, lng: -3.000},
    radius: 99999, 
    keyword: 'chateau',
    fields: ['name','geometry','photos','rating','opening_hours']
    };

    service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function(results,status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i=0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }// put in that if it doesn't receive a result, what to do!
    })
}

// NEED TO ADD IN A THING WHERE IF YOU ZOOM, IT REPOPULATES THE NEARBY CASTLES!

function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        $("#castle-data").html(`<h4>${place.name}</h4>
        <p>This castle is rated with ${place.rating} stars from previous visitors.</p>`)
        // need to add in the photos!
        // do we need to rearrange the map to centre this?
    });
}
