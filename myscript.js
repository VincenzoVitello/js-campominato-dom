let btn = document.getElementById('btn'); //creo un variabile collegata al bottone, in modo da poterlo richiamare 

btn.addEventListener('click', function(){ //aggiungo un ascoltatore che al click sul bottone, in base al valore della mia selezione, si comporterà modi diversi
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
    let changeColor = document.getElementsByClassName('square'); //aggiungo e rimuovo la classe blu
    // for (let index = 0; index < changeColor.length; index++) {
    //     changeColor[index].addEventListener('click', function(){
    //         if(this.classList.contains('square_onclick',)){
    //             this.classList.remove('square_onclick')
    //         }else{
    //             this.classList.add('square_onclick')
    //         }
    //     })
        
    // }
    
    //creo bombe
    const bombs = [];
    const totalBombs = 16;
    let item = document.querySelectorAll('.square');
    bombsGenerator();
    

    function bombsGenerator(){ //creo una funzione che generi 16 bombe casuali, con valore che varia in base alla difficoltà e pusha queste bombe casuali in un array vuoto
        for (let index = 0; index < totalBombs; index++) {
            let randomBombs = Math.floor(Math.random()*item.length+1)
            if(bombs.includes(randomBombs)){
                index--
            }else{
                bombs.push(randomBombs)
            }
        
        }
    }
    console.log(bombs);
    //adesso devo attribuire la classe bomb, agli ementi dell'array, dal momento in cui vengono cliccati
    




});



