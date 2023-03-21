// document.querySelector(".w").addEventListener("click", function () {
//     // this.Style.color="white";
//     new Audio("sounds/tom-1.mp3").play();
// })

// document.querySelector(".a").addEventListener("click", function () {
//     new Audio("sounds/tom-2.mp3").play();
// })

// document.querySelector(".s").addEventListener("click", function () {
//     new Audio("sounds/tom-3.mp3").play();
// })

// document.querySelector(".d").addEventListener("click", function () {
//     new Audio("sounds/tom-4.mp3").play();
// })

// document.querySelector(".j").addEventListener("click", function () {
//     new Audio("sounds/snare.mp3").play();
// })

// document.querySelector(".k").addEventListener("click", function () {
//     new Audio("sounds/crash.mp3").play();
// })

// document.querySelector(".l").addEventListener("click", function () {
//     new Audio("sounds/kick-bass.mp3").play();
// })

// WE CAN USING AS ABOVE AS WELL BUT IN BELOW WE USE WHAT WE HAVE LEARN IN JAVASCRIPT AND IT IS EFFICIEANT

// THIS  IS CLICK EVENTLISTENER
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerhtml = this.innerHTML;
        switch (buttoninnerhtml) {
            case "w":
                new Audio("sounds/tom-1.mp3").play();
                break;
            case "a":
                new Audio("sounds/tom-2.mp3").play();
                break;
            case "s":
                new Audio("sounds/tom-3.mp3").play();
                break;

            case "d":
                new Audio("sounds/tom-4.mp3").play();
                break;
            case "j":
                new Audio("sounds/snare.mp3").play();
                break;

            case "k":
                new Audio("sounds/crash.mp3").play();
                break;
            case "l":
                new Audio("sounds/kick-bass.mp3").play();
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
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;

        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;

        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default: console.log(event.key);
    }
    keyanimetion(event.key);

})
// function makedound(key){
//     switch (key) {
//         case "w":
//             new Audio("sounds/tom-1.mp3").play();
//             break;
//         case "a":
//             new Audio("sounds/tom-2.mp3").play();
//             break;
//         case "s":
//             new Audio("sounds/tom-3.mp3").play();
//             break;

//         case "d":
//             new Audio("sounds/tom-4.mp3").play();
//             break;
//         case "j":
//             new Audio("sounds/snare.mp3").play();
//             break;

//         case "k":
//             new Audio("sounds/crash.mp3").play();
//             break;
//         case "l":
//             new Audio("sounds/kick-bass.mp3").play();
//             break;
//         default:  console.log(buttoninnerhtml);
//     }
// }
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