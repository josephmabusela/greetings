function Greetings() {

    var radioStr;
    var language;
    //var french = "Bonjour";
    //var sepedi = "Dumela";

    function setRadioInput(str) {
        language = str
    }

    function gettRadioInput() {
        return language
    }

    function setGreetLanguage() {
        if (gettRadioInput() === "french") {
            radioStr = "Bonjour"
        }

        if (gettRadioInput() === "english") {
            radioStr = "Hello"
        }

        if (gettRadioInput() === "sepedi") {
            radioStr = "Dumela"
        }
    }

    function getGreetLanguage() {
        radioStr;
    }

    return {
        setRadioInput,
        setGreetLanguage,
        getGreetLanguage,
        gettRadioInput
    }
}