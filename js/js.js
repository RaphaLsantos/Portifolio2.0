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


