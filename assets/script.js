document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
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

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message submitted. We will get back to you soon!');
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('visible'); 
        menuToggle.classList.toggle('active');
    });
});


//Keep it professinal now... ~ chiping//