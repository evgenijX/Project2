(() => {
    const hamburger = document.getElementById("landing__header-mobile-hamburger");
    const menu = document.getElementById("landing__header-mobile-ul");
    let open = false;

    const change = () => {
        if (!open) {
            hamburger.classList.add("open");
            menu.classList.add("menu");
        } else {
            hamburger.classList.remove("open");
            menu.classList.remove("menu");
        }
        open = !open;
    };

    hamburger.addEventListener("click", change);
})();
