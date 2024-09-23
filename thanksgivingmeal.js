// Given the partially completed object, thanksgivingMeal, below,
// complete and call the methods
// 1) prettyPrint, return a string composed of the items on the menu
// 2) totalprice, return the total price of the meal noting that seniors 
//    get a 10% discount
// 3) totalCalories, add them all up!
// 4) caloriesFrom, return the calories only for the indicated part of 
//    the meal, starter, entree or dessert
// You will show the output of these methods by creating areas
// within an HTML document to display the results.
 
// The finished product should display the results of calling the
// methods, on a web document.


const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
        },
    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost : 25.0,
    senior_discount: .10,
    prettyPrint : function(){
        // Collate the menu here
       // display the content of the starter, the entree and the dessert
       let menuStr = document.querySelector(".fullMeal");
       menuStr.innerHTML = `Our starter will be ${this.starter.fruit} with a glass of ${this.starter.wine}. The entree will be a choice of 
       ${this.entree.meat} or ${this.entree.alt}. There will also be plenty of vegetables: ${this.entree.vegetables.potatoes}, ${this.entree.vegetables.greens}, 
       and ${this.entree.vegetables.salad}. Want a side? We will have ${this.entree.sides.bread} and ${this.entree.sides.pasta}. For the final, dessert
       we have ${this.dessert.ice_cream} and ${this.dessert.cake}.`;
    },
    totalPrice(isSenior) {
        // display the total price, given indicator isSenior - true or false
        if (isSenior = true) {
            let seniorPrice = 25 - 25*.10;
            let priceStr = document.querySelector(".priceInfo");
            priceStr.innerHTML = `If you are a senior, there is a 10% discount. Adult Price: ${this.total_cost}  Senior Price: ${seniorPrice}`;
            
        }
    },
    totalCalories : function() {
        // Add the total calories
        return (this.starter.calories + this.entree.calories + this.dessert.calories)},
    caloriesFrom: function(indicator) {
        // get the total calories for the indicator
        // 1 - starter, 2 - entree, 3 - dessert
        return(`Starter: ${this.starter.calories}, Entree: ${this.entree.calories}, Dessert: ${this.dessert.calories}.`);
    } 
};


let calorieInfo = document.querySelector(".calorieInfo");
calorieInfo.innerHTML = `Calories - ${thanksgivingMeal.caloriesFrom()} The total calories are ${thanksgivingMeal.totalCalories()}`;


thanksgivingMeal.prettyPrint();
thanksgivingMeal.totalPrice(true);