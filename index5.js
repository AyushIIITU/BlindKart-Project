document.addEventListener('DOMContentLoaded', function () {
            const cartItemsElement = document.getElementById('cart-items');
            const phonetag = document.getElementById('phone');
            const addresstag = document.getElementById('address');
            var audio; // Declare audio variable outside the event listeners

            phonetag.addEventListener('mouseover', function () {
                audio = new Audio("sounds/enterphonenumber.mp3");
                audio.play();
            });

            addresstag.addEventListener('mouseover', function () {
                audio = new Audio("sounds/enteraddress.mp3");
                audio.play();
            });

            addresstag.addEventListener('mouseleave', function () {
                if (audio) {
                    audio.pause(); // Pause the audio
                    audio.currentTime = 0; // Reset the playback to the beginning
                }
            });

            phonetag.addEventListener('mouseleave', function () {
                if (audio) {
                    audio.pause(); // Pause the audio
                    audio.currentTime = 0; // Reset the playback to the beginning
                }
            });

            const billingForm = document.getElementById('billing-form');
            const totalpriceElement = document.querySelector('.totalprice');
            var cartproduct = '';

            // Extract totalcartprice from URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            const totalcartprice = urlParams.get('totalcartprice');

            // Display totalcartprice on the billing page
            if (totalcartprice !== null) {
                totalpriceElement.textContent = `Total Cart Price: ₹${totalcartprice}`;
            }

            // Retrieve cart items from local storage
            const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            // Function to render cart items on the billing page
            function renderCartItems() {
                savedCartItems.forEach(item => {
                    cartproduct = cartproduct + item.description + " ";
                    const li = document.createElement('li');
                    li.textContent = item.description;
                    cartItemsElement.appendChild(li);
                });
            }

            const submitbutton = document.querySelectorAll("button")[0];
            submitbutton.addEventListener('mouseover', function () {
                audio = new Audio("sounds/checkouttap.mp3");
                audio.play();
            });

            submitbutton.addEventListener('mouseleave', function () {
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });

            // Event listener for form submission
            function validateForm() {
                const address = addresstag.value.trim();
                const phone = phonetag.value.trim();

                if (address === '') {
                    var ad = new Audio("sounds/pleaseaddress.mp3");
                    ad.play();
                } else if (phone === '') {
                    var ph = new Audio("sounds/pleasephone.mp3");
                    ph.play();
                } else {
                    const requestData = {
                        totalcartprice: totalcartprice,
                        cartItems: cartproduct,
                        address: address,
                        phone: phone
                    };
                    fetch('http://localhost:3000/checkout', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(requestData)
                    })
                        .then(function (response) {
                            if (response.ok) {
                                console.log("Server is running!");
                            } else {
                                window.location.href = "sorry.html";
                            }
                        })
                        .catch(error => console.error('Error:', error));

                    window.location.href = 'thankyou.html';
                }
            }

            // Initial rendering of cart items
            renderCartItems();
        });