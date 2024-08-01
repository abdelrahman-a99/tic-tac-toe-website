let turn = 'x'
//
// let gameActive = true; // Flag to track if game is still active

const boxes = document.getElementById('boxes')
const title = document.querySelector(".title h1")

// Create the Tic Tac Toe grid
for (let i = 1; i <= 9; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.id = `item-${i}`;

    //
    // box.addEventListener('click', () => {
    //     if (gameActive)
    //         game(box.id);
    // });
    
    box.addEventListener('click', () => game(box.id));
    boxes.appendChild(box);
}

function game(id) {
    const box = document.getElementById(id)

    if (box.textContent === '') {
        box.innerHTML = turn.toUpperCase();
        box.classList.add(turn); // Apply the class for coloring
        turn = turn === 'x' ? 'o' : 'x';
        title.textContent = `${turn.toUpperCase()}'s turn`;
        winner();
    }
}

function winner() {
    const lines = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
        [1, 5, 9], [3, 5, 7]             // diagonals
    ];

    for (const line of lines) {
        const [a, b, c] = line;
        if (document.getElementById(`item-${a}`).textContent &&
            document.getElementById(`item-${a}`).textContent === document.getElementById(`item-${b}`).textContent &&
            document.getElementById(`item-${a}`).textContent === document.getElementById(`item-${c}`).textContent) {

            const winner = document.getElementById(`item-${a}`).textContent.toUpperCase();
            title.innerHTML = `${winner} wins!`;

            for (const item of line) {
                const box = document.getElementById(`item-${item}`);

                if (winner === 'X')
                    box.classList.add('x-winner');
                else
                    box.classList.add('o-winner');
            }

            setTimeout(() => location.reload(), 4000);
            return;

            //
            // endGame();
            // return;
        }
    }

    if (is_draw()) {
        title.innerHTML = `It's a draw!`;

        //
        // endGame();

        setTimeout(() => location.reload(), 4000);
    }
}

function is_draw() {
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById(`item-${i}`).textContent === '')
            return false;
    }
    return true;
}

// function endGame() {
//     gameActive = false; // Set game as not active

//     // Show play again button
//     const playAgainButton = document.createElement('button');
//     playAgainButton.textContent = 'Play Again';
//     playAgainButton.addEventListener('click', resetGame);
//     boxes.appendChild(playAgainButton);
// }

// function resetGame() {
//     // Reset all boxes
//     const allBoxes = document.querySelectorAll('.box');
//     allBoxes.forEach(box => {
//         box.textContent = '';
//         box.classList.remove('x', 'o', 'x-winner', 'o-winner');
//     });

//     // Reset game variables
//     turn = 'x';
//     gameActive = true;
//     title.textContent = `${turn.toUpperCase()}'s turn`;

//     // Remove play again button
//     const playAgainButton = document.querySelector('button');
//     if (playAgainButton) {
//         playAgainButton.remove();
//     }
// }