
var Data = {
	bill: 0,
	TipPercentage: 0,
	NbPeople: 0,

	Tip: 0,
	TipPerPerson: 0.00,
	BillPerPerson: 0.00,
}

reset();
//____Bill
document.getElementById("Bill").addEventListener('input', updateBillValue);

function updateBillValue(e) {
	Data.bill = e.target.value;
	InputValidation(document.getElementById("Bill"), document.getElementById("BillError"));
}

//____Tip%
let Switches = document.querySelectorAll(".Percentage");
document.querySelectorAll("button").forEach(Button => Button.addEventListener('click', updateTipValue))
Switches.forEach(Switch => Switch.addEventListener("click", switchOn));//Switch with capital S to difference it from the keyword switch

document.getElementById('CustomPercentage').addEventListener('input', updateTipValue);


function switchOn() {
	for (i=0;i<Switches.length;i++) { 
		Switches[i].classList.remove('active');
	}
	this.classList.add('active');
}

function updateTipValue() {
	Data.TipPercentage = this.value;
	InputValidation(this, document.getElementById("TipError"));
}
//Number of People
document.getElementById("NbPeople").addEventListener('input', updateNbPeopleValue);

function updateNbPeopleValue(e) {
	Data.NbPeople = e.target.value;
	InputValidation(document.getElementById("NbPeople"), document.getElementById("NbPeopleError"));
}
//Check the validity of the imput's values
function InputValidation(checkedObject, ErrorObject) {
	if (!checkedObject.checkValidity()) {
		if (checkedObject.validity.rangeUnderflow) {
    	ErrorObject.innerHTML = "Can't be zero";
		}
	}
    else {
    	ErrorObject.innerHTML = "";
    	if (Data.bill && Data.NbPeople && Data.TipPercentage != "null") {
    		updateResults();
    	}
    	
    }
}

function updateResults() {
	//console.log("Bill"+Data.bill +" Tip"+Data.TipPercentage+" People"+Data.NbPeople)
	Data.Tip=(Data.bill/100)*Data.TipPercentage;
	Data.TipPerPerson=Data.Tip/Data.NbPeople;
	Data.BillPerPerson=Data.bill/Data.NbPeople+Data.Tip/Data.NbPeople;

	document.getElementById("TipAmount").innerHTML = Data.TipPerPerson.toFixed(2);
	document.getElementById("TotalBill").innerHTML = Data.BillPerPerson.toFixed(2);
}

document.getElementById("reset").addEventListener('click', reset);

function reset() {
	Data.bill=0;
	Data.TipPercentage=0;
	Data.NbPeople=0;
	Data.Tip=0;
	Data.TipPerPerson=0;
	Data.BillPerPerson=0;

	document.getElementById("TipAmount").innerHTML ="0.00";
	document.getElementById("TotalBill").innerHTML ="0.00";
	document.getElementById("Bill").value="";
	document.getElementById("NbPeople").value="";
	document.getElementById('CustomPercentage').value="";
}
