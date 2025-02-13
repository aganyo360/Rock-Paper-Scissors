# 🪨📄✂️ Rock-Paper-Scissors Game

This is a simple **Rock-Paper-Scissors** game built with **JavaScript**. The game allows a user to play against the computer in a **best-of-five rounds** format.

## 🎮 How It Works

- The player is prompted to enter **Rock**, **Paper**, or **Scissors**.
- The computer randomly selects one of the three options.
- The winner of each round is determined based on the classic Rock-Paper-Scissors rules:
  - 🪨 **Rock beats Scissors** ✂️
  - 📄 **Paper beats Rock** 🪨
  - ✂️ **Scissors beats Paper** 📄
- The game runs for **5 rounds**, and the final score determines the overall winner.

## 🛠️ Technologies Used

- **JavaScript (ES6+)**
- **Browser Prompt & Console Logs** (for interaction)

## 📜 Game Rules

| Player Choice | Computer Choice | Result |
|--------------|----------------|--------|
| Rock 🪨 | Scissors ✂️ | Player Wins ✅ |
| Rock 🪨 | Paper 📄 | Computer Wins ❌ |
| Paper 📄 | Rock 🪨 | Player Wins ✅ |
| Paper 📄 | Scissors ✂️ | Computer Wins ❌ |
| Scissors ✂️ | Paper 📄 | Player Wins ✅ |
| Scissors ✂️ | Rock 🪨 | Computer Wins ❌ |

## 🚀 How to Play

1. Open your browser's **Developer Console** (Press `F12` or `Ctrl + Shift + I`).
2. 
3. The game will automatically start.
4. Enter your choice (`Rock`, `Paper`, or `Scissors`) when prompted.
5. Play **5 rounds**, and the winner will be announced at the end.

## 📝 Code Structure

- **`getComputerChoice()`** → Generates a random computer choice.
- **`getHumanChoice()`** → Prompts the user for input and validates it.
- **`playRound(humanChoice, computerChoice)`** → Determines the winner of a single round.
- **`playGame()`** → Runs the game for **5 rounds** and tracks the score.

## 🏆 Example Gameplay Output

```plaintext
Round 1: You chose ROCK, Computer chose SCISSORS
You win! ROCK beats SCISSORS
Current Score: YOU: 1 | COMPUTER: 0

Round 2: You chose PAPER, Computer chose ROCK
You win! PAPER beats ROCK
Current Score: YOU: 2 | COMPUTER: 0

Round 3: You chose SCISSORS, Computer chose SCISSORS
It's a draw! Both chose SCISSORS
Current Score: YOU: 2 | COMPUTER: 0

Round 4: You chose ROCK, Computer chose PAPER
You lose! PAPER beats ROCK
Current Score: YOU: 2 | COMPUTER: 1

Round 5: You chose SCISSORS, Computer chose ROCK
You lose! ROCK beats SCISSORS
Current Score: YOU: 2 | COMPUTER: 2

It's a draw!
