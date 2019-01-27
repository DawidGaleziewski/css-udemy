var backdrop = document.querySelector(".backdrop");

// important in styles you wont see z-index in devtools, that is  casue in styles you can only see inline styles
// use js to show element
var modal = document.querySelector(".modal");

var buttons = document.querySelectorAll(".plan .button");

for(var i = 0; i < buttons.length; i++){
   
    buttons[i].addEventListener('click', function(){
        backdrop.style.display = "block";
        modal.style.display = "block";
    })
}

var modalActionButtons = document.querySelectorAll('.modal__action');


for(var i = 0; i < modalActionButtons.length; i++){
    modalActionButtons[i].addEventListener('click', function(){
        closeModal()
    })
}

backdrop.addEventListener('click', function(){
    closeModal()
})

function closeModal(){
    backdrop.style.display = "none";
    modal.style.display = "none";
}


