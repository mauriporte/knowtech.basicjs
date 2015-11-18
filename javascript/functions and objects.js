var a = 1 + 1;

// I want to call this code... so I give it a name: sumOne
var b = a + 1;

// this is why I declare a function...
function sumOne(a) {
	return a + 1;
}

function sayHelloWorld(yourName) {
	console.log("Hello world, " + yourName);
}

var Salutations = {
	sayHelloWorld: function(yourName) {
		console.log("Hello world, " + yourName);
	}
}

Salutations.sayHelloWorld("matias");


var resultOfSum = sumOne(5);

sayHelloWorld("matias");

var document = {
	getElementById: function(id) {
		// Stuff to get an element by id
	}
};

window.alert("hola")

document.getElementById("text")

document.b