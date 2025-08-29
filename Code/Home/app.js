let currentTheme = 'light';


        // Mobile Menu Toggle Functions
        function toggleMobileMenu() {
            const overlay = document.getElementById('mobileMenuOverlay');
            if (overlay) {
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeMobileMenu() {
            const overlay = document.getElementById('mobileMenuOverlay');
            if (overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // Contact button handler
        function handleContactClick() {
            // Smooth scroll to top or open contact form
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // You can replace this with actual contact form logic
            setTimeout(() => {
                alert('Contact form would open here! Email: tushar_sir_09@gmail.com');
            }, 500);
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize loading animations
            const elements = document.querySelectorAll('.loading');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.animationDelay = `${index * 0.1}s`;
                }, index * 100);
            });

            // Add mobile menu overlay click handler
            const overlay = document.getElementById('mobileMenuOverlay');
            if (overlay) {
                overlay.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeMobileMenu();
                    }
                });
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });

        // Add parallax effect on scroll
        window.addEventListener('scroll', function() {
            const footer = document.querySelector('.footer');
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.1;
            
            if (footer && footer.getBoundingClientRect().top < window.innerHeight) {
                footer.style.transform = `translateY(${rate}px)`;
            }
        });