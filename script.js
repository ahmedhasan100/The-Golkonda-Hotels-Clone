$(document).ready(function(){
    // Apply date picker to the "Arrival Date" input field
    $('#datepickerArrival').datepicker({
        dateFormat: "dd/mm/yy",  
        todayHighlight: true,    
        minDate: 0,             
    });

    // Apply date picker to the "Departure Date" input field
    $('#datepickerDeparture').datepicker({
        dateFormat: "dd/mm/yy",  
        todayHighlight: true,    
        minDate: 1,             
    });

   

    // Scroll check to change navbar background color
    const navbar = document.querySelector('.navbar');
    function checkScroll() {
        if (window.scrollY > 10) {              // If the scroll position is more than 10px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', checkScroll);
});

// Function to show the alert message
window.onload = function() {
    document.getElementById("message").style.display = "block";
}

// Function to close the alert message
function closeMessage() {
    document.getElementById("message").style.display = "none";
}


 // Hamburger menu toggle function
 let hamList = document.getElementById("hamList");
 let video = document.getElementById("video");

 function toggleMenu() {
     // Get the computed style for maxHeight (not inline style)
    let currentMaxHeight = window.getComputedStyle(hamList).maxHeight;
    
        if (currentMaxHeight === "0px") {
            hamList.style.maxHeight = "300px";  // Set desired height when expanded
        } else {
            hamList.style.maxHeight = "0px";  // Collapse the menu back
        }
 }

 // Event listener for the hamburger icon
 $('.ham').click(function() {
     toggleMenu();
 });
    
    