const dice = document.getElementById("dice");
const rollButton = document.getElementById("roll-dice");
const resetButton = document.getElementById("reset-history");
const rollHistory = document.getElementById("roll-history");

const diceFaces = [
    "\u2680", 
    "\u2681", 
    "\u2682", 
    "\u2683", 
    "\u2684", 
    "\u2685"  
];

let rollCount = 0;  

const rollDice = () => {
    dice.classList.add("rolling");
    setTimeout(() => {
        const rollResult = Math.floor(Math.random() * 6);
        dice.innerHTML = diceFaces[rollResult];
        dice.classList.remove("rolling");
        rollCount++;

        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${rollCount}: <span>${diceFaces[rollResult]}</span>`;
        rollHistory.prepend(listItem);
    }, 500);
};

const resetHistory = () => {
    rollHistory.innerHTML = "";
    rollCount = 0;
};

rollButton.addEventListener("click", rollDice);
resetButton.addEventListener("click", resetHistory);