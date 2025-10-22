const items = document.querySelectorAll('.projet-item');
items.forEach(item => {
	item.addEventListener('click',() => {
		window.location.href = item.getAttribute('data-link');
	});
});

const posters = document.querySelectorAll('.projet-poster');
posters.forEach(poster => {
	poster.addEventListener('click',() => {
		window.location.href = poster.getAttribute('data-link');
	});
});

const logos = document.querySelectorAll('.projet-logo');
logos.forEach(logo => {
    logo.addEventListener('click',() => {
        window.location.href = logo.getAttribute('data-link');
    });
});

function startCarousel() {
            const carousels = document.querySelectorAll('.carousel-images');
            
            carousels.forEach(carousel => {
                const images = carousel.querySelectorAll('.carousel-img');
                let currentIndex = 0;
                
                function changeImage() {
                    images[currentIndex].classList.remove('active');
                    currentIndex = (currentIndex + 1) % images.length;
                    images[currentIndex].classList.add('active');
                }
                
                setInterval(changeImage, 1500); // Change toutes les 1.5 seconde
            });
        }
        
        window.addEventListener('load', startCarousel);


    // Animation au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.stat-card, .skill-item, .timeline-item , .service-card, .project-preview-card, .stat-item, .project-details , .contact-section').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s, transform 0.6s';
            observer.observe(el);
        });

