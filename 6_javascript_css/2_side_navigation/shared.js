var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var buttons = document.querySelectorAll(".plan .button");
var modalActionButtons = document.querySelectorAll('.modal__action');

for(var i = 0; i < buttons.length; i++){
   
    buttons[i].addEventListener('click', function(){
        backdrop.style.display = "block";
        modal.style.display = "block";
    })
}

for(var i = 0; i < modalActionButtons.length; i++){
    modalActionButtons[i].addEventListener('click', function(){
        closeModal()
    })
}

backdrop.addEventListener('click', function(){
    // add function to close the mobile nav by clicking bacgdrop as well
    mobileNav.style.display = 'none';
    closeModal();
})

function closeModal(){
    backdrop.style.display = "none";
    modal.style.display = "none";
}

// working on hamburger button
var hamburgerButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector('.mobile-nav')

hamburgerButton.addEventListener('click', function(){
    mobileNav.style.display = 'block';

    // show backdrop so we can use it to close mobile nav
    backdrop.style.display = "block";
})


