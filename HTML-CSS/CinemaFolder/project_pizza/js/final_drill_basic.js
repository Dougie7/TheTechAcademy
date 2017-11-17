function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var text2 = "<h3>Cost:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize;
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	text1=text1+"     "+sizeTotal.toString()+"<br>";
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCheese(runningTotal,text1); // All two of these variables will be passed on to each function
}
function getCheese(runningTotal, text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			text1 = text1+selectedCheese;
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else  {
		cheeseTotal = 0;
	}
	text1=text1+"     "+cheeseTotal.toString()+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getSauce(runningTotal,text1); // All two of these variables will be passed on to each function
};

function getSauce(runningTotal, text1) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text1 = text1+selectedSauce;
		}
	}
	text1=text1+"     "+sauceTotal.toString()+"<br>";
	runningTotal = (runningTotal + sauceTotal);
	console.log(selectedSauce+" = $"+sauceTotal+".00");
	console.log("sauce text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getVeggies(runningTotal,text1); // All three of these variables will be passed on to each function
};

function getVeggies(runningTotal,text1) {
	var vegTotal = 0;
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("vegetables");
	for (var j = 0; j < vegArray.length; j++) {
		if (vegArray[j].checked) {
			selectedVeg.push(vegArray[j].value);
			console.log("selected vegetable item: ("+vegArray[j].value+")");
			text1 = text1+vegArray[j].value+", ";
		}
	}
	if (selectedVeg.length>0){
		text1=text1.slice(0,text1.length-2);
		}
	var vegCount = selectedVeg.length;
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
		text1=text1+"     "+vegTotal.toString()+"<br>";
	} else {
		vegTotal = 0;
	}
	
	runningTotal = (runningTotal + vegTotal);
	console.log("total selected vegetable items: "+vegCount);
	console.log(vegCount+" veg - 1 free veg = "+"$"+vegTotal+".00");
	console.log("veg text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getCrust(runningTotal,text1);
	};	

	function getCrust(runningTotal, text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust;
		} 
	}
	if (selectedCrust === "Cheese Stuffed") {
		crustTotal = 3;
	} else  {
		crustTotal = 0;
	}
	text1=text1+"     "+crustTotal.toString()+"<br>";
	runningTotal = (runningTotal + crustTotal);
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); // All two of these variables will be passed on to each function
};
	
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+", ";
		}
	}
	if (selectedMeat.length>0){
		text1=text1.slice(0,text1.length-2);
		}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
		text1=text1+"     "+meatTotal.toString()+"<br>";
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	