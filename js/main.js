// --------Add&Remove body overlay And Prevent&Allow body scroll--------
let bodyOverlay = document.querySelector('body .mb-body-overlay');
function addOverlayAndPreventScroll() {
    document.body.style.overflow = 'hidden';
    bodyOverlay.style.visibility = 'visible';
}
function removeOverlayAndAllowScroll() {
    document.body.style.overflow = 'auto';
    bodyOverlay.style.visibility = 'hidden';
}

// -----------------Mobile Side Menu-----------------
let mbMenuicon = document.querySelector('header .toggle-menu ')
let mbMenuDrawer = document.querySelector('.menu-drawer');
let mbMenuDrawerCloseBtn = document.querySelector('.menu-drawer .drawer-close-btn');
let mbMenuDrawerHeadBtns = document.querySelectorAll('.menu-drawer .drawer-header .mb-tap-title');
let mbMenuDrawerlinks = document.querySelectorAll('.menu-drawer .menu-mb-item');
function openMenuDrawer() {
    mbMenuDrawer.classList.add('active');
    addOverlayAndPreventScroll();
}
function closeMenuDrawer() {
    mbMenuDrawer.classList.remove('active');
    removeOverlayAndAllowScroll();
}
mbMenuicon.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenuDrawer();
});
mbMenuDrawerCloseBtn.addEventListener('click', closeMenuDrawer);
mbMenuDrawer.addEventListener('click', (e) => {
    if (e.target.getAttribute('class') != 'shopy-category-link' && 'mb-menu-tap-link') {
        e.stopPropagation();
    }
});
document.addEventListener('click', (e) => { // close Menu when click anywhere except menu icons and menu drawer
    if (e.target != mbMenuicon && mbMenuDrawer) {
        closeMenuDrawer();
    }
});
function toggleMenuDrawerTabs(e) {
    mbMenuDrawerHeadBtns.forEach((el) => {
        el.classList.remove('active');
    })
    mbMenuDrawerlinks.forEach((el) => {
        el.classList.remove('active');
    })
    e.target.classList.add('active');
    document.querySelector(e.target.dataset.menutab).classList.add('active');
}
mbMenuDrawerHeadBtns[0].addEventListener('click', (e) => {toggleMenuDrawerTabs(e);});
mbMenuDrawerHeadBtns[1].addEventListener('click', (e) => {toggleMenuDrawerTabs(e);});

// ------------------Scroll Top Button--------------------
let scrollTopBtn = document.querySelector('#scroll-top-btn');
document.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// ---------------------Get Copy Right Year------------------------
document.querySelector('footer #get-current-year').textContent = new Date().getFullYear();