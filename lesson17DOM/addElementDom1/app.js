function createAndAddDiv() {
    // Create a new div element
    var newDiv = document.createElement('div');
    
    // Add text to the new div
    newDiv.textContent = '15raspberry20blueberry';
    
    // appent the new div to the body
    document.body.appendChild(newDiv);
}

//callinf function for adding div
createAndAddDiv();
