//var totalBeforeTip = document.getElementById("subtotal").value;

//var tipChoice = document.getElementById("service").value;

//var totalPerPerson = document.getElementById("total-people").value;

var button = document.getElementById("button");
button.addEventListener("click", tipAmount);

function tipAmount() {
    var totalBeforeTip = document.getElementById("subtotal").value;
    var tipChoice = document.getElementById("service").value;
    var tipTotal = totalBeforeTip * tipChoice;
    document.getElementById("tip-total").innerHTML = tipTotal;
}


function totalAmount() {
    var totalBeforeTip = document.getElementById("subtotal").value;
    var tipChoice = document.getElementById("service").value;
    var tipTotal = totalBeforeTip * tipChoice;
    var mealTotal = +tipTotal + +totalBeforeTip;
    document.getElementById("total-cost").innerHTML = mealTotal;
}

function totalPerPerson() {
    var totalBeforeTip = document.getElementById("subtotal").value;
    var tipChoice = document.getElementById("service").value;
    var totalPeople = document.getElementById("total-people").value;
    var tipTotal = totalBeforeTip * tipChoice;
    var mealTotal = +tipTotal + +totalBeforeTip;
    var totalPerPerson = mealTotal/totalPeople;
    document.getElementById("total-pp").innerHTML = totalPerPerson;
}
