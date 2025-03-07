document.addEventListener('DOMContentLoaded', () => {
    const pathCards = document.querySelectorAll('.path-card');
    const pathContent = document.getElementById('path-content');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelector('.nav-links');

    // Path card hover and click functionality (unchanged)
    pathCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) translateY(-5px)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'none';
            }
        });

        card.addEventListener('click', () => {
            const pathId = card.getAttribute('data-path');
            window.location.href = `path-template.html?path=${pathId}`;
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
                card.setAttribute('aria-pressed', 'true');
            }
        });

        card.addEventListener('blur', () => {
            card.setAttribute('aria-pressed', 'false');
        });
    });

    // Handle path content for path-template.html (unchanged)
    if (window.location.pathname.includes('path-template.html')) {
        const params = new URLSearchParams(window.location.search);
        const pathId = params.get('path');
        if (pathId && learningPaths[pathId]) {
            displayPathContent(learningPaths[pathId]);
        }
    }

    function displayPathContent(path) {
        document.title = `${path.title} - SE Learning Hub`;
        
        const pathIcon = document.querySelector('.path-icon');
        const pathTitle = document.querySelector('.path-title');
        const pathDescription = document.querySelector('.path-description');
        const sectionsContainer = document.getElementById('sections-container');

        if (pathIcon) pathIcon.innerHTML = `<i class="${path.icon || 'fas fa-graduation-cap'}" aria-hidden="true"></i>`;
        if (pathTitle) pathTitle.textContent = path.title;
        if (pathDescription) pathDescription.textContent = path.description;

        if (sectionsContainer && path.sections) {
            sectionsContainer.innerHTML = path.sections.map((section, index) => `
                <div class="section" style="animation-delay: ${index * 0.1}s">
                    <h2>${section.title}</h2>
                    <div class="resources">
                        ${section.resources.map(resource => `
                            <div class="resource-card" role="article">
                                <h3>${resource.name}</h3>
                                <span class="platform" role="text">${resource.platform}</span>
                                <span class="type" role="text">${resource.type}</span>
                                ${resource.isLanguage 
                                    ? `<a href="${resource.url}" class="resource-link">Explore Language Path</a>`
                                    : `<a href="${resource.url}" target="_blank" rel="noopener noreferrer" 
                                         class="resource-link" aria-label="Access ${resource.name} on ${resource.platform}">
                                         <i class="fas fa-external-link-alt" aria-hidden="true"></i> Click Here to Access Resource
                                       </a>`
                                }
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    // Mobile menu functionality (consolidated)
    let mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    // If mobileMenuBtn doesn’t exist in HTML, create it
    if (!mobileMenuBtn) {
        mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        nav.insertBefore(mobileMenuBtn, navLinks);
    }

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenuBtn.innerHTML = navLinks.classList.contains('show') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // Handle mobile menu display
    function handleMobileMenu() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            navLinks.classList.add('mobile');
        } else {
            mobileMenuBtn.style.display = 'none';
            navLinks.classList.remove('mobile', 'show');
        }
    }

    handleMobileMenu();
    window.addEventListener('resize', handleMobileMenu);

    // Keyboard navigation for skill buttons (unchanged)
    const skillButtons = document.querySelectorAll('.skill-btn');
    skillButtons.forEach((button, index) => {
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', button.classList.contains('active'));
        
        button.addEventListener('keydown', (e) => {
            let targetButton = null;
            
            switch(e.key) {
                case 'ArrowRight':
                    targetButton = skillButtons[index + 1] || skillButtons[0];
                    break;
                case 'ArrowLeft':
                    targetButton = skillButtons[index - 1] || skillButtons[skillButtons.length - 1];
                    break;
            }
            
            if (targetButton) {
                e.preventDefault();
                targetButton.click();
                targetButton.focus();
            }
        });
    });

    // Scroll to top functionality (unchanged)
    const scrollTopButton = document.querySelector('.scroll-top');
    if (scrollTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });

        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Path navigation for path-template.html (unchanged)
    if (window.location.pathname.includes('path-template.html')) {
        const params = new URLSearchParams(window.location.search);
        const currentPath = params.get('path');
        const pathOrder = ['software-engineering', 'cloud-computing', 'ui-ux', 'qa', 'algorithms', 'mobile-development'];
        const currentIndex = pathOrder.indexOf(currentPath);

        const prevButton = document.getElementById('prevPath');
        const nextButton = document.getElementById('nextPath');

        if (prevButton && nextButton) {
            if (currentIndex <= 0) {
                prevButton.disabled = true;
            } else {
                prevButton.addEventListener('click', () => {
                    window.location.href = `path-template.html?path=${pathOrder[currentIndex - 1]}`;
                });
            }

            if (currentIndex >= pathOrder.length - 1) {
                nextButton.disabled = true;
            } else {
                nextButton.addEventListener('click', () => {
                    window.location.href = `path-template.html?path=${pathOrder[currentIndex + 1]}`;
                });
            }
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    }
});