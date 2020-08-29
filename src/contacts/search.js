let myButton = document.getElementById("search-button");
let myInput = document.getElementById("name-input");

myButton.addEventListener("click", handleReset);
myInput.addEventListener("keyup", handleSearch);

function handleSearch(ev) {
  let results = searchAddresses(ev.target.value);
  displayResults(results);
}
function handleReset(ev) {
  myInput.value = "";
}

function searchAddresses(search) {
  if (!search) return addresses.slice(0, 10);
  let results = [];
  for (let i = 0; i < addresses.length; i++) {
    if (checkAddress(addresses[i], search)) {
      results.push(addresses[i]);
    }
  }
  return results.slice(0, 100);
}

function checkAddress(address, s) {
  let search = s.toLowerCase();
  return address.first_name.toLowerCase().indexOf(search) > -1;
}

function displayResults(results) {
  console.log("results to display", results);
  let resultContainer = document.querySelector(".result-display");
  resultContainer.innerHTML = "";
  results.forEach((address) => {
    console.log("address", address);
    let myResult = document.createElement("div");
    myResult.innerText = address.first_name;
    resultContainer.append(myResult);
  });
}
