var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
//console.log(bandElement);

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
//	console.log(bands[loopTracker]);
//	console.log(vegetables[loopTracker]);
	currentBand = bands[loopTracker];
	console.log(currentBand);
	currentVeggie = vegetables[loopTracker]

	document.getElementById("boy-bands").innerHTML += currentBand;
	document.getElementById("vegetables").innerHTML += currentVeggie;

	//console.log("band element", bandElement);
	///currentVeggie = vegetables[loopTracker];
	// console.log("currentVeggie", currentVeggie);
	// veggieElement += currentVeggie;

}




//bandElement = document.write(bands[loopTracker]);
//console.log(bandElement);

//veggieElement = document.write("<p>" + vegetables[loopTracker] + "</p>");




  // Add the band names into the correct <div>
  //currentBand = ???;


  // Add the veggie names into the correct <div>
  //currentVeggie = ???;

