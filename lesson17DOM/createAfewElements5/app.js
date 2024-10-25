// creating a function to add li's to existing ul element
function addListItems() {
    // Getting the ul element with its id mylist
    const ul = document.getElementById('myList');

    // Loop through numbers 1 to 5 to creat 5 li elements
    for (let i = 1; i <= 5; i++) {
        // Create a new li element
        const li = document.createElement('li');
        
        // adding text content of the all li's like item 1.2.3 with "i" var
        li.textContent = 'Item ' + i;
        
        // Append the li elements to the ul
        ul.appendChild(li);
    }
}


// testing the function
addListItems();
