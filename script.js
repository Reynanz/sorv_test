var caixas = [];

var valorcaixa = [182, 192, 192, 214.5, 150, 216, 182, 112, 16, 112, 140, 165, 165, 168, 168, 168, 168, 168, 240, 240, 240, 240, 240, 14, 234, 216, 216, 208, 208, 208];

var valorund = [6.5, 8, 8, 6.5, 12.5, 9, 6.5, 4, 16, 4, 5, 7.5, 7.5, 6, 6, 6, 6, 6, 10, 10, 10, 10, 10, 14, 13, 14, 14, 13, 13, 13]

var sum = [];

var csum = 0;

var cont = 0;

function adicionar () {
    
    cont = document.querySelector('.chicabon').value;
    caixas.splice(0, 1, cont);
    cont = document.querySelector('.brigadeiro').value;
    caixas.splice(1, 1,cont);
    cont = document.querySelector('.tablito').value;
    caixas.splice(2, 1, cont);
    cont = document.querySelector('.eskibonbarra').value;
    caixas.splice(3, 1, cont);
    cont = document.querySelector('.mini').value;
    caixas.splice(4, 1, cont);
    cont = document.querySelector('.nutablito').value;
    caixas.splice(5, 1, cont);
    cont = document.querySelector('.chicazero').value;
    caixas.splice(6, 1, cont);
    cont = document.querySelector('.mescladin').value;
    caixas.splice(7, 1, cont);
    cont = document.querySelector('.benjerry').value;
    caixas.splice(8, 1, cont);
    cont = document.querySelector('.frutilly').value;
    caixas.splice(9, 1, cont);
    cont = document.querySelector('.monica').value;
    caixas.splice(10, 1, cont);
    cont = document.querySelector('.morango').value;
    caixas.splice(11, 1, cont);
    cont = document.querySelector('.manga').value;
    caixas.splice(12, 1, cont);
    cont = document.querySelector('.coco').value;
    caixas.splice(13, 1, cont);
    cont = document.querySelector('.uva').value;
    caixas.splice(14, 1, cont);
    cont = document.querySelector('.caja').value;
    caixas.splice(15, 1, cont);
    cont = document.querySelector('.limao').value;
    caixas.splice(16, 1, cont);
    cont = document.querySelector('.maracuja').value;
    caixas.splice(17, 1, cont);
    cont = document.querySelector('.crocante').value;
    caixas.splice(18, 1, cont);
    cont = document.querySelector('.unicorneto').value;
    caixas.splice(19, 1, cont);
    cont = document.querySelector('.mm').value;
    caixas.splice(20, 1, cont);
    cont = document.querySelector('.spotify').value;
    caixas.splice(21, 1, cont);
    cont = document.querySelector('.torcida').value;
    caixas.splice(22, 1, cont);
    cont = document.querySelector('.magnumbite').value;
    caixas.splice(23, 1, cont);
    cont = document.querySelector('.magnumzero').value;
    caixas.splice(24, 1, cont);
    cont = document.querySelector('.classico').value;
    caixas.splice(25, 1, cont);
    cont = document.querySelector('.branco').value;
    caixas.splice(26, 1, cont);
    cont = document.querySelector('.vegano').value;
    caixas.splice(27, 1, cont);
    cont = document.querySelector('.cookies').value;
    caixas.splice(28, 1, cont);
    cont = document.querySelector('.praline').value;
    caixas.splice(29, 1, cont);
    
    console.log(caixas);
}

function somarcaixa () {
    
    csum = 0;
    sum.length = 0
    for (let i =0; i <caixas.length; i++){
        sum.push(valorcaixa[i] * caixas[i]);
        
    }
    for (let i = 0; i <caixas.length; i++){
        csum += sum[i];
    }
    csum += csum*(2/100)
    
    document.getElementById('total').innerHTML = csum;
    
    console.log(csum);
    
}

function somarund () {
    csum = 0;
    sum.length = 0
    for (let i =0; i <caixas.length; i++){
        sum.push(valorund[i] * caixas[i]);
        
    }
    for (let i = 0; i <caixas.length; i++){
        csum += sum[i];
    }
    
    csum += csum * (2 / 100);
    
    document.getElementById('total').innerHTML = csum;
    
    console.log(csum);

    
}

const buttons = document.querySelectorAll('a');
buttons.forEach(btn => { 
          btn.addEventListener('click', function(e) {
              
              let x = e.clientX - e.target.offsetLeft;
              let y = e.clienty - e.target.offsetTop;
              
              let ripples= document.createElement('span'); 
              
              ripples.style.left = x + 'px';
              ripples.style.top = y + 'px';
              
              this.appendChild(ripples);
              
              setTimeout(() => {
                  ripples.remove()
                },1000);
            }) 
    }) 


