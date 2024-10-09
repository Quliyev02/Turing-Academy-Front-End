let listProductHTML = document.querySelector('.listProduct'); // Container for displaying products
let listCartHTML = document.querySelector('.listCart'); // Container for displaying items in the cart
let iconCart = document.querySelector('.icon-cart'); // Cart icon in the header
let iconCartSpan = document.querySelector('.icon-cart span'); // Element showing the total number of items in the cart
let body = document.body; // Reference to the body element to toggle the cart visibility
let closeCart = document.querySelector('.close'); // Button to close the cart view
let products = []; // Array to hold the products fetched from JSON
let cart = []; // Array to hold cart items
alert("First of all tasks and things Happy Birthday! We wish you all thing's best in your future:) exactly our success too:D")
// Toggle the cart's visibility when the cart icon or close button is clicked
const toggleCart = () => body.classList.toggle('showCart');
iconCart.addEventListener('click', toggleCart); // Open cart
closeCart.addEventListener('click', toggleCart); // Close cart

// Add product data fetched from JSON to the HTML
const addDataToHTML = () => {
    // Clear the current product list to prevent duplication
    listProductHTML.innerHTML = '';

    // Check if there are any products and add them to the HTML
    if (products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id; // Assign product ID to the div for later reference
            newProduct.classList.add('item'); // Add the "item" class for styling
            newProduct.innerHTML = `
                <img src="${product.image}" alt="${product.name}"> <!-- Product image -->
                <h2>${product.name}</h2> <!-- Product name -->
                <div class="price">$${product.price}</div> <!-- Product price -->
                <button class="addCart">Add To Cart</button> <!-- Button to add product to cart -->
            `;
            listProductHTML.appendChild(newProduct); // Add the product element to the list
        });
    }
};

// Function to add an item to the cart based on its product ID
const addToCart = (product_id) => {
    // Check if the product is already in the cart
    let productInCart = cart.find(item => item.product_id === product_id);

    // If the product is not in the cart, add it; otherwise, increase the quantity
    if (!productInCart) {
        cart.push({ product_id, quantity: 1 }); // Add product with quantity of 1
    } else {
        productInCart.quantity++; // Increment quantity
    }

    updateCart(); // Update cart content and local storage
};

// Update cart data in localStorage and refresh the cart display
const updateCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart data to localStorage
    updateCartHTML(); // Refresh cart items in the HTML
};

// Render the current cart items in the HTML
const updateCartHTML = () => {
    listCartHTML.innerHTML = ''; // Clear current cart items in HTML
    let totalQuantity = 0; // Variable to track the total quantity of items in the cart

    // Loop through cart items and display them
    if (cart.length > 0) {
        cart.forEach(item => {
            totalQuantity += item.quantity; // Add item quantity to total count
            let product = products.find(p => p.id == item.product_id); // Find product details using product ID

            // Create the HTML for each cart item
            let cartItem = document.createElement('div');
            cartItem.classList.add('item'); // Add "item" class for styling
            cartItem.dataset.id = item.product_id; // Assign product ID to the cart item div
            cartItem.innerHTML = `
                <div class="image"><img src="${product.image}" alt="${product.name}"></div> <!-- Cart item image -->
                <div class="name">${product.name}</div> <!-- Cart item name -->
                <div class="totalPrice">$${product.price * item.quantity}</div> <!-- Cart item total price -->
                <div class="quantity">
                    <span class="minus">&lt;</span> <!-- Button to decrease item quantity -->
                    <span>${item.quantity}</span> <!-- Display current quantity -->
                    <span class="plus">&gt;</span> <!-- Button to increase item quantity -->
                </div>
            `;
            listCartHTML.appendChild(cartItem); // Add cart item to cart list
        });
    }

    iconCartSpan.innerText = totalQuantity; // Update cart icon with the total quantity
};

// Change the quantity of an item in the cart (increase or decrease)
const changeQuantityCart = (product_id, type) => {
    let itemInCart = cart.find(item => item.product_id == product_id); // Find the item in the cart by its product ID

    // If the item exists in the cart, adjust the quantity
    if (itemInCart) {
        if (type === 'plus') {
            itemInCart.quantity++; // Increase quantity
        } else {
            itemInCart.quantity--; // Decrease quantity
            if (itemInCart.quantity <= 0) {
                cart = cart.filter(item => item.product_id != product_id); // Remove item from cart if quantity reaches 0
            }
        }
    }

    updateCart(); // Refresh cart content and local storage
};

// Event listener to handle adding items to the cart
listProductHTML.addEventListener('click', (event) => {
    if (event.target.classList.contains('addCart')) {
        let product_id = event.target.closest('.item').dataset.id; // Get product ID from the clicked product
        addToCart(product_id); // Add product to the cart
    }
});

// Event listener to handle changing item quantity in the cart
listCartHTML.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('minus') || target.classList.contains('plus')) {
        let product_id = target.closest('.item').dataset.id; // Get product ID from the clicked cart item
        let type = target.classList.contains('plus') ? 'plus' : 'minus'; // Determine whether to increase or decrease quantity
        changeQuantityCart(product_id, type); // Update the item quantity in the cart
    }
});

// Initialize the app: fetch products from the JSON file and restore the cart from localStorage
const initApp = () => {
    fetch('products.json') // Fetch the product data
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            products = data; // Assign fetched data to the products array
            addDataToHTML(); // Display the products on the page

            // Check if there's existing cart data in localStorage and restore it
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart')); // Parse the stored cart data
                updateCartHTML(); // Render the cart items
            }
        });
};

initApp(); // Run the app initialization function
