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
    }else if (userInput === '' || userInput === null){
        popupMessage.textContent = 'please provide a number!'
    }else if (isNaN(userInput)){
        popupMessage.textContent = 'Text are not allowed! use number only.'    
    }else{
        popupMessage.textContent = 'Now you can play'
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
        div.addEventListener('mouseover',() => div.style.backgroundColor = 'black');       
    }
    
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
