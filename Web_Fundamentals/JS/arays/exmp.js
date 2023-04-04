function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushhrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("baked", "tommatoes", ["parmigano, mozzarella"], ["pepperoni", "onions"]);
console.log(p3);

var p4 = pizzaOven("Stuffed", "Stuffed", ["mozzarolla"], ["pepperoni", "red&green peppers", "onion", "olives"]);
console.log(p4);


function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
    var sauceTypes = ["marinara", "traditional", "pesto", "alfredo"];
    var cheeses = ["mozzarella", "cheddar", "parmesan", "feta"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bell peppers"];

    var pizza = {};
    pizza.crustType = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    pizza.sauceType = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    pizza.cheeses = [cheeses[Math.floor(Math.random() * cheeses.length)]];
    pizza.toppings = [];
    for (var i = 0; i < 3; i++) {
        pizza.toppings.push(toppings[Math.floor(Math.random() * toppings.length)]);
    }

    return pizza;
}

var p5 = randomPizza();
console.log(p5);