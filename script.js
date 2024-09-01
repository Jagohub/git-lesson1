
let showModalButtons = document.querySelectorAll('.show-modal-but');
let hideModalButtons = document.querySelectorAll('.hide-modal-buttons');
let modalWrap = document.querySelectorAll('.modal-wrap');
let chechClickOnmodal = false;
let modal = document.querySelectorAll('.modal');
let circleCross = document.querySelectorAll('.circle-cross');

window.onkeydown = function(event) {  // прибираю модальне вікно (будь-яке відкрите) при натисканні Escape  
    if (event.key === 'Escape') {
        modalWrap.forEach(function (element) {
            if (!element.classList.contains('hide')){
               element.classList.add('hide');
            }
        })
    }    
}

showModalButtons.forEach(function(element) {
    element.onclick = function() {      
        document.querySelector(this.dataset.modal).classList.remove('hide');
    }
});

hideModalButtons.forEach(function(element) {
    element.onclick = function() {
        this.parentElement.parentElement.classList.add('hide');
    }
});

circleCross.forEach(function(element) {
    element.onclick = function() {
        this.parentElement.parentElement.parentElement.classList.add('hide');
    }
});

modal.forEach(function(elem) {   
    elem.onclick = function(){   
        chechClickOnmodal = true;
    }    
})

modalWrap.forEach(function(elem) {      
    elem.onclick = function(){
        if(!chechClickOnmodal){
            this.classList.add('hide');
        }       
        chechClickOnmodal = false;    }
})

