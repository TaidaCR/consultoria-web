import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

//swiper metodologia
export function initSwiper() {
    const swiper = new Swiper('.metodology-swiper', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 }
        }
    });
}

document.addEventListener('astro:page-load', () => {
    initSwiper();
})

//Giro flip-cards
document.addEventListener("click", (e) => {
    if (e.target.closest(".flip-card-front")) {
        e.target.closest(".flip-card-inner").classList.add("rotated")
    } else if (e.target.closest(".flip-card-back")) {
        e.target.closest(".flip-card-inner").classList.remove("rotated")
    }
})

document.addEventListener('astro:page-load', () => {
    //Counter
    const elContador = document.getElementById('counter-num');
    const objetivo = 42;
    let actual = 0;
    let retrasoInicial = 350;
    let retraso = retrasoInicial;
    let animacionEnCurso = false;

    function actualizarContador() {
        actual++;
        elContador.innerText = actual;

        if (actual < objetivo) {
            retraso = retraso * 0.92;

            setTimeout(actualizarContador, retraso);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            if (!animacionEnCurso) {
                animacionEnCurso = true;
                actual = 0;
                retraso = retrasoInicial;
                actualizarContador();
            }
        }
    }, { threshold: 1.0 });

    if (elContador) {
        observer.observe(elContador);
    }
})
