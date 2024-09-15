var audioPlayed = false;
var totalcartprice = 0;

document.body.addEventListener('click', function () {
    if (!audioPlayed) {
        var audio = new Audio('sounds/blindkartintro.mp3');
        audio.play();
        audioPlayed = true;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');
    const totalSumDisplay = document.getElementById('total-sum');
    // Check if there are items in the cart stored in local storage
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
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
    function addToCart(productDescription, price) {
        const newItem = { description: productDescription, price: parseFloat(price) };
        savedCartItems.push(newItem);

        // Save the updated cart to local storage
        localStorage.setItem('cartItems', JSON.stringify(savedCartItems));

        // Update the displayed cart items
        switch (productDescription) {
            case "keyboard":
                var aud = new Audio("sounds/keyadd.mp3");
                aud.play();
                break;
            case "stick":
                var aud = new Audio("sounds/stickadd.mp3");
                aud.play();
                break;
            case "myproject":
                var aud = new Audio("sounds/eyeadd.mp3");
                aud.play();
                break;
            case "braille":
                var aud = new Audio("sounds/brailleadd.mp3");
                aud.play();
                break;
        }
        renderCartItems();
    }

    // Function to handle removing items from the cart
    function removeFromCart(productDescription, price) {
        // Find the index of the item in the cart
        const index = savedCartItems.findIndex(item => item.description === productDescription);

        // Remove the item if found
        if (index !== -1) {
            savedCartItems.splice(index, 1);

            // Save the updated cart to local storage
            localStorage.setItem('cartItems', JSON.stringify(savedCartItems));

            // Update the displayed cart items
            switch (productDescription) {
                case "keyboard":
                    var aud = new Audio("sounds/keyrem.mp3");
                    aud.play();
                    break;
                case "stick":
                    var aud = new Audio("sounds/stickrem.mp3");
                    aud.play();
                    break;
                case "myproject":
                    var aud = new Audio("sounds/eyerem.mp3");
                    aud.play();
                    break;
                case "braille":
                    var aud = new Audio("sounds/braillerem.mp3");
                    aud.play();
                    break;
            }

            renderCartItems();
        }
    }

    // Event listener for Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productDescription = this.parentNode.querySelector('span').textContent;
            const price = this.parentNode.querySelector('strong').textContent;
            totalcartprice += parseFloat(price);
            addToCart(productDescription, price);

        });
    });

    // Event listener for Remove from Cart buttons
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart-btn');
    removeFromCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productDescription = this.parentNode.querySelector('span').textContent;
            const price = this.parentNode.querySelector('strong').textContent;
            totalcartprice -= parseFloat(price);
            removeFromCart(productDescription, price);
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
            // Forward the totalcartprice to the billing page
            window.location.href = `billing.html?totalcartprice=${totalcartprice}`;
        }
    });
});
