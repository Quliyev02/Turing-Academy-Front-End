function toggleHighlightClass() {
    // Selecting the list item with a given class
    var listItem = document.querySelector('.myListItem');
    
    // Toggling the 'highlight' class
    listItem.classList.toggle('highlight');
}

// Add an event listener to the button to trigger the function when clicked
document.querySelector('#toggleButton').addEventListener('click', toggleHighlightClass);
