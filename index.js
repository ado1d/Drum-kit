alert("Made by Ayman💜");

var d = document.querySelectorAll(".drum");
var len = d.length;



for (var i = 0; i < len; i++) {
    d[i].addEventListener("click", function () {
        var key = this.innerHTML;
        makeSound(key);
        buttonPressed(key);
    });

}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonPressed(event.key);
});


function makeSound (key) {
    var audio;
    switch (key) {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/crash.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/snare.mp3");
            break;
    
        default:
            console.log(key);
            break;
    }

    audio.play();
}

function buttonPressed(key) {
    var button = document.querySelector("." + key);
    // console.log(button);
    button.classList.add("pressed");
    
    // to remove pressed class after 1ms of clicked
    setTimeout(func, 100);
    function func() {
        button.classList.remove("pressed");
    }
}
