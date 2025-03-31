document.addEventListener('DOMContentLoaded', function () {
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const faqItem = this.parentElement;

            // Toggle active class
            faqItem.classList.toggle('active');

            // Close other open items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
        });
    });
});