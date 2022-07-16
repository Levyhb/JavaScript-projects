let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector ("container-password");

let charset = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!@#$%*"; 
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    
    let pass = "" ;
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i ) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    password.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass
}

function copyPassword(){
    navigator.clipboard.writeText(newPassword);
    password.classList.add("tooltipCopy");
    password.id
}
