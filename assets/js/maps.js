function initMap() {
    // Create a map centered in Brittany.
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.000, lng: -3.000 },
        zoom: 7.5
    });

    // search for chateau within a radius of the centre of Brittany
    var request = {
        location: { lat: 48.000, lng: -3.000 },
        radius: '99999',
        keyword: 'chateau',
        fields: ['name', 'geometry', 'photos', 'rating', 'opening_hours']
    };

    service = new google.maps.places.PlacesService(map);

    // create markers for the initial map
    service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    })
}

function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    // set up the info fields when the markers are clicked
    google.maps.event.addListener(marker, 'click', function () {
        $("#loading-data").html(``) // clear any messages put in from textbox searches
        $("#castle-data-name").html(`<h4>${place.name}</h4>`)
        if (place.rating == undefined) {
            $("#castle-data").html(`<p>This castle has not been rated by previous visitors.</p>`)
        } else {
            $("#castle-data").html(`<p>This castle is rated with <strong>${place.rating} stars</strong> from <strong>${place.user_ratings_total} previous visitors</strong>.</p>`)
        }

        // output the resulted photos from the Google Maps API search
        var photos = place.photos;
        if (!photos) {
            $("#castle-photos").html(`<p class="text-centre">No images found.</p>`)
            return;
        } 
        
        // if there are no photos found option
        $("#castle-photos").html(`<img src="${photos[0].getUrl()}" alt="Chateau du Fontaine-Henry" class="img-thumbnail img-fluid">`)
    });
}
