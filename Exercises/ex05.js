var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

function makeImage(imageName) {
  // append an image matching the given name (if the image exists)
  if (imageName) {
    $("body").append("<img width=50 src='images/" + imageName + ".png''" + imageName + "'>");
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

  // append an image that matches the current color name (if available)
  makeImage(currentColor);
});

// handler for any color-button elements (assumes they have id equal to a color name)
$(".color-button").click(function () {
  changeBackground(this.id);
});
