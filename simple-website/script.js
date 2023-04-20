// Code to add interactivity with JavaScript

// Add a class to the navigation link that matches the current page
const currentLocation = location.href;
const navLinks = document.querySelectorAll("nav a");
const linkLength = navLinks.length;
for (let i = 0; i < linkLength; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].classList.add("active");
  }
}
