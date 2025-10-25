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

    

    let onQward = false;
    function simpleToggle(primaryBg, altBg, hideImages) {
        if (!onQward) {
            // switching to the Qward background
            $('body').css('background-image', "url('" + altBg + "')");
            if (hideImages) {
                $('#speech, #ah').hide();
                $('#sinestro').show();
            }
        } else {
            // switching back to the primary background
            $('body').css('background-image', "url('" + primaryBg + "')");
            if (hideImages) {
                $('#speech, #ah').show();
                $('#sinestro').hide();
            }
        }
        onQward = !onQward;
    }


    $('#toggle-env').click(function() {
        simpleToggle('OA.jpg', 'qward.jpg', true);
    });
});
