

// ==========================================================
// Dark mood
// ==========================================================

const mybody = document.getElementById("body");
const myheader = document.getElementsByTagName("header")[0];
const mydark = document.querySelector(".icon-contrast");
const mysections = document.querySelectorAll("section");
const section2 = document.querySelector(".section2");
const section4 = document.querySelector(".section4");
const thetitle = document.querySelector(".title");
const myfavbutton1 = document.querySelectorAll(".myfavbutton1");


mydark.addEventListener("click", (eo) => {
  eo.target.classList.toggle("mytargetdark");
  mybody.classList.toggle("darkbody");
  myheader.classList.toggle("darkheader");
  thetitle.classList.toggle("thetitle");

  mysections.forEach((item) => {
    item.classList.toggle("sectionsdark");
  });
  myfavbutton1.forEach((item) => {
    item.classList.toggle("myfavbutton1dark");
  });
});











