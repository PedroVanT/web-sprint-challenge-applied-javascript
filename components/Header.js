// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector("div.header-container");
headerContainer.append(Header());

function Header() {
  const headerDiv = document.createElement("div");

  const dateSpan = document.createElement("span");
  const headerH1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  dateSpan.textContent = "MARCH 28, 2020";
  headerH1.textContent = "Lambda Times";
  tempSpan.textContent = "98°";

  headerDiv.append(dateSpan, headerH1, tempSpan);

  return headerDiv;
}
