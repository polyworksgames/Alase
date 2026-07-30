// ===== RESOURCES PAGE TAB FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Keyboard accessibility for tabs
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', (e) => {
            let newIndex;
            
            switch(e.key) {
                case 'ArrowRight':
                    e.preventDefault();
                    newIndex = (index + 1) % tabButtons.length;
                    tabButtons[newIndex].focus();
                    tabButtons[newIndex].click();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
                    tabButtons[newIndex].focus();
                    tabButtons[newIndex].click();
                    break;
                case 'Home':
                    e.preventDefault();
                    tabButtons[0].focus();
                    tabButtons[0].click();
                    break;
                case 'End':
                    e.preventDefault();
                    tabButtons[tabButtons.length - 1].focus();
                    tabButtons[tabButtons.length - 1].click();
                    break;
            }
        });
    });

    // External link tracking (optional analytics)
    const resourceLinks = document.querySelectorAll('.resource-link');
    resourceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // You can add analytics tracking here if needed
            console.log('Resource link clicked:', link.href);
        });
    });
});

console.log('🔗 Resources page loaded successfully!');