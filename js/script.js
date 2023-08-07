const title = document.querySelector('.luisbragadev');

function typeWriter(element) {
    const arrayText = element.innerHTML.split('');
    element.innerHTML = '';
    arrayText.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 75 * i);
    });
    
}

typeWriter(title);