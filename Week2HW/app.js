const titleButton = document.getElementById('titleButton');
const learnButton = document.getElementById('learnButton');
const bird = document.getElementById('bird');
let gameStarted = false;
let birdFalling;
let birdPosition = 10; // Initial position from the top

// Start the game
titleButton.addEventListener('click', () => {
    gameStarted = true;
    birdFalling = setInterval(() => {
        if (birdPosition < window.innerHeight - bird.clientHeight - 10) {
            birdPosition += 5;
            bird.style.top = birdPosition + 'px';
            bird.style.left=birdPosition + 1000;
        } else {
            clearInterval(birdFalling);
        }
    }, 100);
});

// Learn button click event
learnButton.addEventListener('click', () => {
    if (gameStarted && birdPosition > 0) {
        birdPosition -= 50;
        if (birdPosition < 0) birdPosition = 0; // Prevent bird from going off the top
        bird.style.top = birdPosition + 'px';
    }
});
