const toggleButton = document.querySelector('.toggle-button');
const chickens = document.querySelectorAll('.chicken');

let chickensVisible = true; // Initial state: chickens are visible

toggleButton.addEventListener('click', () => {
    if (chickensVisible) {
        // Hide chickens
        chickens.forEach(chicken => {
            chicken.style.display = 'none';
        });
        chickensVisible = false;
    } else {
        // Show chickens
        chickens.forEach(chicken => {
            chicken.style.display = 'block';
        });
        chickensVisible = true;
    }
});

// Wait for the DOM to fully load before adding event listeners
console.log('Script loaded')
document.addEventListener('DOMContentLoaded', function () {
    let noClickCount = 0;

    // Select the "No" and "Yes" buttons
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    noButton.addEventListener('click', () => {
        // Increase the "No" click count
        noClickCount++;
        noButton.textContent = `No (${noClickCount})`;
        switch (noClickCount) {
            case 1:
                noButton.textContent = "Bu";
                break;
            case 2:
                noButton.textContent = "Buu";
                break;
            case 3:
                noButton.textContent = "Buuu";
                break;
            case 4:
                noButton.textContent = "Buuuu";
                break;
            case 5:
                noButton.textContent = "Buuuuu";
                break;
            case 6:
                noButton.textContent = "Buuuuuu";
                break;
            case 7:
                noButton.textContent = "Buuuuuuu";
                break;
            case 8:
                noButton.textContent = "Buuuuuuuu";
                break;
            case 9:
                noButton.textContent = "Buuuuuuuuu";
                break;
            // Add more cases as needed
            default:
                noButton.textContent = `Click Yes Buuuuuuuuuiiiiiiii`;
                break;
        }
        // Adjust the size of the "Yes" button based on the click count
        yesButton.style.padding = `${18 + noClickCount * 3}px 36px`; // Adjust padding as needed
        yesButton.style.fontSize = `${24 + noClickCount}px`; // Adjust font size as needed
    });
});



