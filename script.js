document.addEventListener('DOMContentLoaded', () => {
    const featureSection = document.getElementById('features');
    const revealItems = document.querySelectorAll('.reveal-item');
    
    // Calculate the scroll positions where each item should be revealed
    const featureStart = featureSection.offsetTop;
    const viewportHeight = window.innerHeight;
    const totalScrollDistance = featureSection.offsetHeight - viewportHeight;
    const scrollSteps = totalScrollDistance / revealItems.length;
    
    let lastScrollTop = window.scrollY;
    
    function updateReveal() {
        const currentScrollTop = window.scrollY;
        const scrollPosition = currentScrollTop - featureStart;
        const currentStep = Math.floor(scrollPosition / scrollSteps);
        
        // Check if scrolling down
        const isScrollingDown = currentScrollTop > lastScrollTop;
        
        revealItems.forEach((item, index) => {
            // Only add active class when scrolling down
            if (isScrollingDown && index <= currentStep && scrollPosition >= 0 && scrollPosition <= totalScrollDistance) {
                item.classList.add('active');
            }
            // Remove active class when scrolling back up
            else if (!isScrollingDown && index > currentStep) {
                item.classList.remove('active');
            }
        });
        
        lastScrollTop = currentScrollTop;
    }
    
    // Update reveal on scroll
    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateReveal);
    });
    
    // Initial check
    updateReveal();
}); 