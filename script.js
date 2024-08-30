function validateSyntax() {
    let input = document.getElementById('petInput').value;

    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        //Regular Expression to ensure input starts wit 'pet_' followed by alphanumeric characters
        let expression = new RegExp('^pet\\d{4}[A-Za-z]+$');

        //Validate Input agaisnt my Regular Expression
        if (expression.test(input)) {
            result ="Valid Syntax "
        }

            document.getElementById('result').innerText = result;
}



