var pizza = {
	name: "Basic",
	price: 2000,
	size: "small",
	toppings: ["Ham", " Pepperoni"]
}

document.getElementById("pizzaparty1").innerHTML = "<b>" + pizza.name + "</b><br>Price: " + pizza.price + " kr.<br>Size: " + pizza.size + "<br>Toppings: " + pizza.toppings + "<br><br>";

function pizzas(n, p, s, t)
{
	this.name = n;
	this.price =  p;
	this.size = s;
	this.toppings = t;
}

var meatAndCheese = new pizzas("Meat and Cheese", 3450, "Large", ["Creamcheese", " Pepperoni", " Bacon", " Peppercheese", " Black Pepper"]);
document.getElementById("pizzaparty2").innerHTML = "<b>" + meatAndCheese.name + "</b><br>Price: " + meatAndCheese.price + " kr.<br>Size: " + meatAndCheese.size + "<br>Toppings: " + meatAndCheese.toppings + "<br><br>";

var surprise = new pizzas("Surprise", 2990, "Medium", ["Pepperoni", " Ham", " Creamcheese", " Jalapeno", " Garlic", " Black Pepper", " Mushrooms"]);
document.getElementById("pizzaparty3").innerHTML = "<b>" + surprise.name + "</b><br>Price: " + surprise.price + " kr.<br>Size: " + surprise.size + "<br>Toppings: " + surprise.toppings + "<br><br>";