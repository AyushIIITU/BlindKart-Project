document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');
    const topproduct = document.getElementsByClassName('product');

    // Check if there are items in the cart and sum stored in local storage
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalSum = parseFloat(localStorage.getItem('totalSum')) || 0;

    // Function to render the cart items
    function renderCartItems() {
        cartItems.innerHTML = ''; // Clear previous items

        savedCartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.description;
            cartItems.appendChild(li);
        });
    }

    // Function to handle adding items to the cart
    function addToCart(productDescription, productCost) {
        const newItem = { description: productDescription };
        savedCartItems.push(newItem);

        // Update the total sum
        totalSum += parseFloat(productCost);

        // Save the updated cart and total sum to local storage
        localStorage.setItem('cartItems', JSON.stringify(savedCartItems));
        localStorage.setItem('totalSum', totalSum);

        // Update the displayed cart items
        renderCartItems();
    }

    // Function to handle removing items from the cart
    function removeFromCart(productDescription, productCost) {
        // Find the index of the item in the cart
        const index = savedCartItems.findIndex(item => item.description === productDescription);

        // Remove the item if found
        if (index !== -1) {
            savedCartItems.splice(index, 1);

            // Update the total sum
            totalSum -= parseFloat(productCost);

            // Save the updated cart and total sum to local storage
            localStorage.setItem('cartItems', JSON.stringify(savedCartItems));
            localStorage.setItem('totalSum', totalSum);

            // Update the displayed cart items
            renderCartItems();
        }
    }

    // Event listener for Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productDescription = this.parentNode.querySelector('span').textContent;
            const productCost = this.parentNode.querySelector('strong').textContent;
            addToCart(productDescription, productCost);
        });
    });

    // Event listener for Remove from Cart buttons
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart-btn');
    removeFromCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productDescription = this.parentNode.querySelector('span').textContent;
            const productCost = this.parentNode.querySelector('strong').textContent;
            removeFromCart(productDescription, productCost);
        });
    });

    // Initial rendering of cart items
    renderCartItems();

    // Event listener for Checkout button
    checkoutBtn.addEventListener('click', function () {
        // Redirect to the billing website (you should replace 'billing.html' with your actual billing page)

        if (savedCartItems.length === 0) {
            var audio = new Audio('sounds/emptykart.mp3');
            audio.play();
        } else {
            window.location.href = 'billing.html';
        }
    });
});
