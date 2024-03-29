
// Array of CSS class names
var classes = ['jumbo-bg-1', 'jumbo-bg-2', 'jumbo-bg-3', 'jumbo-bg-4'];

// Get the div element
var divElement = document.getElementById('jumbo-random');

// Generate a random index
var randomIndex = Math.floor(Math.random() * classes.length);

// Add the randomly chosen class to the div
divElement.classList.add(classes[randomIndex]);