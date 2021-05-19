// get references to the input field
const nameText = document.querySelector(".name-display");

// get references to the radio buttons
const radioButton = document.querySelector(".radioButton");

// get reference to where the greeting will be displayed
const message = document.querySelector(".message");

// get reference to the greeting button
const greetButton = document.querySelector(".greetButton");

// get reference to the counter
const counterElement = document.querySelector(".counter");

// get a reference to the reset button
const reset = document.querySelector(".reset")

// make an instance of the greet factory function
let greetInstance = Greetings();

// make a function to display the greetings
function showGreeting() {
    // get a reference to the checked radio buttons
    var radioBtn = document.querySelector(".radioButton:checked");

    if (radioBtn) {
        var checkedLang = radioBtn.value;
        //greetInstance.getGreetLanguage(radioBtn.value);
    }

    greetInstance.setGreetLanguage(checkedLang);
    greetInstance.getGreetLanguage();

    if (nameText.value !== "") {
        message.innerHTML = greetInstance.gettRadioInput() + nameText.value
    }

    // prompt user to enter a name if they havent
    if (nameText.value === "") {
        message.innerHTML = "Enter a name"
    }

    // prompt user to select a language if they havent
    if (!radioBtn) {
        message.innerHTML = "Select a language"
    }
}

let counter = 0;

// initialize the counter in local storage
if (localStorage["counter"]) {
    // make counter equal the value in local storage
    counter = localStorage["counter"];
    counter ++

    // display the local storage value
    counterElement.innerHTML = counter;
}

// initialize names to an empty array
let names = {};

// initialize names to equal local storage
if (localStorage["names"]) {
    names = localStorage["names"]

    message.innerHTML = names
}

// click handler for displaying the greetings
greetButton.addEventListener("click", showGreeting);