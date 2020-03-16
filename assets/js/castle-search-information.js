function fetchChateauInformation(event) {
    var castleName = $("#chateau-search-name").val();

    $("#castle-data-name").html(``); // empty the data that might already be there from clicking on the map
    $("#castle-data").html(``); // empty the data that might already be there from clicking on the map

    // if we don't have any castles selected!
    if (!castleName) {
        $("#castle-data-name").html(``); // empty the data that might already be there from clicking on the map
        $("#castle-data").html(`<p>No castles selected! Please search or select one from the map above.</p>`);
        return;
    }

    // have a loader to let the user know what is going on
    $("#castle-data-name").html(``); // empty the data that might already be there from clicking on the map
    $("#castle-data").html(`<div id="loader"><i class="fa fa-fort-awesome"></i> <i class="fa fa-map-marker"></i> . . .  Loading castle data . . . <i class="fa fa-globe fa-spin"></i> </div>`);

    /*
    $(document).keypress(function (event) {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {// enter is pressed
            $.when(
                console.log(castleName)
            ).then(
                console.log('testing that enter has been pressed')
                // function to display the one map with the one marker, zoomed in, with all the data underneath!
                // need to make sure that it loads nearby in case of just a location, but set radius low!
            )
        }
    }
    );*/

    // can just do it with a search box!
    

}
