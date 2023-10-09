const heading = document.getElementById('myHeading');
const textLength = heading.innerText.length;
const fontSize = 50 - (textLength * 2); // Adjust the formula as per your requirements
  
heading.style.fontSize = `${fontSize}px`;