const chickenContainer = document.getElementById('chicken-container');

// Create and animate five independent chickens
for (let i = 1; i <= 5; i++) {
    createAndAnimateChicken(i);
}

function createAndAnimateChicken(chickenNumber) {
    const chicken = document.getElementById(`chicken${chickenNumber}`);
    const chickenWidth = chicken.offsetWidth;
    const chickenHeight = chicken.offsetHeight;

    let maxX, maxY;

    function updateMaxCoordinates() {
        maxX = window.innerWidth - chickenWidth;
        maxY = window.innerHeight - chickenHeight;
    }

    // Initialize the maximum coordinates
    updateMaxCoordinates();

    function moveChickenRandomly() {
        // Generate smaller random step values for both horizontal and vertical directions
        const stepX = (Math.random() * 6 - 3); // Random horizontal step between -3 and 3 pixels
        const stepY = (Math.random() * 6 - 3); // Random vertical step between -3 and 3 pixels

        let currentX = parseFloat(chicken.style.left);
        let currentY = parseFloat(chicken.style.top);

        let newX = currentX + stepX;
        let newY = currentY + stepY;

        // Ensure the chicken stays within the screen boundaries
        newX = Math.max(0, Math.min(maxX, newX));
        newY = Math.max(0, Math.min(maxY, newY));

        chicken.style.transform = `translate(${newX}px, ${newY}px)`;
    }

    // Move each chicken randomly every 500 ms for slower movement
    setInterval(moveChickenRandomly, 500);

    // Update maximum coordinates when the window is resized
    window.addEventListener('resize', () => {
        updateMaxCoordinates();
    });
}