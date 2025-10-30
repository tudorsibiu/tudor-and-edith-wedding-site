// script.js - JS de pe demo (smooth scroll + form submit)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// RSVP Form (Sheets integration)
const form = document.getElementById('rsvpForm');
const status = document.getElementById('status');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.honeypot.value) return; // Anti-bot

    const data = new FormData(form);
    const params = new URLSearchParams(data);

    try {
        const response = await fetch('YOUR_WEB_APP_URL_HERE', { // Înlocuiește cu URL-ul tău Google Script
            method: 'POST',
            body: params
        });
        const result = await response.json();
        status.textContent = result.status === 'success' 
            ? '✅ RSVP trimis! Mulțumim! 🏔️' 
            : '❌ Eroare – încearcă din nou.';
        if (result.status === 'success') form.reset();
    } catch (err) {
        status.textContent = 'Eroare conexiune.';
    }
});

// Parallax hero (cloned light effect)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.getElementById('home');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});
