var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var buttons = document.querySelectorAll(".plan .button");
var modalActionButtons = document.querySelectorAll('.modal__action');

for(var i = 0; i < buttons.length; i++){
   
    buttons[i].addEventListener('click', function(){
        // modal.style.display = "block";

        // adding classes is prefered way to manipulate visual presentation on page by js
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
    modal.classList.remove('open');
}

var hamburgerButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector('.mobile-nav')

hamburgerButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = "block";

    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

// Important when using this option to check code
// styles do not have - like in css for example
// background-image will be backgroundImage
// that is cause variables are invalid if they contain dash
// but you can use style['class-name'] to use simple css syntax in java script
console.dir(backdrop.style['background-image']);


