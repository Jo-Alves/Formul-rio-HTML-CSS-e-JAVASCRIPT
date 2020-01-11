(function () {
    let box = document.querySelectorAll(".login-box")
    let $user = document.querySelector("#user")
    let $pass = document.querySelector("#pass")
    let button = document.querySelector("button")

    $user.addEventListener("focus", () => {
        box[0].classList.add("active")
        box[1].classList.remove("active")
    })

    $pass.addEventListener("focus", () => {
        box[1].classList.add("active")
        box[0].classList.remove("active")
    })

    button.addEventListener("click", () => {
        if ($user.value && $pass.value) {
            box[1].classList.remove("active")
            box[0].classList.remove("active")
            alert(`Seja bem vindo, ${$user.value}`)
        }
    })
})()