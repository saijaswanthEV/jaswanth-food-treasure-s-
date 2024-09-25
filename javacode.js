function showAreas(cityId) { 
    const areaLists = document.querySelectorAll('.area-list');
    areaLists.forEach(list => list.style.display = 'none');
    document.getElementById(cityId).style.display = 'block';
    document.getElementById('restaurant-display').style.display = 'none';
}

function showRestaurants(areaId) {
    const restaurantLists = document.querySelectorAll('.restaurant-list');
    restaurantLists.forEach(list => list.style.display = 'none');
    document.getElementById(areaId).style.display = 'block';
    document.getElementById('restaurant-display').style.display = 'block';
}

function rateRestaurant(star, restaurantId) {
    const stars = star.parentElement.querySelectorAll('.star');
    const rating = Array.from(stars).indexOf(star) + 1;

    // Set the rating
    const restaurant = star.closest('.restaurant');
    restaurant.querySelector('.average-rating .average').textContent = rating;

    // Optionally store ratings or update average logic here
}

function submitReview(button) {
    const reviewSection = button.parentElement;
    const textarea = reviewSection.querySelector('textarea');
    const reviewDisplay = reviewSection.querySelector('.reviews-display');

    // Get the review text
    const reviewText = textarea.value.trim();

    if (reviewText) {
        // Create a new review element
        const reviewElement = document.createElement('div');
        reviewElement.textContent = reviewText;
        reviewElement.classList.add('review-item');

        // Append the review to the display area
        reviewDisplay.appendChild(reviewElement);

        // Clear the textarea
        textarea.value = '';

        // Show confirmation message
        alert('Thank you for your review!');

        // Optionally disable the button for a short time
        button.disabled = true;
        setTimeout(() => button.disabled = false, 2000);
    } else {
        alert('Please write a review before submitting.');
    }
}

// Attach event listeners to all submit buttons
document.querySelectorAll('.submit-review').forEach(button => {
    button.addEventListener('click', function() {
        submitReview(this);
    });
});
