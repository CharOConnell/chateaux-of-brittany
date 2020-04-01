function searchCastles() {
    castleName = $("#chateau-search-name").val();
    castleLength = castleName.length

    if (castleLength == 0) {
        emptyData()
        $("#castle-data-name").html(`<h4>No Results Found.</h4>`); // display no results found
        $("#loading-data").html(`<p>Please enter another name and try again!</p>`);
        initialMap()

    } else if ((castleLength > 0) && (castleLength <= 2)) {
        emptyData()
        $("#loading-data").html(`<p>Please keep entering a name...</p>`);

    } else {
        emptyData()
        newCastleSearch()
    }
}

function emptyData() {
    $("#castle-data-name").html(``); // empty the data that might already be there from clicking on the map
    $("#castle-data").html(``);
    $('#castle-photos').html(``);
    $('#loading-data').html(``);
}

function initialMap() {
    // Put the intial map on display
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.000, lng: -3.000 },
        zoom: 7.5
    });

    // search for chateau within a radius of the centre of Brittany
    var request = {
        location: { lat: 48.000, lng: -3.000 },
        radius: 80000,
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

function newCastleSearch() {
    // search for anything typed into the search box accompagnied with "chateau" to force the results
    var request = {
        location: { lat: 48.000, lng: -3.000 },
        radius: 20000,
        query: ['chateau', castleName],
        fields: ['name', 'geometry', 'photos', 'rating']
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) { // refresh map to remove old markers
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 48.000, lng: -3.000 },
                zoom: 7.5
            });
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);
            }
            if (results.length == 0) { // if no results found, display no results to user
                $("#castle-data-name").html(`<h4>No Results Found.</h4>`);
                $("#castle-data").html(`<p>Please enter another name and try again!</p>`);
            }
        }
    }
}
