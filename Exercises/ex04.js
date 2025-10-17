let count = -1;
let colors= ["Orchid","Coral","HotPink", "Plum"];
let reminder=count % colors.length;
// add a button titled click me
$("#needy-button").click(function () {
    count = count + 1;

    

    $("#needy-button").html(" clicks: " + count + " color: " + colors[count]);

$("body").css("background-color",colors[count]);


});



// when it is clicked 
// add one to the total number
//shoe the total number
//on our button
// show "clicked total number times"


// a top limit 