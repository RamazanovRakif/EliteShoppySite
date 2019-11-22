$(document).ready(function() {
    $("#rangeSlider").slider ({
            range: true,
            min: 0,
            max: 9000,
            values: [1000, 7000],
        slide: function(event, ui) {
        $("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#priceRange").val("$" + $("#rangeSlider").slider("values", 0) + " - $" + $("#rangeSlider").slider("values", 1));
    });