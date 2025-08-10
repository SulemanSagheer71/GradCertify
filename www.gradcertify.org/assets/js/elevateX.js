document.addEventListener('DOMContentLoaded', function() {
    // Add decorative shapes to sections within elevate-content only
    const sections = document.querySelectorAll('.elevate-content section');
    
    sections.forEach((section, index) => {
        // Add shapes only to certain sections to avoid overloading the page
        if (index % 2 === 0) {
            const shape1 = document.createElement('div');
            shape1.className = 'shape shape-1';
            section.appendChild(shape1);
        } else {
            const shape2 = document.createElement('div');
            shape2.className = 'shape shape-2';
            section.appendChild(shape2);
        }
    });
    
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                faqItem.querySelector('.faq-toggle').textContent = '+';
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                toggle.textContent = '−';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe all animate elements
    const animateElements = document.querySelectorAll('.animate');
    animateElements.forEach(el => observer.observe(el));
    
    // Company logo hover effects
    const companyLogos = document.querySelectorAll('.company-logo');
    companyLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Stats counter animation (if needed in future)
    function animateStats() {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        card.classList.add('animate-in');
                    }
                });
            });
            observer.observe(card);
        });
    }
    
    animateStats();
}); 