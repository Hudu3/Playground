setTimeout(function () {
  let titleEl = document.querySelector(".main-title");
  console.log("titleEl", titleEl);
  titleEl.innerHTML = '<span class="green">hi</span>jacked';

  let educationContainer = document.querySelector(".education");
  let myButton = document.querySelector(".my-button");
  let index = 0;
  let eduList = document.createElement("ul");
  educationContainer.append(eduList);

  const myEducation = [
    {
      year: 2015,
      school: "school a",
    },
    {
      year: 2017,
      school: "kindergarden",
    },
    {
      year: 2000,
      school: "university",
    },
  ];

  function clickHandler(event) {
    console.log("clicker", event);
    let item = myEducation[index % myEducation.length];
    const itemEl = document.createElement("li");
    itemEl.innerText = item.year + " " + item.school;
    eduList.append(itemEl);
    index++;
    if (index >= myEducation.length) {
      console.log("removed click handler");
      myButton.removeEventListener("click", clickHandler);
    }
  }

  myButton.addEventListener("click", clickHandler);

  myEducation.forEach((item) => {
    // const itemEl = document.createElement("li");
    // itemEl.innerText = item.year + " " + item.school;
    // eduList.append(itemEl);
  });
}, 2000);

function calculateArea(l, b) {
  return l * b;
}
