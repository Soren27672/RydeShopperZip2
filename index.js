


document.addEventListener('DOMContentLoaded', e => {
    const zipForm = q("#zip-form");
    const logoHeader = q('#logo-header');
    const nav = q('nav');
    const menuIcon = q('#menu-icon');
    const navClose = q('#nav-close');

    zipForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log(e.target.zip.value);
    })

    menuIcon.addEventListener('click', openNav)
    navClose.addEventListener('click', closeNav)

    function openNav() {
        logoHeader.classList.add('hidden');
        logoHeader.classList.remove('visible');
        nav.classList.add('visible');
        nav.classList.remove('hidden');
    }
    
    function closeNav() {
        nav.classList.add('hidden');
        nav.classList.remove('visible');
        logoHeader.classList.add('visible');
        logoHeader.classList.remove('hidden');
    }

})



function q(selector) {
    return document.querySelector(selector);
}