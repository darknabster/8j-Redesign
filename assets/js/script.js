document.addEventListener('DOMContentLoaded', function () {
    var modalContainer = document.getElementById('modal-container');
    var closeButton = document.getElementById('close-button');

    // Show the modal on page load
    modalContainer.style.display = 'flex';

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        modalContainer.style.display = 'none';
    });

    // Close the modal if the user clicks outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
});