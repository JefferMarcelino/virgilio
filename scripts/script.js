/* carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    loop: true,
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true,
});

/* services */
const clique = document.querySelectorAll("main section#services nav ul li")
const ativo = document.querySelector("main section#services nav ul li.active")

for(const x of clique) {
    x.addEventListener("click", function () {
        const ativo = document.querySelector("main section#services nav ul li.active")
        ativo.classList.remove("active")
        x.classList.add("active")

        /*if (clique[0].classList.contains("active")) {
            seccaocartazes.classList.remove("hide")
        }

        else {
            seccaocartazes.classList.add("hide")
        }
        
        if (clique[3].classList.contains("active")) {
            seccaologomarcas.classList.remove("hide")
        }

        else {
            seccaologomarcas.classList.add("hide")
        }*/
    })
}
