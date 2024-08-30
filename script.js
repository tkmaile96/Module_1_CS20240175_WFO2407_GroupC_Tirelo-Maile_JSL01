function validateSyntax() {
    let input = document.getElementById('petInput').value;

    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        //Regular Expression to ensure input starts wit 'pet_' followed by alphanumeric characters
        const expression = new RegExp('^pet_\\d{4}[A-Za-z]+$');

        //Validate Input agaisnt my Regular Expression
        if (expression.test(input)) {
            result ="Valid Syntax ✅"
        } else {
            result = "Invalid Syntax ❌"
        }

            document.getElementById('result').innerText = result;
}

//Fuction to clear the Input
function clearInput() {
    document.getElementById('result').innerText= ''; //set to an empty string to clear the input after each result    
}

//An Event Listener for Clearing the Pet Input
document.getElementById('petInput').addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        validateSyntax();
    }
})



