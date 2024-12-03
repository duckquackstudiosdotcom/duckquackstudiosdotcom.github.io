// Simple JS for future interactivity (optional)
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page Loaded!");
    
    // Example: Add event listener for hover effect or dynamic content
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            console.log(`Hovered over: ${this.textContent}`);
        });
    });
});
