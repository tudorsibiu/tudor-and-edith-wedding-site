// SCROLL ANIMATIONS
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once successfully animated
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.anim-target');
    animatedElements.forEach(el => observer.observe(el));

    // NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // COUNTDOWN TIMER
    const weddingDate = new Date('June 27, 2026 16:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
});

// LIGHTBOX FUNCTIONALITY
function openLightbox(imageUrl) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = imageUrl;
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// LANGUAGE TRANSLATIONS
const translations = {
    ro: {
        nav_story: "Povestea",
        nav_details: "Detalii",
        nav_rsvp: "Confirmare",
        hero_subtitle: "Se căsătoresc!",
        story_title: "Cum s-a ajuns aici",
        story_1_title: "First date",
        story_1_text: "Wakesurf pe lacul Leman (Geneva).<br>Ne-am văzut, ne-am plăcut, și așa a început.",
        story_2_title: "A zis DA!",
        story_2_text: "Semimaraton Rășinari. Ploaie, noroi, crampe musculare; o zi perfectă pentru o cerere în căsătorie :))<br>Unii treceau linia de finish. Noi treceam linia de start!",
        story_3_title: "Nunta!",
        story_3_text: "Ziua în care sărbătorim alături de voi și începem un nou capitol.",
        details_title: "Despre eveniment",
        details_where_title: "Unde?",
        details_venue_name: "Pensiunea Apuseni Wild",
        details_venue_text: "Petrecerea va avea loc la Apuseni Wild, iar noi vă asigurăm cazarea la <a href='https://apuseniwild.com/' target='_blank' style='color: var(--color-accent); text-decoration: underline;'>Pensiunea Apuseni Wild</a> și la <a href='https://alunul.ro/' target='_blank' style='color: var(--color-accent); text-decoration: underline;'>Pensiunea Alunul</a> (câteva minute de mers pe jos), pe care le-am rezervat deja pentru noi.",
        details_view_location: "Vezi locația",
        details_when_title: "Când?",
        details_when_date: "Sâmbătă, 27.06.2026, Ora 14:00",
        details_when_info: "Vă vom contacta ulterior cu detalii despre check-in",
        details_how_title: "Cum?",
        details_how_relaxed: "Relaxat.",
        details_how_text1: "Ne dorim un eveniment mic, fără stres. Suntem înconjurați doar de familie și prieteni apropiați. Puteți lăsa tocurile și cravata acasă.",
        details_how_pets: "Vă așteptăm cu mic, cu mare, cu costume de baie și cu blănoși.",
        details_how_text2: "Avem piscină și loc de joacă pentru copii. Cățeii sunt bineveniți!",
        details_food_title: "Ce mâncăm?",
        details_food_intro: "Pregătiți-vă papilele gustative pentru o aventură culinară.",
        details_food_cold_label: "Aperitive Reci:",
        details_food_cold_text: "Bunătăți locale și internaționale.",
        details_food_main_label: "Feluri principale:",
        details_food_main_text: "Gulaș, Obrăjori de porc cu piure cu trufe, Mămăliguță cu sarmale.",
        details_food_sweet_label: "Dulce:",
        details_food_sweet_text: "Prăjituri și torturi de la",
        bestman_title: "Cavalerul de Onoare",
        bestman_text: "Campion la lins parchetul degeaba și un mâncău desăvârșit. În ziua cea mare, va fi responsabil de paza verighetelor (sperăm să nu le mănânce).",
        rsvp_title: "No' veniți.. sau?",
        rsvp_text: "Vă rugăm să ne scrieți pe Whatsapp/Whatever dacă veniți, dacă rămâneți peste noapte și dacă aveți un regim alimentar special.",
        rsvp_deadline: "Termen limită de răspuns: 31 martie 2026",
        footer_text: "Construit cu Google Antigravity"
    },
    en: {
        nav_story: "Our Story",
        nav_details: "Details",
        nav_rsvp: "RSVP",
        hero_subtitle: "Are getting married!",
        story_title: "How we got here",
        story_1_title: "First Date",
        story_1_text: "Wakesurfing on Lake Geneva.<br>We saw each other, we liked each other, and so it began.",
        story_2_title: "She said YES!",
        story_2_text: "Rășinari Half Marathon. Rain, mud, muscle cramps; a perfect day for a proposal :))<br>Some were crossing the finish line. We were crossing the starting line!",
        story_3_title: "The Wedding!",
        story_3_text: "The day we celebrate with you and start a new chapter.",
        details_title: "About the Event",
        details_where_title: "Where?",
        details_venue_name: "Apuseni Wild Guesthouse",
        details_venue_text: "The party will take place at Apuseni Wild, and we have secured accommodation for you at <a href='https://apuseniwild.com/' target='_blank' style='color: var(--color-accent); text-decoration: underline;'>Apuseni Wild Guesthouse</a> and <a href='https://alunul.ro/' target='_blank' style='color: var(--color-accent); text-decoration: underline;'>Alunul Guesthouse</a> (a few minutes walk), which we have already booked for us.",
        details_view_location: "View Location",
        details_when_title: "When?",
        details_when_date: "Saturday, 27.06.2026, 14:00",
        details_when_info: "We will contact you later with check-in details",
        details_how_title: "How?",
        details_how_relaxed: "Relaxed.",
        details_how_text1: "We want a small, stress-free event. We are surrounded only by family and close friends. You can leave the heels and ties at home.",
        details_how_pets: "We welcome you with kids, swimsuits, and furry friends.",
        details_how_text2: "We have a pool and a playground for children. Dogs are welcome!",
        details_food_title: "What are we eating?",
        details_food_intro: "Prepare your taste buds for a culinary adventure.",
        details_food_cold_label: "Cold Appetizers:",
        details_food_cold_text: "Local and international delicacies.",
        details_food_main_label: "Main Courses:",
        details_food_main_text: "Goulash, Pork cheeks with truffle mash, Polenta with stuffed cabbage rolls.",
        details_food_sweet_label: "Sweet:",
        details_food_sweet_text: "Cakes and sweets from",
        bestman_title: "The Best Man",
        bestman_text: "Champion at licking the floor for no reason and a complete foodie. On the big day, he will be responsible for guarding the rings (we hope he won't eat them).",
        rsvp_title: "So... are you coming?",
        rsvp_text: "Please write to us on Whatsapp/Whatever if you are coming, if you are staying overnight, and if you have a special diet.",
        rsvp_deadline: "RSVP Deadline: March 31, 2026",
        footer_text: "Built with Google Antigravity"
    }
};

function setLanguage(lang) {
    if (!translations[lang]) return;

    // Update Text
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update Buttons
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Save Preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load Preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'ro';
    setLanguage(savedLang);
});
