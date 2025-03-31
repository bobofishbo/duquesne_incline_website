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