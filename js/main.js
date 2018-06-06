// nav drawer & overlay

const body = document.getElementsByTagName("BODY")[0];
const hamburgerIcon = document.querySelector(".hamburger");
const navDrawer = document.getElementById("drawer");
const overlay = document.querySelector(".overlay");

function openNav() {
  overlay.style.display = "block";
  navDrawer.style.width = "300px";
  body.style.overflowY = "hidden";
}

function closeNav() {
  overlay.style.display = "none";
  navDrawer.style.width = "0px";
  body.style.overflowY = "auto";
  navDrawer.scrollTop = 0;
}

// back to top btn

function scrollWinTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

// show search input

function showSearch() {
  console.log("search icon clicked");
}
