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
const seccaocartazes = document.querySelector("#cartazes")
const seccaocartao = document.querySelector("#cartoes")
const seccaocartoons = document.querySelector("#cartoons")
const seccaologomarca = document.querySelector("#logomarca")

for(const x of clique) {
    x.addEventListener("click", function () {
        const ativo = document.querySelector("main section#services nav ul li.active")
        ativo.classList.remove("active")
        x.classList.add("active")

        if (clique[0].classList.contains("active")) {
            seccaocartazes.classList.remove("hide")
        }

        else {
            seccaocartazes.classList.add("hide")
        }


        if (clique[1].classList.contains("active")) {
            seccaocartao.classList.remove("hide")
        }

        else {
            seccaocartao.classList.add("hide")
        }


        if (clique[2].classList.contains("active")) {
            seccaocartoons.classList.remove("hide")
        }

        else {
            seccaocartoons.classList.add("hide")
        }


        if (clique[3].classList.contains("active")) {
            seccaologomarca.classList.remove("hide")
        }

        else {
            seccaologomarca.classList.add("hide")
        }
    })
}