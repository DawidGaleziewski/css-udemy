var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var buttons = document.querySelectorAll(".plan .button");
var modalActionButtons = document.querySelectorAll('.modal__action');

for(var i = 0; i < buttons.length; i++){
   
    buttons[i].addEventListener('click', function(){
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

for(var i = 0; i < modalActionButtons.length; i++){
    modalActionButtons[i].addEventListener('click', function(){
        closeModal()
    })
}

backdrop.addEventListener('click', function(){
    mobileNav.classList.remove('open');
    closeModal();
})


function closeModal(){
    backdrop.classList.remove('open');
    if(modal){ 
        modal.classList.remove('open');
    }

}

var hamburgerButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector('.mobile-nav')

hamburgerButton.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})


