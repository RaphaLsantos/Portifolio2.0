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


/*efeito arrow certificados*/
let arrow_container = document.getElementById('arrow_animation');
let arrow = document.getElementById('arrow_certifiction');
let txt = document.getElementById('text_certificado')

let originalArrowPosition = arrow.style.left;
let originalArrowContainerWidth = arrow_container.style.width;

arrow_container.addEventListener('mouseover', function () {
    arrow.style.position = 'relative';
    arrow.style.left = '90%';

    this.style.width = '95%';
    this.style.transition = 'all ease .5s';

    txt.style.display = 'flex'
});

arrow_container.addEventListener('mouseout', function () {
    arrow.style.position = '';
    arrow.style.left = originalArrowPosition;


    this.style.width = originalArrowContainerWidth;
    this.style.transition = 'all ease .5s';

    txt.style.display = 'none'
});
/*efeito arrow certificados*/


/*carousel inicio*/
let currentIndex = 0;
const cards = document.querySelectorAll('.card_carousel');
const totalCards = cards.length;

document.getElementById('arrow_left').addEventListener('click', function() {
    navigateCarousel(-2); // Retrocede dois cartões
});

document.getElementById('arrow_right').addEventListener('click', function() {
    navigateCarousel(2); // Avança dois cartões
});

/*carousel final*/