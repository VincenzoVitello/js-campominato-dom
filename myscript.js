let btn = document.getElementById('btn'); //creo un variabile collegata al bottone, in modo da poterlo richiamare 

btn.addEventListener('click', function(){ //aggiungo un ascoltatore di eventi che al click sul bottone, in base al valore della mia selezione, si comporterà modi diversi
    let selected = document.getElementById('selector').value; //ho creato una variabile che mi permette di impostare un valore diverso in base alla difficoltà selezionata
    let field = document.getElementById('field');
    field.innerHTML = '';
    
    if(selected==1){
        for (let index = 1; index <= 100; index++) {
            field.innerHTML += ` <div class="square square_easy">${index}</div>`
        }
    }else if(selected==2){
        for (let index = 1; index <= 81; index++) {
            field.innerHTML += ` <div class="square square_peasy">${index}</div>`
        }
    }else if(selected==3){
        for (let index = 1; index <= 49; index++) {
            field.innerHTML += ` <div class="square square_lemon_squeeze">${index}</div>`
        }
    }
    let changeColor = document.getElementsByClassName('square');
    for (let index = 0; index < changeColor.length; index++) {
        changeColor[index].addEventListener('click', function(){
            if(this.classList.contains('square_onclick')){
                this.classList.remove('square_onclick')
            }else{
                this.classList.add('square_onclick')
            }
        })
        
    }
});
