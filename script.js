let colorChoice;

document.addEventListener('DOMContentLoaded',() =>{
    getGridItems(16)
    let selectBtn = document.querySelector('.select-btn')
    selectBtn.addEventListener('click',() => {
        let choice = getPopup();
        getGridItems(choice)
    })
   
})
function getPopup(){
    let userInput = prompt('Choose the size of grids');
    let popupMessage = document.querySelector('#popup-message')
    if (userInput > 100 || userInput < 0){
        popupMessage.textContent = 'Please provide a number between 0 and 100!'
        popupMessage.style.color = 'red'
        popupMessage.style.fontSize = '17px'
    }else if (userInput === '' || userInput === null){
        popupMessage.textContent = 'please provide a number!'
        popupMessage.style.color = 'red'
        popupMessage.style.fontSize = '17px'
    }else if (isNaN(userInput)){
        popupMessage.textContent = 'Text is not allowed! use number only.'  
        popupMessage.style.color = 'red'  
        popupMessage.style.fontSize = '17px'
    }else{
        popupMessage.textContent = 'Now you can play!'
        popupMessage.style.color = 'green'
        popupMessage.style.fontSize = '17px'
        return userInput
    }
}

function getGridItems (size){
    let gridContainer = document.querySelector('.container');
    for(i = gridContainer.children.length - 1; i >= 0; i--){
        let child = gridContainer.children[i]
        gridContainer.removeChild(child)
    };
    let numDiv = size * size;

    for (i= 1; i <= numDiv; i++){
        let div = document.createElement('div');
        gridContainer.appendChild(div);
        div.addEventListener('mouseover', divColor)   
    }
    
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

 function setColor(color){
     colorChoice = color
     
 }

function divColor(event){
    if (colorChoice === 'random'){
        event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }else if(colorChoice === `black`){
        event.target.style.backgroundColor = 'black'
    }else if(colorChoice === 'white'){
        event.target.style.backgroundColor = 'white'
    }
}

function reset(){
    let divs = document.querySelectorAll('div');
    divs.forEach(div => div.style.backgroundColor = 'white')
}