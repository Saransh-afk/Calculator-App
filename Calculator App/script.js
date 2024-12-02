const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

// Add event listeners to each button
buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
        const buttonText = e.target.textContent;

        if (buttonText === 'C') {
            // Clear the input field
            input.innerText = "";
        } else if (buttonText === '<') {
            // Remove the last character from the input field
            input.innerText = input.innerText.slice(0, -1);
        } else if (buttonText === '=') {
            try {
                // Evaluate the expression in the input field
                input.innerText = eval(input.innerText);
            } catch {
                input.innerText = "Error";
            }
        } else {
            // Append the button text to the input field
            input.innerText += buttonText;
        }
    });
});
