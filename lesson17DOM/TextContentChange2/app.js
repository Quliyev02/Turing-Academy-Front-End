function changeParagraphText() {
    // selecting p element with myparagraph id
    var paragraph = document.getElementById('myParagraph');
    
    // changing elemnts contnt
    paragraph.textContent = 'Salam, Dünya!';
}

// calling fucn for change
changeParagraphText();
