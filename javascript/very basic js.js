var a = 11;
var b = a + 1;

// string = text (string of characters)
stringA c = "hello world";
var d = 11; // Number
var e = true; // boolean
var f = 1.1; // float

// String operators
var stringA = "hello";
var stringB = "bye";

// Concatenation
var stringC = stringA + " " + stringB; // "hello bye"
var stringD = "8" + "6" // Sets "86" because it's a concatenation;

// Boolean operators
var theseStringsEqual = stringA == stringB; // Sets a boolean (false)
var theseStringsAreNotEqual = stringA != stringB; // Sets a boolean (true)

// Conditionals
if(theseStringsEqual) {
	// Do stuff if both strings equal
}

// ! operator is NOT
if(!theseStringsEqual) {
	// Do stuff if these string not equal
}

if(theseStringsEqual) {
	// Do stuff if both strings equal
} else {
	// Do stuff if both strings aren't equal
}

if(theseStringsEqual) {
	// Do stuff if both strings equal
} else if(stringA.length > 100) {

} else {

}

// Conditionals: Switch
var stringX = "hello";

if(stringX == "hello") {}
else if(stringX == "closed") {}
else if(stringX == "open") {}

switch(stringX) 
{
	case "hello":
		// Do stuff
		break;

	case "closed":
		break;
	
	case "open":
		break;	

	default: 
	    // Do whatever if no case is matched
		break;
}

// Boolean operators

// && => AND
// || => OR

var age = 20;
var name = "matias";

if(age > 18 && age < 50) {

}

if(age > 18 || name == "matias") {

}

switch(name) {
	case "matias"
	case "pepe":
		// Do stuff
		break;
}



