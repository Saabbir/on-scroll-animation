document.addEventListener('DOMContentLoaded', () => {
    // Original features section
    const featureSection = document.getElementById('features');
    const revealItems = document.querySelectorAll('#features .reveal-item');
    const revealedItems = new Set(); // Track which items have been revealed
    
    // New feature details section
    const featureDetailsSection = document.getElementById('feature-details');
    const detailItems = document.querySelectorAll('#feature-details .feature-detail');
    
    let lastScrollY = window.scrollY;
    
    function updateReveal() {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;
        
        // Handle features section
        if (featureSection) {
            const featureStart = featureSection.offsetTop;
            const viewportHeight = window.innerHeight;
            const totalScrollDistance = featureSection.offsetHeight - viewportHeight;
            const scrollSteps = totalScrollDistance / revealItems.length;
            const scrollPosition = currentScrollY - featureStart;
            const currentStep = Math.floor(scrollPosition / scrollSteps);
            
            // Only reveal items when scrolling down and they haven't been revealed yet
            if (isScrollingDown) {
                revealItems.forEach((item, index) => {
                    if (!revealedItems.has(index) && 
                        ((scrollPosition >= totalScrollDistance && index < revealItems.length) || 
                         (index <= currentStep && scrollPosition >= 0 && scrollPosition <= totalScrollDistance))) {
                        item.classList.add('active');
                        revealedItems.add(index);
                    }
                });
            }
        }

        // Handle feature details section
        if (featureDetailsSection) {
            const detailsStart = featureDetailsSection.offsetTop;
            const viewportHeight = window.innerHeight;
            const totalDetailsDistance = featureDetailsSection.offsetHeight - viewportHeight;
            const detailsSteps = totalDetailsDistance / detailItems.length;
            const detailsScrollPosition = currentScrollY - detailsStart;
            const currentDetailStep = Math.floor(detailsScrollPosition / detailsSteps);
            
            detailItems.forEach((item, index) => {
                const isInRange = detailsScrollPosition >= 0 && detailsScrollPosition <= totalDetailsDistance;
                const isLastItem = index === detailItems.length - 1;
                const isCurrentStep = index === currentDetailStep;
                const isFirstItem = index === 0;
                
                // Show item if:
                // 1. We're at the end and it's the last item
                // 2. It's the current step and we're in the section range
                // 3. We're scrolling up and it's the current step
                // 4. We're at the top of the section and it's the first item
                if ((detailsScrollPosition >= totalDetailsDistance && isLastItem) ||
                    (isCurrentStep && isInRange) ||
                    (!isScrollingDown && isCurrentStep) ||
                    (detailsScrollPosition <= 0 && isFirstItem)) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
        
        lastScrollY = currentScrollY;
    }
    
    // Update reveal on scroll
    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateReveal);
    });
    
    // Initial check
    updateReveal();
}); 