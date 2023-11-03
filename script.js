function calculateTip() {
  var billAmount = parseFloat(document.getElementById("billAmount").value);
  var serviceQuality = parseFloat(
    document.getElementById("serviceQuality").value
  );
  var numberOfPeople = parseInt(
    document.getElementById("numberOfPeople").value
  );

  if (
    isNaN(billAmount) ||
    isNaN(serviceQuality) ||
    isNaN(numberOfPeople) ||
    billAmount <= 0 ||
    numberOfPeople <= 0
  ) {
    alert("Please enter valid input values.");
    return;
  }

  var totalTip = (billAmount * serviceQuality) / numberOfPeople;
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Tip per person: $" + totalTip.toFixed(2);
}

var calculateButton = document.querySelector("button");
calculateButton.addEventListener("click", calculateTip);
