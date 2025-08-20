// Theme Toggle Functionality
        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            const themeText = document.getElementById('theme-text');
            const mobileThemeIcon = document.getElementById('mobile-theme-icon');
            const mobileThemeText = document.getElementById('mobile-theme-text');
            
            body.classList.toggle('dark-theme');
            
            if (body.classList.contains('dark-theme')) {
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Light';
                mobileThemeIcon.textContent = '☀️';
                mobileThemeText.textContent = 'Light';
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Dark';
                mobileThemeIcon.textContent = '🌙';
                mobileThemeText.textContent = 'Dark';
                localStorage.setItem('theme', 'light');
            }
        }

        // Load saved theme
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            const themeText = document.getElementById('theme-text');
            const mobileThemeIcon = document.getElementById('mobile-theme-icon');
            const mobileThemeText = document.getElementById('mobile-theme-text');
            
            if (savedTheme === 'dark') {
                body.classList.add('dark-theme');
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Light';
                if (mobileThemeIcon && mobileThemeText) {
                    mobileThemeIcon.textContent = '☀️';
                    mobileThemeText.textContent = 'Light';
                }
            }
        }

        // Mobile Menu Toggle Functions
        function toggleMobileMenu() {
            const overlay = document.getElementById('mobileMenuOverlay');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            const overlay = document.getElementById('mobileMenuOverlay');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close mobile menu when clicking overlay
        document.getElementById('mobileMenuOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeMobileMenu();
            }
        });

        // Newsletter form handler
        function handleNewsletterSubmit(event) {
            event.preventDefault();
            const email = event.target.querySelector('input').value;
            alert(`Thank you for subscribing with email: ${email}`);
            event.target.reset();
        }

        // Smooth scrolling for navigation links
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

        // Loading animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0.1s';
                    entry.target.classList.add('loading');
                }
            });
        }, observerOptions);

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            loadTheme();
            
            document.querySelectorAll('.product-card').forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
                observer.observe(card);
            });
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });