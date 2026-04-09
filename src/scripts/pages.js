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

//Giro flip-cards
document.addEventListener("click", (e) => {
    if (e.target.closest(".flip-card-front")) {
        e.target.closest(".flip-card-inner").classList.add("rotated")
    } else if (e.target.closest(".flip-card-back")) {
        e.target.closest(".flip-card-inner").classList.remove("rotated")
    }
})