// Main JavaScript for TechSecure Hub Static Site

// Dark Mode Functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
    
    // Update dark mode toggle icon
    const toggle = document.querySelector('.dark-mode-toggle');
    toggle.textContent = isDark ? '☀️' : '🌙';
}

// Load saved dark mode preference
function loadDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark');
        const toggle = document.querySelector('.dark-mode-toggle');
        if (toggle) toggle.textContent = '☀️';
    }
}

// Mobile Menu Functionality
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('show');
}

// Newsletter Signup Handler
function handleNewsletterSignup(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    if (!email) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Subscribing...';
    button.disabled = true;
    
    // Simulate API call (replace with actual newsletter service)
    setTimeout(() => {
        showMessage('Thank you for subscribing! Check your email for confirmation.', 'success');
        form.reset();
        button.textContent = originalText;
        button.disabled = false;
        
        // Track subscription in analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'newsletter_signup', {
                'event_category': 'engagement',
                'event_label': 'homepage'
            });
        }
    }, 1000);
}

// Search Handler
function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (!query) {
        showMessage('Please enter a search term.', 'error');
        return;
    }
    
    // Redirect to search page with query
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
}

// Message Display Function
function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#10b981';
    } else if (type === 'error') {
        messageDiv.style.backgroundColor = '#ef4444';
    } else {
        messageDiv.style.backgroundColor = '#3b82f6';
    }
    
    document.body.appendChild(messageDiv);
    
    // Animate in
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 5000);
}

// Search Functionality for Search Page
function performSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (query) {
        document.getElementById('searchInput').value = query;
        displaySearchResults(query);
    }
}

// Display Search Results (static implementation)
function displaySearchResults(query) {
    const resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) return;
    
    // Static search data (in a real implementation, this would be dynamic)
    const articles = [
        {
            title: "Advanced Threat Detection: A Complete Guide",
            url: "articles/advanced-threat-detection.html",
            excerpt: "Learn how to implement advanced threat detection systems to protect your organization from sophisticated cyber attacks...",
            category: "Security",
            date: "March 15, 2024"
        },
        {
            title: "Best VPN Services 2024: Security & Privacy Tested",
            url: "articles/best-vpn-review.html",
            excerpt: "Comprehensive review of the top VPN services focusing on security features, privacy policies, and performance...",
            category: "Reviews",
            date: "March 12, 2024"
        },
        {
            title: "Secure Coding Practices Every Developer Should Know",
            url: "articles/secure-coding-practices.html",
            excerpt: "Essential secure coding practices to protect your applications from common vulnerabilities and security threats...",
            category: "Tutorials",
            date: "March 10, 2024"
        },
        {
            title: "Firewall Configuration Best Practices for Small Business",
            url: "articles/firewall-configuration.html",
            excerpt: "Step-by-step guide to configuring firewalls for small business networks to prevent unauthorized access...",
            category: "Security",
            date: "March 8, 2024"
        },
        {
            title: "Password Manager Comparison: 1Password vs Bitwarden vs LastPass",
            url: "articles/password-manager-review.html",
            excerpt: "Detailed comparison of popular password managers focusing on security features, usability, and pricing...",
            category: "Reviews",
            date: "March 5, 2024"
        }
    ];
    
    // Filter articles based on search query
    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase())
    );
    
    // Display results
    if (filteredArticles.length > 0) {
        resultsContainer.innerHTML = `
            <h2>Search Results for "${query}" (${filteredArticles.length} found)</h2>
            <div class="search-results">
                ${filteredArticles.map(article => `
                    <article class="search-result-item">
                        <h3><a href="${article.url}">${article.title}</a></h3>
                        <div class="article-meta">
                            <span>${article.date}</span>
                            <span class="category">${article.category}</span>
                        </div>
                        <p>${article.excerpt}</p>
                    </article>
                `).join('')}
            </div>
        `;
    } else {
        resultsContainer.innerHTML = `
            <h2>No results found for "${query}"</h2>
            <p>Try different keywords or browse our categories:</p>
            <div class="category-links">
                <a href="security.html" class="category-link">Security Guides</a>
                <a href="reviews.html" class="category-link">Product Reviews</a>
                <a href="tutorials.html" class="category-link">Tutorials</a>
            </div>
        `;
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Analytics helper function
function trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Also support other analytics platforms
    if (typeof analytics !== 'undefined') {
        analytics.track(eventName, parameters);
    }
}

// Contact form handler (if contact page exists)
function handleContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Show loading state
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Here you would typically send to a form service like Formspree or Netlify Forms
    // For now, we'll simulate success
    setTimeout(() => {
        showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
        form.reset();
        button.textContent = originalText;
        button.disabled = false;
        
        trackEvent('contact_form_submit', {
            'event_category': 'engagement',
            'event_label': 'contact_page'
        });
    }, 1000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load saved preferences
    loadDarkMode();
    
    // Initialize features
    initSmoothScrolling();
    initLazyLoading();
    
    // Add event listeners for forms
    const newsletterForms = document.querySelectorAll('.newsletter-form, .newsletter-form-mini');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSignup);
    });
    
    const searchForms = document.querySelectorAll('.search-form');
    searchForms.forEach(form => {
        form.addEventListener('submit', handleSearch);
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Handle search page
    if (window.location.pathname.includes('search.html')) {
        performSearch();
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileNav = document.getElementById('mobileNav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (mobileNav && mobileNav.classList.contains('show') && 
            !mobileNav.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            mobileNav.classList.remove('show');
        }
    });
    
    // Track page views
    trackEvent('page_view', {
        'event_category': 'engagement',
        'page_title': document.title,
        'page_location': window.location.href
    });
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
