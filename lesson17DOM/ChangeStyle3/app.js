function changeDivBgColor() {
    // Selecting the first element with the given class name
    var divElement = document.querySelector('.myDivClass');
    
    // Changing the background color to blue
    if (divElement) {
        divElement.style.backgroundColor = 'blue';
        
    }
}

// Call the function to change the background color
changeDivBgColor();
