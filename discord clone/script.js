"strict";

const navBody = document.querySelector(".nav-body");
const lang = document.querySelector(".a-lang");
const displayNone = document.querySelector(".display-none");
const barBox = document.querySelector(".barbox");
const otherSet = document.querySelector(".other-set");
const hidden = document.querySelector(".query-hidden");
const heSoYam = document.querySelector(".hesoyam");
const showQuery = document.querySelector(".query");
const removeX = document.querySelector(".x");
const disName = document.querySelector(".dis-name");
const secContainer = document.querySelector(".sec-container");

let mediaQuery = window.matchMedia("(max-width: 989px)");
let stickyNav = heSoYam.getBoundingClientRect().top;

// reveal section
const allContainer = document.querySelectorAll(".container");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
 
  if(!entry.isIntersecting) return
  
  entry.target.classList.remove("hide");
};

const containerObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.17,
});

allContainer.forEach(function (section) {
  containerObserver.observe(section);
});

lang.addEventListener("click", function () {
  if (displayNone.classList.contains("display-none")) {
    displayNone.classList.remove("display-none");
  } else {
    displayNone.classList.add("display-none");
  }
});

barBox.addEventListener("click", function () {
  if (heSoYam.classList.contains("hesoyam")) {
    heSoYam.classList.remove("hesoyam");
    disName.style.visibility = "hidden";
  }
});

removeX.addEventListener("click", function () {
  heSoYam.classList.add("hesoyam");
  disName.style.visibility = "visible";
});
