//*  abre e fecha o menu quando clicar no menu ou no x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//* quando clicar em um item, vai esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//* colocando box-shadow no header quando usar o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

//* testimonials slide
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true, //? usar o mouse para rolar o slide
  keyboard: true, //? usar o teclado para rolar o slide
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//* ScrollReveal - mostrar elementos quando der scroll
// const scrollReveal = ScrollReveal({
//   origin: 'top', // vai vir sempre do top
//   distance: '30px', // vai aparecer com 30px de distancia
//   diration: 7000, // 700 milisegundos
//   reset: true
// })

// scrollReveal.reveal(
//   '#home .image, #home .text, #about .image, #about .text , #services header, #services .card, #testimonials header, #testimonials .testimonials , #contact .text, #contact .links',
//   { interval: 100 }
// )

//* forma que descobri para usar, pois a primeira estava com bug devida as virgulas

let slideUp = {
  origin: 'top', // vai vir sempre do top
  distance: '30px', // vai aparecer com 30px de distancia
  diration: 7000, // 700 milisegundos
  reset: true
}

ScrollReveal().reveal(
  '#home .image, #home .text, #about .image, #about .text , #services header, #services .card, #testimonials header, #testimonials .testimonials , #contact .text, #contact .links, footer .brand, footer .social',
  slideUp
)

//* Button back to top

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

// Menu ativo conforma a seção da página
const sections = document.querySelectorAll('main section[id]')
window.addEventListener('scroll', function () {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
})
