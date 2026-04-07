//LOGICA
document.addEventListener('astro:page-load', () => {
const currentPage = window.location.pathname;
console.log(currentPage)

const navLinksPath = document.querySelectorAll(".nav-link")

navLinksPath.forEach(link =>{
    const linkPath = link.getAttribute("href");
    console.log("LinkPath:", linkPath)

    link.classList.remove("active")

    if(linkPath === currentPage){
        link.classList.add("active")
    }

    console.log("CurrentPage;", currentPage)
})
})
