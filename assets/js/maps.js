function initMap() {
    // Create a map centered in Brittany.
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.000, lng: -3.000 },
        zoom: 7.5
    });

    // add the bounds here, so we can scroll around the map and it auto-loads with the bounds.
    // Then the radius can be set automatically from here

    var request = {
        location: { lat: 48.000, lng: -3.000 },
        radius: 99999,
        keyword: 'chateau',
        fields: ['name', 'geometry', 'photos', 'rating', 'opening_hours']
    };

    service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
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
    google.maps.event.addListener(marker, 'click', function () {
        console.log(place.place_id);
        $("#castle-data-name").html(`<h4>${place.name}</h4>`)
        $("#castle-data").html(`<p>This castle is rated with ${place.rating} stars from ${place.user_ratings_total} previous visitors.</p>`)
        // need to add in the photos!


        var photos = place.photos;
        if (!photos) {
            $("#castle-photos").html(`<p class="text-centre">No images found.</p>`)
            return;
        }
        console.log(photos[0].getUrl())
        $("#castle-photos").html(`<img src="${photos[0].getUrl()}" alt="Chateau du Fontaine-Henry" class="img-thumbnail img-fluid">`)
        // do we need to rearrange the map to centre this? - No, only on the searched singular items
    });
}
