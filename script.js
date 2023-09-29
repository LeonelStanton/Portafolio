/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// Función para actualizar la apariencia del encabezado
function updateHeaderAppearance() {
    if (window.innerWidth > 768) {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('header-active');
        header.classList.remove('header-normal');
    } else {
        header.classList.add('header-normal');
        header.classList.remove('header-active');
    }
}
}


function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 110;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        } else {
            document.querySelector(`header nav a[href="#${id}"]`).classList.remove('active');
        }
    });
}

// Manejo del evento de desplazamiento
window.addEventListener('scroll', () => {
    updateHeaderAppearance();
    efectoHabilidades();
    highlightActiveNavLink();
});



/*==================== scroll reveal ====================*/

ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-tskills, .izquierda', { origin: 'left' });
ScrollReveal().reveal('.home-content p,  .about-pskills, .derecha', { origin: 'right'});


/*==================== typed js ====================*/



document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.multiple-text', {
        strings: ['FrontEnd Developer', 'Future Backend Developer', 'Estudiante de Ingeniería'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});


function efectoHabilidades() {
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        const habilidades = document.querySelectorAll(".progreso");

        // Array de clases CSS que se agregarán a los elementos
        const clasesCSS = [
            "html",
            "css",
            "javascript",
            "react",
            "node",
            "mongo",
            "java",
            "python",
            "comunicacion",
            "trabajo",
            "creatividad",
            "dedicacion",
            "proyect",
            "logica"
        ];

       
        habilidades.forEach((habilidad, index) => {
            habilidad.classList.add(clasesCSS[index]);
        });
    }
}



function createBox() {
    if (window.innerWidth > 768) {
    let span = document.createElement('span');

    span.classList.add('animated-box');

    let size = Math.random() * 80;

    span.style.height = 40 + size + 'px';
    span.style.width = 40 + size + 'px';

    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';

    document.querySelector('.home').appendChild(span);
    span.addEventListener('click', () => {
        span.remove(); // Eliminar la caja al hacer clic en ella
    });
    setTimeout(() =>{
        span.remove();
    },3000)
    }
}

setInterval(createBox, 600);