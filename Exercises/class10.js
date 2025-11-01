var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

function makeImage(imageName) {
  // append an image matching the given name (if the image exists)
  if (imageName) {
    $("body").append("<img width='50' src='images/" + imageName + ".png' alt='" + imageName + "'>");
  }
}

function changeBackground(newColor) {
  $("body").css("background-color", newColor);
}

// click handler for the main button
$("#needy-button").click(function () {
  // increment counters
  count = count + 1;
  colorCount = (colorCount + 1) % colors.length;

  // determine mood based on count
  let mood;
  if (count < 5) {
    mood = "fresh and happy";
  } else if (count < 10) {
    mood = "keep pushing";
  } else {
    mood = "so tired";
  }

  const currentColor = colors[colorCount];
  $("#needy-button").html("Clicks: " + count + " Color: " + currentColor + " " + mood);
  changeBackground(currentColor);


  makeImage(currentColor);
});


$(".color-button").click(function () {
  
  if (this.id === "Awesome") {

    $("button").not(this).toggle();
    return;
  }
  changeBackground(this.id);
});
