function fetchNewCastle() {
    var castleName = $("#chateau-search-name").val(); // collect the final search name for the castle

    $("#castle-data-name").html(``); // empty the data that might already be there from clicking on the map
    $("#castle-data").html(``); // empty the data that might already be there from clicking on the map
    $('#castle-photos').html(``);

    /*
    // Create a map centered in Brittany - refresh it to remove the markers
    */

    var request = {
        location: { lat: 48.000, lng: -3.000 },
        radius: 60000,
        query: ['chateau', castleName],
        fields: ['name', 'geometry', 'photos', 'rating', 'opening_hours']
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 48.000, lng: -3.000 },
                zoom: 7.5
            });
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);
            }
        } else {
            $("#castle-data-name").html(`<h4>No Results Found.</h4>`); // empty the data that might already be there from clicking on the map
            $("#castle-data").html(`<p>Please enter another name and try again!</p>`); // empty the data that might already 
            $('#castle-photos').html(``);
        }
    }
}

