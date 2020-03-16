function fetchNewCastle() {
    var castleName = $("#chateau-search-name").val(); // collect the final search name for the castle

    $("#castle-data-name").html(``); // empty the data that might already be there from clicking on the map
    $("#castle-data").html(``); // empty the data that might already be there from clicking on the map

    console.log(castleName)

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
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);
            }
            console.log(results) // need to have an option if it doesn't find anything! Just to show it works for now
        }
    }
}