const heading = document.getElementById('myHeading');
const textLength = heading.innerText.length;
const fontSize = 50 - (textLength * 2); // Adjust the formula as per your requirements
  
heading.style.fontSize = `${fontSize}px`;

var menuOpen = false;

const menuOpenButton = document.getElementById('menuOpenButton');
menuOpenButton.addEventListener('click', () => {
    // Set sidebar state to hover
    if(!menuOpen){
        menuOpen = true;
    } else {
        menuOpen = false;
    }
    document.getElementById('sidebar').classList.toggle('hover');
});