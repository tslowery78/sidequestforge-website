document.addEventListener('DOMContentLoaded', () => {
    // Theme management
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Theme persistence is optional; blocked storage must not disable navigation.
    let currentTheme = 'dark';
    try {
        currentTheme = localStorage.getItem('theme') || 'dark';
    } catch {
        // Keep the default when browser storage is unavailable.
    }
    
    function setTheme(theme) {
        if (theme === 'light') {
            html.setAttribute('data-theme', 'light');
            if (themeToggle) themeToggle.textContent = '☀️';
        } else {
            html.removeAttribute('data-theme');
            if (themeToggle) themeToggle.textContent = '🌙';
        }
        currentTheme = theme;
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // Keep theme changes working for this visit without saving them.
        }
    }
    
    // Initialize theme
    setTheme(currentTheme);
    
    // Theme toggle event
    if (themeToggle) themeToggle.addEventListener('click', function() {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Keep the mobile menu's visible and announced state in sync.
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = window.matchMedia('(max-width: 960px)');

    function setMenuOpen(open) {
        if (!navMenu || !navToggle) return;
        navMenu.classList.toggle('active', open);
        navToggle.setAttribute('aria-expanded', String(open));
    }

    if (navMenu && navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            setMenuOpen(!navMenu.classList.contains('active'));
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                setMenuOpen(false);
                navToggle.focus();
            }
        });

        mobileNav.addEventListener('change', function() {
            // Do not leave focus in a menu that becomes hidden on resize.
            if (mobileNav.matches && navMenu.contains(document.activeElement)) {
                navToggle.focus();
            }
            setMenuOpen(false);
        });
    }

    document.addEventListener('click', function(e) {
        if (navMenu && !navMenu.contains(e.target) && navToggle && !navToggle.contains(e.target)) {
            setMenuOpen(false);
        }
    });

    // Keep native fragment navigation and focus behavior for the skip link.
    document.querySelectorAll('a[href^="#"]:not(.skip-link)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            try {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    if (navMenu && navMenu.contains(this) && navMenu.classList.contains('active')) {
                        setMenuOpen(false);
                        // Continue keyboard navigation from the selected section.
                        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
                        target.focus({ preventScroll: true });
                    }
                    target.scrollIntoView({
                        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
                    });
                }
            } catch (error) {
                // Fallback for cases where the href is just "#" or for other errors
                console.warn('Could not scroll to anchor:', error);
            }
        });
    });
});
