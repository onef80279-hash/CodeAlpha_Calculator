const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Clear Display
        if (value === "C") {
            display.value = "";
        }

        // Delete Last Character
        else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
        }

        // Calculate Result
        else if (value === "=") {
            try {
                let expression = display.value
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/");

                display.value = eval(expression);
            } catch {
                display.value = "Error";
            }
        }

        // Add Values to Display
        else {
            display.value += value;
        }
    });
});

/* Bonus: Keyboard Support */
document.addEventListener("keydown", (e) => {
    const key = e.key;

    // Numbers and Operators
    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ) {
        display.value += key;
    }

    // Enter Key
    else if (key === "Enter") {
        e.preventDefault();

        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    // Backspace Key
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape Key
    else if (key === "Escape") {
        display.value = "";
    }
});