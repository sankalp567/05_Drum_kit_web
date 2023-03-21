
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerhtml = this.innerHTML;
        switch (buttoninnerhtml) {
            case "w":
                new Audio("tom-1.mp3").play();
                break;
            case "a":
                new Audio("tom-2.mp3").play();
                break;
            case "s":
                new Audio("tom-3.mp3").play();
                break;

            case "d":
                new Audio("tom-4.mp3").play();
                break;
            case "j":
                new Audio("snare.mp3").play();
                break;

            case "k":
                new Audio("crash.mp3").play();
                break;
            case "l":
                new Audio("kick-bass.mp3").play();
                break;
            default: console.log(buttoninnerhtml);
        }
        keyanimetion(buttoninnerhtml);
    })
}
document.addEventListener("keydown", function (event) {
    //you have to use event in keydown event becouse as we press key on keybored event take that  key as input  we can name it whatever we want 
    // 
    // makedound(event.key);
    switch (event.key) {
        // here key is special word for keydown event
        case "w":
            new Audio("tom-1.mp3").play();
            break;
        case "a":
            new Audio("tom-2.mp3").play();
            break;
        case "s":
            new Audio("tom-3.mp3").play();
            break;

        case "d":
            new Audio("tom-4.mp3").play();
            break;
        case "j":
            new Audio("snare.mp3").play();
            break;

        case "k":
            new Audio("crash.mp3").play();
            break;
        case "l":
            new Audio("kick-bass.mp3").play();
            break;
        default: console.log(event.key);
    }
    keyanimetion(event.key);

})

function keyanimetion(currentkey) {
    var activekey = document.querySelector("." + currentkey);
    activekey.classList.add("pressed");
    setTimeout(function () {
        activekey.classList.remove("pressed")
    }, 200);
    // as w can see in settimeout we have to give functiion to be exuate and time in milli secound after which function get excutate

}

// below are code for changing color of h1 after getting clicked or press key on keybord
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").classList.add("red");
        setTimeout(function () {
            document.querySelector("h1").classList.remove("red");
        }, 200);
    });
}

document.addEventListener("keydown", function (event) {
    document.querySelector("h1").classList.add("red");
    setTimeout(function () {
        document.querySelector("h1").classList.remove("red");
    }, 200);
})
