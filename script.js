let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/**
 * Generates random number from 0 to 9.
 * @returns {number} from 0 to 9.
 */
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

/**
 * Determines if human or computer guess is closer to target.
 * @param {number} humanGuess 
 * @param {number} computerGuess 
 * @param {number} target 
 * @returns {boolean} true if human wins; false if computer wins
 */
function compareGuesses(humanGuess, computerGuess, target) {
    const humanDiff = Math.abs(humanGuess - target);
    const computerDiff = Math.abs(computerGuess - target);
    return humanDiff <= computerDiff ? true : false;
}

/**
 * Updates score of winner by 1.
 * @param {string} winner 
 */
function updateScore(winner) {
    if (winner === "human") {
        humanScore++;
    }
    if (winner === "computer") {
        computerScore++;
    }
}

/**
 * Advances round by 1.
 */
function advanceRound() {
    currentRoundNumber++;
}