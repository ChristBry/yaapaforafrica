i18next.init({
    lng: 'fr',
    fallbackLng: 'en',
    resources: {
        fr: {
            translation: {
                welcome: "Accueil",
                about: "À propos",
                contact: "Contact",
                programs: "Programmes",
                news: "Actualités",
                events: "Évènements",
                join: "Adhérer"
            }
        },
        en: {
            translation: {
                welcome: "Home",
                about: "About",
                contact: "Contact",
                programs: "Programs",
                news: "News",
                events: "Events",
                join: "Join"
            }
        }
    }
}).then(() => {
    updateContent(); // Appliquer les traductions initiales
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
        element.innerHTML = i18next.t(key);
    });
}

document.getElementById('language-selector').addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    i18next.changeLanguage(selectedLang, () => {
        updateContent();
        saveLanguagePreference(selectedLang);
    });
});

function saveLanguagePreference(lang) {
    localStorage.setItem('language', lang);
}

function loadLanguagePreference() {
    const savedLang = localStorage.getItem('language') || 'fr';
    i18next.changeLanguage(savedLang, () => {
        updateContent();
        document.getElementById('language-selector').value = savedLang;
    });
}

loadLanguagePreference();
i18next.changeLanguage('fr');