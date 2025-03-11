document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".benefit-item, .plan");

    function showOnScroll() {
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});
document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("navbarLinks").classList.toggle("active");
});
document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("sideMenu").classList.toggle("active");
});

// Fechar a barra lateral se o usuário clicar fora dela
document.addEventListener("click", function(event) {
    const sideMenu = document.getElementById("sideMenu");
    const menuToggle = document.getElementById("menuToggle");

    // Verifica se o clique foi fora da barra lateral e do botão do menu hambúrguer
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove("active");
    }
});
