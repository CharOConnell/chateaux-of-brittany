/*function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7.5,
        center: {
            lat: 48.000000,
            lng: -3.000000
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];

    // the following is a built in js map method rather than the google one we're working with
    // it works similarly to the forEach function but this returns an array, can take up to three arguments
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length] // % used to loop for more than 26 locations
        });
    });

    // sample code for marker image
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
*/
var map;

// https://www.google.com/maps/search/castles/@47.8895699,-3.6584495,8.19z/data=!4m2!2m1!6e1?hl=en

// THIS WORKS!
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=castles&inputtype=textquery&fields=formatted_address,name,geometry&key=YOUR_API_KEY
// MULTIPLE ONES:
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48%2C-3&radius=50000&keyword=chateau&key=YOUR_API_KEY


function initMap() {
  // Create a map centered in Pyrmont, Sydney (Australia).
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.000, lng: -3.000},
    zoom: 7.5
  });

  // Search for Google's office in Australia.
  var request = {
    location: map.getCenter(),
    query: 'castles'
  };

  var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var marker = new google.maps.Marker({
      map: map,
      place: {
        placeId: results[0].place_id,
        location: results[0].geometry.location
      }
    });
  }
}
/*
google.maps.event.addDomListener(window, 'load', initialize);

function createPhotoMarker(place) {
  var photos = place.photos;
  if (!photos) {
    return;
  }

  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name,
    icon: photos[0].getUrl({maxWidth: 35, maxHeight: 35})
  });
}
*/




