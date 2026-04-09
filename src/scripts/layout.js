//burger menu
const burgerLabel = document.querySelector(".burger-label")
const burgerInput = document.getElementById("burguer-menu")
const navBar = document.querySelector(".nav-bar")

burgerInput.addEventListener("click", (e) => {
    console.log(e.target)
    if ( !burgerLabel.classList.contains("turnRound")){
        burgerLabel.classList.add("turnRound")
        console.log("añadido turnround")
    } else {
        burgerLabel.classList.remove("turnRound")
        console.log("eliminada turnround")

    }
})

//nav-link active
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
