document.getElementById('year').textContent = new Date().getFullYear();

const hamburger = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-menu');
const menu = document.getElementById('mobile-menu');
const links = document.querySelectorAll('.mobile-menu a');

function toggleMenu() {
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
links.forEach(link => link.addEventListener('click', toggleMenu));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 90;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
