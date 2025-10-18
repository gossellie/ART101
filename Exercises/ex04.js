let count = -1;
let colors= ["Orchid","Coral","HotPink", "Plum"];

// add a button titled click me
$("#needy-button").click(function () {
    count = count + 1;

    let reminder=count % colors.length;

    $("#needy-button").html(" clicks: " + count + " color: " + colors[count]);

$("body").css("background-color",colors[reminder]);


});



// when it is clicked 
// add one to the total number
//shoe the total number
//on our button
// show "clicked total number times"


// a top limit 