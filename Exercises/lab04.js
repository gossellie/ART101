$(function() {
    const myComics = ["Impulse", "Batman", "GreenLantern", "Azreal", "Steel", "Nightwing"];

    const myFavoriteComics = {
        type: "Impulse",
        age: 16,
        Team: "Young Justice",
        FlashFamily: true,
        Friends: ["Robin", "WonderGirl", "Superboy"],
    };

    let megaSentence = "<p>My top two DC superheroes are: " + myComics[0] + ", " + myComics[5] + "</p>";
    megaSentence += "<p>My favourite Superhero is: " + myFavoriteComics.type + ", He is " + myFavoriteComics.age + ", The team he is on is " + myFavoriteComics.Team + "</p>";
    

    $("#output").html(megaSentence);
});