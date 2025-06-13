document.addEventListener('DOMContentLoaded', () => {
    // Theme management
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Set default theme to dark
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    function setTheme(theme) {
        if (theme === 'light') {
            html.setAttribute('data-theme', 'light');
            themeToggle.textContent = '☀️';
        } else {
            html.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
        currentTheme = theme;
    }
    
    // Initialize theme
    setTheme(currentTheme);
    
    // Theme toggle event
    themeToggle.addEventListener('click', function() {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Simple mobile menu toggle
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');

    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });
    }

    document.addEventListener('click', function(e) {
        if (navMenu && !navMenu.contains(e.target) && navToggle && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            try {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                // Fallback for cases where the href is just "#" or for other errors
                console.warn('Could not scroll to anchor:', error);
            }
        });
    });
}); 