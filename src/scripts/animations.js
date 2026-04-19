/*ANIMACION DESLIZANDO*/
document.addEventListener('astro:page-load', () => {
    const elemAnimados = document.querySelectorAll(".fade-in-left, .fade-in-right, .fade-in-bottom, .fade-in")
    const observerElemAnimados = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("appear")
                observerElemAnimados.unobserve(entry.target);
            }
        })

    }, { threshold: 0.1 });

    if (elemAnimados) {
        elemAnimados.forEach(el => observerElemAnimados.observe(el))
    }
})