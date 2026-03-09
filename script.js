// Enhanced JavaScript functionality

// Theme persistence
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
});

// Apply saved theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;
};

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar highlighting on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            const id = section.getAttribute('id');
            document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
        } else {
            const id = section.getAttribute('id');
            document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
        }
    });
});

// AOS initialization
AOS.init();

// Scroll-to-top button
const topButton = document.getElementById('scroll-to-top');
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
};

topButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Skill card animations
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('animated');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('animated');
    });
});