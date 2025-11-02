document.addEventListener('DOMContentLoaded', () => {

    
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');


    function openMenu() {
        if (mobileNavOverlay) {
            mobileNavOverlay.classList.add('active');
        }

        document.body.classList.add('no-scroll');
    }


    function closeMenu() {
        if (mobileNavOverlay) {
            mobileNavOverlay.classList.remove('active');
        }

        document.body.classList.remove('no-scroll');
    }


    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }


    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

});
