jQuery(document).ready(function() {

    // Add an OhioLINK link to the top of the page
    $("#topbar").find(".link").prepend('<a id="ohiolink_search" href="#">Search OhioLINK books</a>');

    // Build the OhioLINK search URL
    $('a#ohiolink_search').click(function() {
        var parameters = window.location.search.slice(1);
        var array = parameters.split("&");

        var values, form_data = {};

        for (var i = 0; i < array.length; i += 1) {
            values = array[i].split("=");
            form_data[values[0]] = values[1];
        }

        var searchterm = form_data['s.q'];
        window.location.href = 'http://olc1.ohiolink.edu/search/X?SEARCH=' + searchterm;
    });

});
