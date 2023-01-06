var divida = 0;

var maquininha = 0;

var dinheiro = 0;

var percent = 0;

var total = 0;

var divrs = document.getElementById('divatual'); 

function valor() {
    
    divida = document.querySelector('.divida').value;
    maquininha = document.querySelector('.maquininha').value;
    dinheiro = document.querySelector('.dinheiro').value;
    
}

function contapag() {
    
    total = 0;

    percent = maquininha - maquininha * (2/100);
    
    total +=  divida - percent - dinheiro;
    
    total =  parseFloat(total).toFixed(2);
    
    divrs.innerHTML = total;
    
    console.log(total);
    
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

