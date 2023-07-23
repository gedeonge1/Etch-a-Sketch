document.addEventListener('DOMContentLoaded',() =>{
 
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
    }

}

