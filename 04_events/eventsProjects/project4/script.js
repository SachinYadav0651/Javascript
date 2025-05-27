let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
const guesses = [];

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attemptsLeft');
const restartButton = document.getElementById('restartGame');
const guessHistory = document.getElementById('guessHistory');

function updateGuessHistory() {
  guessHistory.innerHTML = "";
  guesses.forEach((guess, index) => {
    const li = document.createElement('li');
    li.textContent = `#${index + 1}: ${guess}`;
    guessHistory.appendChild(li);
  });
}

function endGame(message, isWin) {
  feedback.textContent = message;
  feedback.style.color = isWin ? '#4fff7b' : '#ff6b6b';
  guessInput.disabled = true;
  submitGuess.disabled = true;
  restartButton.classList.remove('hidden');
}

submitGuess.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = '⚠️ Please enter a number between 1 and 100.';
    feedback.style.color = '#ffc107';
    return;
  }

  guesses.push(guess);
  updateGuessHistory();
  attemptsLeft--;
  attemptsDisplay.textContent = attemptsLeft;

  if (guess === secretNumber) {
    endGame(`🎉 Correct! The number was ${secretNumber}.`, true);
  } else if (attemptsLeft === 0) {
    endGame(`💀 Game over! The number was ${secretNumber}.`, false);
  } else {
    feedback.textContent = guess < secretNumber ? '📉 Too low. Try again!' : '📈 Too high. Try again!';
    feedback.style.color = '#ffffff';
  }

  guessInput.value = '';
  guessInput.focus();
});

restartButton.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  guesses.length = 0;
  guessInput.disabled = false;
  submitGuess.disabled = false;
  attemptsDisplay.textContent = attemptsLeft;
  feedback.textContent = 'Start guessing...';
  feedback.style.color = '#ffffff';
  guessInput.value = '';
  guessHistory.innerHTML = '';
  restartButton.classList.add('hidden');
});
