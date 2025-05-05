
document.addEventListener('DOMContentLoaded', function () {
    // Function to change text content dynamically
    function changeContent() {
        document.getElementById('dynamicText').textContent = 'Changed Heading Text';
    }

    // Function to modify CSS styles via JavaScript
    function changeStyle() {
        document.querySelectorAll('.styleModifier').forEach(function (element) {
            element.style.color = 'red'; 
        });
    }

    // Function to add or remove an element when a button is clicked
    function addRemoveElement() {
        var elementToManipulate = document.getElementById('elementToManipulate');
        var btn = document.querySelector('button:last-child');

        if (elementToManipulate.textContent === 'This is a div that will be manipulated.') {
            elementToManipulate.textContent = 'Added Element';
            btn.textContent = 'Remove Element'; // Change button text
        } else {
            elementToManipulate.remove(); // Remove the div
            btn.textContent = 'Add Element'; // Reset button text
        }
    }
});
