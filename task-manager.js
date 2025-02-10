const choice = "Hello! Would you like to: \n1. View the fruit in your basket.\n2. Add a fruit to your basket.\n3. Remove a fruit to your basket.\n4. Exit the program.";

const basket = ["apple", "mango", "orange"];

const validFruits = [
    "apple", "orange", "mango", "grapes", "pear", "peach", "kiwi", "pineapple",
    "plum", "cherries", "apricots", "blackberries", "blueberries", "cantaloupe", "dragon fruit", "grape fruit", "guava",
    "lychee", "raspberries", "strawberries", "watermelon"
];

let output = "";

let app_running = true;

while (app_running) {
    let option = Number(prompt(choice));
    switch (option) {
        case 1:
            if(basket.length === 0) {
                alert("Your basket is currently empty.");
                break;
            }

            output = "Your basket currently contains:\n"
            for (let i = 0; i < basket.length; i++) {
                let fruit = basket[i];

                output += `${i + 1}. ${fruit}\n`;
            }
            alert(output);
            break;

        case 2:
            let addFruit = prompt("Please enter what fruit you would like to add to the basket.");
            addFruit = addFruit.trim().toLowerCase();

            if(validFruits.includes(addFruit)) {
                basket.push(addFruit);
                alert("Thanks for adding to the basket!");
            }
            else {
                alert("That's not a valid Fruit. Please enter a valid fruit.")
            }
            break;

        case 3:
            if(basket.length === 0) {
                alert("Your basket is currently empty. There are no fruits to remove.");
                break;
            }
            
            output = "Select a fruit to remove:\n";
            for(let i = 0; i < basket.length; i++) {
                output += `${i + 1}. ${basket[i]}\n`;
            }
            let removeFruit = Number(prompt(`${output}\n Please enter the number of the fruit you would like to remove from the basket.`)) - 1;
            
            if (removeFruit >= 0 && removeFruit < basket.length) {
                let remove = basket.splice(removeFruit, 1);
                alert(`${remove} was successfully removed from the basket.`);
            }
            else {
                alert("Invalid number. Please enter an existing number from the list.")
            }
            break;

        case 4: 
            alert("You are now exiting the program.");
            app_running = false;
            break;

        default:
            alert("Sorry, I can't find this option.");
    }
}