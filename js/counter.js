var x = 0;
var interval = setInterval(function () {
    counter1.innerHTML = x;
    x++;
    if (x == 654) {
        clearInterval(interval);
    }
}, 5);
var y = 0;
var in_val = setInterval(function () {
    counter2.innerHTML = y;
    y++;
    if (y == 824) {
        clearInterval(in_val);
    }
}, 2);
var z = 0;
var intval = setInterval(function () {
    counter3.innerHTML = z;
    z++;
    if (z == 46) {
        clearInterval(intval);
    }
}, 72);