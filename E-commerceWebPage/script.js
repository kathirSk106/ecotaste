var popups = document.querySelector(".signup")
var overlay = document.querySelector(".overlay")
var login = document.querySelector(".login")
function show(){
    popups.style.display="block"
    overlay.style.display="block"
}

function s_submit(){
     popups.style.display="none"
    overlay.style.display="none"
    login.style.display="none"
}
function loginshow(){
   login.style.display="block"
   overlay.style.display="block"
}