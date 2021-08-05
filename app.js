const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

//toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
 //Opacity Links       
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + .8}s`;};
            });

//X Burger
        burger.classList.toggle('andrea');
});
}

navSlide();