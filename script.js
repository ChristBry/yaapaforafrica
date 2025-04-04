const navBar = document.getElementById('navBar');
const mobileNav = document.getElementById('mobileNav');
const langDefault = document.getElementById('lang-default')
const selectLang = document.querySelector('.lang-menu')

// Afficher/masquer le menu mobile au clic sur la nav-bar
navBar.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

langDefault.addEventListener('click', () => {
    selectLang.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    const headerContainer = document.querySelector('.header-container');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        headerContainer.classList.add('scrolled');
    } else {
        headerContainer.classList.remove('scrolled');
    }
});

/* Animation */
const ratio1 = .1
const ratio2 = .9
var options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio1,
};

/*animation header */
const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio1) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
        }
    });
}

var observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
});

/* animation about */
const handleIntersectAbout = function (entries, observerAbout) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio1) {
            entry.target.classList.add("revealAbout-visible")
            observerAbout.unobserve(entry.target)
        }
    });
}

var observerAbout = new IntersectionObserver(handleIntersectAbout, options);
observerAbout.observe(document.querySelector('.revealAbout'));

/* animation actualite */
const handleIntersectNews = function (entries, observerNews) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio1) {
            entry.target.classList.add("revealNews-visible")
            observerNews.unobserve(entry.target)
        }
    });
}

var observerNews = new IntersectionObserver(handleIntersectNews, options);
observerNews.observe(document.querySelector('.revealNews'));

/* animation Event */
const handleIntersectEvent = function (entries, observerEvent) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio1) {
            entry.target.classList.add("revealEvent-visible")
            observerEvent.unobserve(entry.target)
        }
    });
}

var observerEvent = new IntersectionObserver(handleIntersectEvent, options);
observerEvent.observe(document.querySelector('.revealEvent'));

/* animation teams */
const handleIntersectTeam = function (entries, observerTeam) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio1) {
            entry.target.classList.add("revealTeam-visible")
            observerTeam.unobserve(entry.target)
        }
    });
}

var observerTeam = new IntersectionObserver(handleIntersectTeam, options);
document.querySelectorAll('.revealTeam').forEach(function (s) {
    observerTeam.observe(s)
})

var observerTeam = new IntersectionObserver(handleIntersectEvent, options);
observerTeam.observe(document.querySelector('.revealEvent'));

/* animation orientation */
const handleIntersectOrientation = function (entries, observerOrientation) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio1) {
            entry.target.classList.add("revealOrientation-visible")
            observerOrientation.unobserve(entry.target)
        }
    });
}

var observerOrientation = new IntersectionObserver(handleIntersectOrientation, options);
document.querySelectorAll('.revealOrientation').forEach(function (s) {
    observerOrientation.observe(s)
})