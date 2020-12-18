const links = document.getElementsByClassName('menu-button');
const homeSection = document.getElementsByName('home');
const header = document.getElementsByClassName('header');


// #SmoothScroll
for(link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    })
  })
}


// #Active-menu button
for(i = 0; i < links.length; i++){
  links[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active__menu-btn');
    current[0].className = current[0].className.replace(" active__menu-btn", "");
    this.className += " active__menu-btn"
  })
}


// #Toggle fixed header

window.addEventListener('scroll', function() {
  const scroll = window.offset;

  if (scroll >= homeSection.offsetHeight) {
    header.classList.add('fixed');
  } else {
    // header.classList.remove('fixed');
  }

  if (scroll >= homeSection) {
    header.classList.add('in-view');
  } else {
    // header.classList.remove('in-view');
  }
})
console.log(homeSection.clientHeight)


