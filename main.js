function onScroll() {
    if (scrollY > 0) {
      navegando.classList.add('scroll')
    } else {
      navegando.classList.remove('scroll')
    }
}

function openMenu() {
  document.body.classList.add("menu-expanded")
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
}).reveal(`
#about, 
#ocupation, 
#contact`);
