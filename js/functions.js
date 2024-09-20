const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const rollDice = () => {
    const randomNumber = getRandomIntNumberInRange(1,6);
    const diceImage = document.querySelector("#dice img");
    diceImage.src = `images/${randomNumber}.png`;
};

document.getElementById("dice").addEventListener("click", rollDice);
