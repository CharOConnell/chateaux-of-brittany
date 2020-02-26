function fetchChateauInformation(event) {

    var castleName = $("chateau-search-name").val();
    // if we don't have any castles selected!
    if (!castleName) {
        $("#data").html(`<p>No castles selected! Please search or select one from the map above.</p>`);
        return;
    } 
    // IT IS SHOWING UP WITH THIS WHEN YOU ARE TYPING WHICH IS NOT RIGHT!
    
    // have a loader - not working :(
    // $("#data").html(`<div id="loader> Loading ... <i class="fa fa-fort-awesome fa-xs fa-spin"></i> </div>`);

    $.when(
        // we have a name entered - maybe when the enter key is pushed?
    ).then (
        // function to display the one map with the one marker, zoomed in, with all the data underneath!
        // need to make sure that it loads nearby in case of just a location, but set radius low!
    )
}