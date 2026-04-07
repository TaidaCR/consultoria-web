import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// Exportamos la función para poder llamarla
export function initSwiper() {
    const swiper = new Swiper('.scenarios-swiper', {
        modules: [Navigation], // ¡Importante en versiones nuevas!
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