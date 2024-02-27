function activateButton(button) {
    // Remove the 'active' class from all buttons
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    button.classList.add('active');

    // Filter job cards based on the button clicked
    var filterId = button.id.toLowerCase(); // Get the ID of the clicked button
    var jobCards = document.querySelectorAll('.job-card');

    jobCards.forEach(function(card) {
        var jobId = card.id.toLowerCase(); // Get the ID of the job card
        if (filterId === 'all' || jobId.includes(filterId)) {
            card.style.display = 'block'; // Show job card if it matches the filter or if the filter is 'All'
        } else {
            card.style.display = 'none'; // Hide job card if it doesn't match the filter
        }
    });
}
