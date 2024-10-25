let botao = document.querySelector('button');

botao.addEventListener('click', function(){
    if(botao.textContent === 'Dark'){
        botao.textContent = 'Light';
        botao.style.backgroundColor = "white";
        botao.style.color = "black";
    }else{
        botao.textContent = 'Dark';
        botao.style.backgroundColor = "black";
        botao.style.color = "white";
    }
})
