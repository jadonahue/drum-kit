// One way to use this with function
/*
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got clicked")
}
*/



// Another way to use with an anonymous function. Targets first button.
/*
document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked")

    // This targets the first button only.
});
*/



// Another way to use with an anonymous function. Targets all drum class in array using for each loop.
/*
// This uses a forEach loop which iterates over each drum button class and adds the event listner/function to each iteration.
document.querySelectorAll(".drum").forEach(element => {
    element.addEventListener("click", function () {
        alert("I got clicked")
});

 // This targets each drum button and adds the event listner.

});
*/



// Another way to use with an anonymous function. Targets all drum class elements in array with for loop.
let numberOfDrumButtons = document.querySelectorAll(".drum").length; // Stores the lenght of drum buttons into variable

// For loop which iterates through the length of drum buttons until through entire list.
// This also detects/listens for the image thats clicked and stores the the iteration of the clicks innerHTML char and stores in a variable.
for(let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;

        // This then passes the buttonInnerHTML variable into the makeSound function key to play corresponding sound.
        makeSound(buttonInnerHTML);

        // This then passes the buttonInnerHTML variable into the buttonAnimation function key to play animation.
        buttonAnimation(buttonInnerHTML);
    
    });
}

// This detects/listens for a keystroke event. The function store the even when key is clicked.
// Then uses the make sound function passing in the input of the event, specifically the "key" of that event triggered.
// This then plays the sound of the corresponding switch in the makeSound function key.
document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    // This passes event key into the buttonAnimation function key to play animation.
    buttonAnimation(event.key);

  })


// This is the function to make a sound based on the switch which is triggered. This takes a key for the input.
function makeSound(key){

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default: console(buttonInnerHTML);
            
    }

}

// This is a function which is used to create an animation effect when the button is clicked or pressed fora short duration.
function buttonAnimation(currentKey) {
    
    // Add "." + currentKey so that it selects the button using the class. Ex: ".w"
    // Stores this class into variable
    let activeButton = document.querySelector("." + currentKey);

    // Takes active button and adds the class press, .pressed css.
    activeButton.classList.add("pressed");

    // After short time for the active button, this removes the class, .pressed css.
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}
