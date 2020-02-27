


function fetchChateauInformation(event) {

    var castleName = $("#chateau-search-name").val();

    $("#castle-data").html(``); // empty the data that might already be there from clicking on the map

    // if we don't have any castles selected!
    if (!castleName) {
        $("#castle-data").html(`<p>No castles selected! Please search or select one from the map above.</p>`);
        return;
    }

    // have a loader to let the user know what is going on
    $("#castle-data").html(`<div id="loader"><i class="fa fa-fort-awesome"></i> <i class="fa fa-map-o"></i> <i class="fa fa-map-marker"></i> <i class="fa fa-globe"></i> <i class="fa fa-crosshairs"></i> <i class="fa fa-flag"></i> <i class="fa fa-location-arrow"></i>  . . .  loading castle data . . . <i class="fa fa-cog fa-spin"></i> <i class="fa fa-fort-awesome fa-spin"></i> </div>`);

    $(document).keypress(function (event) {
        let keycode = (event.keyCode ? event.keyCode : event.which);

        if (keycode === 13) { // if enter is pressed - we want to search!
            console.log('you have pressed enter!')
            var castleNameTest = $("#chateau-search-name").val();
            console.log('your castle name entered is '+castleNameTest);
            $.when(
                // we have a name entered - get a response from nearby search
            ).then(


                // function to display the one map with the one marker, zoomed in, with all the data underneath!
                // need to make sure that it loads nearby in case of just a location, but set radius low!
            )
}
    });

}
