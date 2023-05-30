const top__btnWrapper = document.querySelectorAll(".top__btn-wrapper .section__btn"),
    bottom__btnWrapper= document.querySelectorAll(".bottom__btn-wrapper .section__btn");



top__btnWrapper.forEach((el) => {
    el.addEventListener("click", (e) => {
        top__btnWrapper.forEach((el) => {
            el.classList.remove("section__btn-active")
        })
        el.classList.add("section__btn-active")
    })
})

bottom__btnWrapper.forEach((el) => {
    el.addEventListener("click", (e) => {
        bottom__btnWrapper.forEach((el) => {
            el.classList.remove("section__btn-active")
        })
        el.classList.add("section__btn-active")
    })
})