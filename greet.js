// get references to the input field
const nameText = document.querySelector(".nameText");

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

    greetInstance.setGreetLanguage(nameText.value, checkedLang);
    //greetInstance.getGreetLanguage();

    if (nameText.value !== "") {
        message.innerHTML = greetInstance.setGreetLanguage(nameText.value, checkedLang);
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


function counterIncrease() {
        
    let count = localStorage["counter"] || 0;
    count ++

    localStorage.setItem("counter", count);
    // display the local storage value
    counterElement.innerHTML = localStorage.getItem("counter");

    // // initialize the counter in local storage
    // if (localStorage["counter"]) {
    //     // make counter equal the value in local storage
    //     counter = localStorage["counter"];
    //     counter ++

        
    // }

    // initialize names to an empty array
    let names = [];

    //initialize names to equal local storage
    if (localStorage["names"]) {
        names = localStorage["names"]

        message.innerHTML = names
    }

    if (greetInstance.getGreetedName() != "" && !names[greetInstance.getGreetedName()]) {
        localStorage.setItem("names", greetInstance.exisitingNames())
        count ++
    }

    //clear radio buttons
    for(let i = 0; i < radioButton.length; i++){
        radioButton[i].checked = false
    
    }

}


// click handler for displaying the greetings
greetButton.addEventListener("click", function() {

    var names = [].concat(localStorage.getItem("names").split(","))
    greetInstance.setGreetedNames(names)
    greetInstance.storeName(nameText.value);


    showGreeting();
    counterIncrease();

    nameText.value = "";


})

// click handler for reset button
reset.addEventListener("click", function() {
    localStorage.setItem("names", [])
    localStorage.setItem("counter", 0)
    counterElement.innerHTML = localStorage["counter"]
    nameText.innerHTML = ""

})