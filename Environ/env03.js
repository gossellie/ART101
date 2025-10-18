$(document).ready(function() {
    const Miffy = {
        Breed: "Rabbit",
        age: 4,
        Sex: "female",
        Family: true,
        Friends: ["Melanie", "Aggie", "Winnie", "Snuffy", "Boris Bear", "Barbara"],
    };

    let megaSentence = "Miffy is a " + Miffy.Breed + " aged " + Miffy.age + " and has friends: " + Miffy.Friends.join(", ");
    $("#output").html(megaSentence);
});
