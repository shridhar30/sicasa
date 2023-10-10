// JavaScript (script.js)

// Function to show event popup
window.onload = function () {
function showEventPopup(title, description, registrationLink) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-description").textContent = description;
    document.getElementById("popup-registration-link").href = registrationLink;
    document.getElementById("event-popup").style.display = "block";
    console.log(title)
}}

// Function to close the event popup
function closeEventPopup() {
    document.getElementById("event-popup").style.display = "none";
}

// Function to filter events based on category

// Function to show the pop-up
// Function to show a specific pop-up
function showPopup(popupId) {
    console.log('pop')
    var popup = document.getElementById(popupId);
    popup.style.display = 'block';

    // Add a class to blur the background
    document.body.classList.add('blur-background');
}

// Function to close a specific pop-up
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none';

    // Remove the class to remove the blur effect
    document.body.classList.remove('blur-background');
}

// Add event listeners for each show button
var showButtons = document.querySelectorAll('.showPopupButton');
showButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var popupId = this.getAttribute('data-popup');
        setTimeout(function() {
            popupId.style.maxHeight = '60%';
        }, 10);
    
        // Add a class to blur the background
        document.body.classList.add('blur-background');
        showPopup(popupId);
    });
});

// Add event listeners for each close button
var closeButtons = document.querySelectorAll('.close-popup');
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var popupId = this.getAttribute('id').replace('closePopupButton', '');
        closePopup('popup' + popupId);
    });
});

// Function to filter events based on category
function filterEvents() {
    const selectedCategory = document.getElementById("category").value;
    const eventItems = document.querySelectorAll(".event-item");

    eventItems.forEach((eventItem) => {
        const eventCategory = eventItem.classList[1]; // Assumes the category is the second class name
        if (selectedCategory === "all" || selectedCategory === eventCategory) {
            eventItem.style.display = "block";
        } else {
            eventItem.style.display = "none";
        }
    });
}

// Add event listener to the category dropdown
document.getElementById("category").addEventListener("change", filterEvents);
