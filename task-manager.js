const choice = "Hello! Would you like to: \n1. View the fruit in your basket.\n2. Add a fruit to your basket.\n3. Remove a fruit to your basket.\n4. Exit the program.";

const basket = ["apple", "mango", "orange"];

const validFruits = [
    "apple", "orange", "mango", "grapes", "pear", "peach", "kiwi", "pineapple",
    "plum", "cherries", "apricots", "blackberries", "blueberries", "cantaloupe", "dragon fruit", "grape fruit", "guava",
    "lychee", "raspberries", "strawberries", "watermelon", "banana", "tomato", "coconut"
];

let output = "";

document.addEventListener("DOMContentLoaded", () => {
    const fruitEmoji = [
"🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍑", "🍐", "🍏", "🍎", "🥭", "🍍", "🍒", "🍓", "🫐", "🥝", "🍅", "🥥"
];
    
function generateFruit() {
    const fruit = document.createElement("div");
    fruit.classList.add("fruit");
    fruit.innerHTML = fruitEmoji[Math.floor(Math.random() * fruitEmoji.length)];
    document.body.appendChild(fruit);

    fruit.style.left = Math.random() * window.innerWidth + "px";
    fruit.style.animationDuration = Math.random() * 1 + 3 + "s";

    setTimeout(() => {
        fruit.remove();
    }, 6000);
}

setInterval(generateFruit, 500);
});

//viewTasks()
function viewBasket() {
    if(basket.length === 0) {
        alert("Your basket is currently empty.");
        return;
    }
    let output = "Your basket currently contains:\n";
    basket.forEach((fruit, index) => {
        output += `${index + 1}. ${fruit}\n`;
    });
    alert(output);
}
//addTasks()
function addFruit() {
    let addFruit = prompt("Please enter what fruit you would like to add to the basket.");
    addFruit = addFruit.trim().toLowerCase();

    if(validFruits.includes(addFruit)) {
        basket.push(addFruit);
        alert("Thanks for adding to the basket!");       
    }
    else {
        alert("That's not a valid fruit. Please enter a valid fruit.");
    }
}
//removeTasks()
function removeFruit() {
    if(basket.length === 0) {
        alert("Your basket is currently empty. There are no fruits to remove.");
        return;
    }
    let output = "Select a fruit to remove:\n";
    basket.forEach((fruit, index) => {
        output += `${index + 1}. ${fruit}\n`;
    });

    let removeFruit = Number(prompt(`${output}\nPlease enter the number of the fruit you would like to remove.`)) - 1;

    if(removeFruit >= 0 && removeFruit < basket.length) {
        let removed = basket.splice(removeFruit, 1);
        alert(`${removed} was successfully removed from the basket.`);
    }
    else {
        alert("Invalid number. Please enter an existing number from the list.");
    }
}

//main runs the loop 
function showMenu() {
    let appRunning = true;

    while(appRunning) {
        let option = Number(prompt(choice));

        switch(option) {
            case 1:
                viewBasket();
                break;
            
            case 2:
                addFruit();
                break;
            
            case 3:
                removeFruit();
                break;

            case 4:
                alert("You are now exiting the program.");
                appRunning = false;
                break;
            
            default:
                alert("Sorry, I can't find this option.");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Menu").addEventListener('click', showMenu);
});

