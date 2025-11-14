$("#add-creature").click(function () {

    let crName = $("#crName").val();
    let crColor = $("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();
    let crWings = $("#crWings").is(":checked");  // NEW

    let crEyesHTML = "";
    for (let i = 0; i < crEyesNum; i++) {
        crEyesHTML += "<div class='eye'></div>";
    }



    if (crName === "" || crName.length > 12) {
        return; // invalid name
    }

    $("#creature-list").append(`
        <div class="creature">
            <div class="creature-body" style="background: ${crColor}">
                ${wingsHTML}
                ${crEyesHTML}
                <div class="mouth"></div>
            </div>
            <div class="creature-info">${crName}</div>
        </div>
    `);

    $("#crName").val("");
});
