const toggleBtn = document.getElementById('toggleBtn');
const leftMenu = document.getElementById('leftMenu');

toggleBtn.addEventListener('click', () => {
    leftMenu.classList.toggle('collapsed');
});

// Responsive JavaScript function
function adjustPageSize() {
    const width = window.innerWidth;
    
    if (width >= 992 && width <= 1600) {
        document.body.style.zoom = "0.9";
    } else if (width >= 700 && width <= 767) {
        document.body.style.zoom = "0.8";
    } else if (width >= 600 && width < 700) {
        document.body.style.zoom = "0.75";
    } else if (width <= 600) {
        document.body.style.zoom = "0.5";
    } else {
        document.body.style.zoom = "1";
    }
}

// Add event listener for window resize
window.addEventListener('resize', adjustPageSize);
// Initial call
adjustPageSize();