const chickenContainer = document.getElementById('chicken-container');

// Create and animate five independent chickens
for (let i = 1; i <= 5; i++) {
    createAndAnimateChicken(i);
}

function createAndAnimateChicken(chickenNumber) {
    const chicken = document.getElementById(`chicken${chickenNumber}`);
    const chickenWidth = chicken.offsetWidth;
    const chickenHeight = chicken.offsetHeight;

    // Calculate the initial centered position for each chicken
    const initialX = Math.random() * (window.innerWidth/2 - chickenWidth);
    const initialY = Math.random() * (window.innerHeight/2 - chickenHeight);

    chicken.style.left = `${initialX}px`;
    chicken.style.top = `${initialY}px`;

    let oscillationDirectionX = 1; // Initial oscillation direction for X-axis
    let oscillationDirectionY = 1; // Initial oscillation direction for Y-axis

    function moveChickenRandomly() {
        const maxX = window.innerWidth - chickenWidth;
        const maxY = window.innerHeight - chickenHeight;

        // Generate smaller random step values for both horizontal and vertical directions
        const stepX = (Math.random() * 100 - 50) * oscillationDirectionX; // Random horizontal step between -5 and 5 pixels
        const stepY = (Math.random() * 100 - 50) * oscillationDirectionY; // Random vertical step between -5 and 5 pixels

        let currentX = parseFloat(chicken.style.left);
        let currentY = parseFloat(chicken.style.top);

        let newX = currentX + stepX;
        let newY = currentY + stepY;

        // Ensure the chicken stays within the screen boundaries
        newX = Math.max(0, Math.min(maxX, newX));
        newY = Math.max(0, Math.min(maxY, newY));

        chicken.style.transform = `translate(${newX}px, ${newY}px)`;

        // Check if the chicken is outside the viewport and adjust its position
        const viewportTop = window.scrollY;
        const viewportBottom = viewportTop + window.innerHeight;
        const chickenTop = newY;
        const chickenBottom = newY + chickenHeight;

        if (chickenBottom > viewportTop && chickenTop < viewportBottom) {
            // Chicken is within the viewport
            return;
        }

        // Chicken is outside the viewport, reposition it within the visible area
        newX = Math.random() * (window.innerWidth - chickenWidth);
        newY = Math.random() * (window.innerHeight - chickenHeight);
        chicken.style.transform = `translate(${newX}px, ${newY}px)`;

        // Reverse the oscillation direction when hitting viewport edges
        oscillationDirectionX *= -1;
        oscillationDirectionY *= -1;
    }

    // Move each chicken randomly every 150 ms for faster movement
    setInterval(moveChickenRandomly, 200);

    // Move each chicken randomly immediately
    moveChickenRandomly();
}