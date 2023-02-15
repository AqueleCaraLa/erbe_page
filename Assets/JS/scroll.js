// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

const menuItems = document.querySelectorAll('#menu a[href^="#"]');

menuItems.forEach((item) => {
    item.addEventListener('click', scollToIdOnClick);
})

function scollToIdOnClick(event) {
    event.preventDefault();
    const to = getScollTopByHref(event.target) - 80;

    scrollToPositon(to);
}

function scrollToPositon(to) {
    window.scroll({
        top: to, 
        behavior: "smooth",
    });
}

function getScollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}