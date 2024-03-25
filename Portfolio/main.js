let menuIcon = document.ATTRIBUTE_NODEquerySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classlist.toggle('fa-solid');
    navbar.classlist.toggle('active')
}

// typed js //

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Digital Marketing', 'Graphic Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});