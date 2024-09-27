document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.querySelector('.gallery-grid');

    // Load images into the gallery grid if it exists
    if (galleryGrid) {
        const images = [
            'images/example1.jpg',
            'images/example2.jpg',
            'images/example3.jpg'
        ];

        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Gallery Image';
            galleryGrid.appendChild(img);
        });
    }

    // Handle form submission if the form exists
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message submitted. We will get back to you soon!');
        });
    }

    // Toggle navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('visible');
            navMenu.classList.toggle('hidden'); 
            menuToggle.classList.toggle('active');
        });
    }
});
