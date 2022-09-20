// Selcting the closest header to the first h1
const h11 = document.querySelector(".heading");
const headerTop = h11.closest("header");

headerTop.style.border = "5px solid yellow";

// selecting the package titles
const packageTitle = document.querySelectorAll(".package-title");

packageTitle.forEach((el) => {
  // el.previousElementSibling.style.border = "10px solid blue";
});

// Label

const label = document.querySelectorAll("label");
label.forEach((el) => {
  if (el.matches(".mild")) {
    el.style.borderBottom = "5px solid yellow";
  } else if (el.matches(".intense")) {
    el.style.borderBottom = "5px solid orange";
  } else {
    el.style.borderBottom = "5px solid red";
  }
});

// Adding nav list's elements to the footer list
const navList = document.querySelector(".nav-list");
const siteMap = document.querySelector(".site-map");
const list = navList.querySelectorAll("li");

list.forEach((el, i) => {
  const li = document.createElement("li");
  li.innerText = list[i].textContent;
  siteMap.appendChild(el);
  navList.appendChild(li);
});
