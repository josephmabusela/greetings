function Greetings() {
    var namesList = [];
    var user;

    function storeName(str) {
        namesList.push(str)
    }

    function getStoreName() {
        return namesList
    }

    function setGreetLanguage(name, language) {

        if (language === "french") {
            return "Bonjour " + name
        }

        if (language === "english") {
            return "Hello " + name
        }

        if (language === "sepedi") {
            return "Dumela " + name
        }
    }

    function greetedNames(names) {
        user = names.toUpperCase().trim()
    }

    function setGreetedNames(userInput) {
        namesList = userInput
    }

    function getGreetedName() {
        return user
    }

    function exisitingNames() {
        if (!namesList.includes(user)) {
            namesList.push(user);
        }
        return namesList
    }


    return {
        storeName,
        setGreetLanguage,
        getStoreName,
        greetedNames,
        getGreetedName,
        setGreetedNames,
        exisitingNames
    }
}