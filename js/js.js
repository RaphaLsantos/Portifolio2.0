/*efeito digitar*/
const textElement = document.querySelector('.txt_home');
const text = "Olá, meu nome é Raphael Silva!";
const typingSpeed = 100;

let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}
typeText();
/*efeito digitar*/



// efeito arrow certificados
let arrowContainers = document.querySelectorAll('.arrow_certificado');
let arrows = document.querySelectorAll('.arrow_certifiction');
let texts = document.querySelectorAll('.text_certificado');

arrowContainers.forEach((arrowContainer, index) => {
    let arrow = arrows[index];
    let txt = texts[index];

    let originalArrowPosition = arrow.style.left;
    let originalArrowContainerWidth = arrowContainer.style.width;

    arrowContainer.addEventListener('mouseover', function () {
        arrow.style.position = 'relative';
        arrow.style.left = '90%';

        this.style.width = '93%';
        this.style.transition = 'all ease .5s';

        txt.style.display = 'flex';
    });

    arrowContainer.addEventListener('mouseout', function () {
        arrow.style.position = '';
        arrow.style.left = originalArrowPosition;

        this.style.width = originalArrowContainerWidth;
        this.style.transition = 'all ease .5s';

        txt.style.display = 'none';
    });
});
// efeito arrow certificados



//abrir modal certificados
function abrirModal(pdfUrl) {
    var modal = document.getElementById("myModal");
    var iframe = document.getElementById("pdfFrame");
    iframe.src = pdfUrl;
    modal.style.display = "block";
}

function fecharModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//abrir modal certificados




/*carousel inicio certificados*/
let currentIndex = 0;
const cards = document.querySelectorAll('.card_carousel');
const totalCards = cards.length;

function showCard(index) {
    cards.forEach((card, i) => {
        card.style.display = (i >= index && i < index + 2) ? 'flex' : 'none';
    });
}

function navigateCarousel(step) {
    currentIndex = (currentIndex + step + totalCards) % totalCards;
    showCard(currentIndex);
}

document.getElementById('arrow_left').addEventListener('click', function() {
    navigateCarousel(-1); // Retrocede dois cartões
});

document.getElementById('arrow_right').addEventListener('click', function() {
    navigateCarousel(1); // Avança dois cartões
});

// Inicialização
showCard(currentIndex);
/*carousel inicio certificados*/
