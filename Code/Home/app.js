// Get elements
 const playBtn = document.getElementById('playBtn');
        const video = document.getElementById('video');
        const videoSource = document.getElementById('videoSource');
        const videoContainer = document.getElementById('videoContainer');
        const background = document.getElementById('background');
        const logo = document.getElementById('logo');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const progressBar = document.getElementById('progressBar');
        const progressFill = document.getElementById('progressFill');
        const timeDisplay = document.getElementById('timeDisplay');
        const particles = document.getElementById('particles');

        // Load the uploaded video
        async function loadVideo() {
            try {
                const videoData = await window.fs.readFile('HiRELY by Hackers United.mp4');
                const blob = new Blob([videoData], { type: 'video/mp4' });
                const videoURL = URL.createObjectURL(blob);
                videoSource.src = videoURL;
                video.load();
            } catch (error) {
                console.error('Error loading video:', error);
                // Fallback to a demo video if upload fails
                videoSource.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
                video.load();
            }
        }

        // Initialize video loading
        loadVideo();

        // Create floating particles
        function createParticles() {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 6 + 's';
                    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                    particles.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 8000);
                }, i * 300);
            }
        }

        // Start particle animation
        createParticles();
        setInterval(createParticles, 6000);

        // Format time helper
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        // Update progress bar
        function updateProgress() {
            const progress = (video.currentTime / video.duration) * 100;
            progressFill.style.width = progress + '%';
            timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        }

        // Play button click
        playBtn.addEventListener('click', () => {
            background.classList.add('blur');
            logo.classList.add('hidden');
            playBtn.classList.add('hidden');
            
            setTimeout(() => {
                videoContainer.classList.add('active');
                video.play();
            }, 400);
        });

        // Play/pause button
        playPauseBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = '⏸';
            } else {
                video.pause();
                playPauseBtn.textContent = '▶';
            }
        });

        // Progress bar click
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const progress = clickX / rect.width;
            video.currentTime = progress * video.duration;
        });

        // Video events
        video.addEventListener('timeupdate', updateProgress);
        
        video.addEventListener('loadedmetadata', () => {
            timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
        });

        video.addEventListener('play', () => {
            playPauseBtn.textContent = '⏸';
        });

        video.addEventListener('pause', () => {
            playPauseBtn.textContent = '▶';
        });

        video.addEventListener('ended', () => {
            playPauseBtn.textContent = '▶';
            progressFill.style.width = '100%';
        });

        // ESC key to exit video
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoContainer.classList.contains('active')) {
                video.pause();
                video.currentTime = 0;
                
                videoContainer.classList.remove('active');
                background.classList.remove('blur');
                logo.classList.remove('hidden');
                playBtn.classList.remove('hidden');
                
                playPauseBtn.textContent = '▶';
                progressFill.style.width = '0%';
            }
        });
let currentTheme = 'light';

        // Theme Toggle Functionality
        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            const themeText = document.getElementById('theme-text');
            const mobileThemeIcon = document.getElementById('mobile-theme-icon');
            const mobileThemeText = document.getElementById('mobile-theme-text');
            
            body.classList.toggle('dark-theme');
            
            if (body.classList.contains('dark-theme')) {
                if (themeIcon) themeIcon.textContent = '☀️';
                if (themeText) themeText.textContent = 'Light';
                if (mobileThemeIcon) mobileThemeIcon.textContent = '☀️';
                if (mobileThemeText) mobileThemeText.textContent = 'Light';
                currentTheme = 'dark';
            } else {
                if (themeIcon) themeIcon.textContent = '🌙';
                if (themeText) themeText.textContent = 'Dark';
                if (mobileThemeIcon) mobileThemeIcon.textContent = '🌙';
                if (mobileThemeText) mobileThemeText.textContent = 'Dark';
                currentTheme = 'light';
            }
        }

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
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                alert('Contact form would open here! Email: tushar_sir_09@gmail.com');
            }, 500);
        }

        // Product details handler
        function showProductDetails(productId) {
            const productInfo = {
                'visionpro-video': {
                    title: 'VisionPro - Video Management Suite',
                    description: 'Advanced video management and surveillance solution with real-time monitoring, intelligent analytics, and seamless integration capabilities.',
                    features: ['Real-time video monitoring', 'AI-powered analytics', 'Cloud storage integration', 'Multi-device access', 'Advanced security protocols']
                },
                'visionpro-access': {
                    title: 'VisionPro - AI Access Control',
                    description: 'Intelligent access control system with facial recognition, biometric authentication, and smart entry management for enhanced security.',
                    features: ['Facial recognition technology', 'Biometric authentication', 'Smart card integration', 'Real-time alerts', 'Visitor management']
                },
                'visionpro-alarm': {
                    title: 'VisionPro - AI Alarm App',
                    description: 'Smart alarm system with AI-driven threat detection, automated responses, and mobile notifications for comprehensive security management.',
                    features: ['AI threat detection', 'Mobile notifications', 'Automated responses', 'Integration with security systems', '24/7 monitoring']
                },
                'eventpro': {
                    title: 'EventPro - Event Management Suite',
                    description: 'Complete event management platform with registration, ticketing, attendee tracking, and real-time analytics for successful event execution.',
                    features: ['Online registration system', 'Ticketing & payment processing', 'Attendee tracking', 'Real-time analytics', 'Mobile event app']
                },
                'unicert': {
                    title: 'UniCert - Blockchain Certification Suite',
                    description: 'Secure blockchain-based certification system for issuing, verifying, and managing digital certificates with tamper-proof technology.',
                    features: ['Blockchain security', 'Digital certificate issuance', 'Instant verification', 'Tamper-proof records', 'Global accessibility']
                },
                'custom-dev': {
                    title: 'Custom Development (Web/Mobile)',
                    description: 'Tailored web and mobile application development services designed to meet your specific business requirements and objectives.',
                    features: ['Custom web applications', 'Mobile app development', 'API integration', 'Responsive design', 'Ongoing support & maintenance']
                }
            };

            const product = productInfo[productId];
            if (product) {
                let message = `${product.title}\n\n${product.description}\n\nKey Features:\n`;
                product.features.forEach(feature => {
                    message += `• ${feature}\n`;
                });
                message += `\nFor more information, contact us at: tushar_sir_09@gmail.com`;
                alert(message);
            }
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

        // Add scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backgroundColor = currentTheme === 'dark' ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = currentTheme === 'dark' ? '#1f2937' : '#ffffff';
                header.style.backdropFilter = 'none';
            }
        });