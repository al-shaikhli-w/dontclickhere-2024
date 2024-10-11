document.addEventListener('DOMContentLoaded', function() {
    // Select all "Add to Wishlist" buttons
    const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');

    addToWishlistButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let product_id = this.getAttribute('data-product_id');

            // set the number of items in the wishlist on localStorage
            let wishlistCount = localStorage.getItem('wishlistCount');

            if (wishlistCount) {
                if (wishlistCount >= 0){
                    wishlistCount++;
                }else{
                    wishlistCount = 0;
                }
            } 
            fetch(wishlist_params.ajax_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: 'action=add_to_wishlist&product_id=' + encodeURIComponent(product_id)
            })
                .then(function(response) {
                    return response.text(); // Parse the response as text
                })
                .then(function(responseText) {
                    alert(responseText);
                    localStorage.setItem('wishlistCount', wishlistCount);
                    document.querySelector('.wishlist-count').innerText = wishlistCount;

                })
                .catch(function(error) {
                    console.error('Error:', error); // Log any errors to the console
                });
        });
        
        
    });


    // remove from wishlist
    const removeFromWishlistButtons = document.querySelectorAll('.remove-from-wishlist');
removeFromWishlistButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let product_id = this.getAttribute('data-product_id');

        // set the number of items in the wishlist on localStorage
        let wishlistCount = localStorage.getItem('wishlistCount');

        if (wishlistCount) {
            if (wishlistCount <= 0){
                wishlistCount = 0;
            }else{
                wishlistCount--;
            }
        } 
        // Perform an AJAX request using the Fetch API
        fetch(wishlist_params.ajax_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: 'action=remove_from_wishlist&product_id=' + encodeURIComponent(product_id)
        })
            .then(function(response) {
                return response.text(); // Parse the response as text
            })
            .then(function(responseText) {
                alert(responseText);
                localStorage.setItem('wishlistCount', wishlistCount);
                document.querySelector('.wishlist-count').innerText = wishlistCount;

            })
            .catch(function(error) {
                console.error('Error:', error); // Log any errors to the console
            });
    });
}
);

const wishlistCount = localStorage.getItem('wishlistCount');
const wishNumberElements = document.querySelector('.wishlist-count');
if (wishNumberElements) {
    console.log(wishNumberElements);
    console.log(wishlistCount);
    
    wishNumberElements.innerText = wishlistCount;
}




});
