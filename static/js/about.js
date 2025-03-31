document.addEventListener('DOMContentLoaded', function() {
const timelineNavs = document.querySelectorAll('.timeline-nav');
const timelinePanels = document.querySelectorAll('.timeline-panel');

timelineNavs.forEach(nav => {
    nav.addEventListener('click', function() {
    // Remove active class from all navigation items
    timelineNavs.forEach(item => item.classList.remove('active'));
    
    // Add active class to clicked navigation item
    this.classList.add('active');
    
    // Get panel index
    const index = Array.from(timelineNavs).indexOf(this);
    
    // Hide all panels
    timelinePanels.forEach(panel => panel.style.display = 'none');
    
    // Show selected panel
    timelinePanels[index].style.display = 'block';
    });
});

// Show first panel initially
timelinePanels.forEach((panel, index) => {
    panel.style.display = index === 0 ? 'block' : 'none';
});
});

//js for lightbox modal
document.addEventListener('DOMContentLoaded', function () {
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    // Open the lightbox
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('data-src');
            lightboxImage.src = imgSrc;
            lightboxModal.style.display = 'flex';
        });
    });

    // Close the lightbox
    closeBtn.addEventListener('click', function () {
        lightboxModal.style.display = 'none';
        lightboxImage.src = '';
    });

    // Close the lightbox when clicking outside the image
    lightboxModal.addEventListener('click', function (e) {
        if (e.target === lightboxModal) {
            lightboxModal.style.display = 'none';
            lightboxImage.src = '';
        }
    });
});

