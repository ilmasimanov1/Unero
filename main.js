const navbar = () => {
    const icon = document.querySelector(".hamburger")
    const div = document.querySelector(".menubar")
    icon.addEventListener("click", ()=>{
        div.classList.toggle(".show");
    })
}
navbar();