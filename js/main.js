var nameInput = document.getElementById("userName")
var emailInput = document.getElementById("userEmail")
var passwordInput = document.getElementById("userPassword")
var logIn = document.getElementById("logIn")
var logOut = document.getElementById("logOut")
var logUp = document.getElementById("logUp")
var home = document.querySelector(".home")
var form = document.querySelector(".for")
var hello = document.getElementById("hello")
var signUp = document.getElementById("signUp")
var signIn = document.getElementById("signIn")
var pIn = document.getElementById("pIn")
var  pUp = document.getElementById("pUp")
var  validly = document.getElementById("validly")
var lastName = ""
var usersList = [];
if(localStorage.getItem("datalist") !=null){
    usersList = JSON.parse(localStorage.getItem("datalist"))
}
function newUser(){
    if(validName() && validPassword() && validEmail()){
        var log =""
        usersList.forEach(e => {
            if(e.email != emailInput.value){
               log=false
            }
            else{
                log=true
            }
        })
        if(log==false){
            var user= {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
            }
            usersList.push(user)
            localStorage.setItem("datalist",JSON.stringify(usersList)) 
            validly.innerHTML="Success"
            validly.classList.add("text-white")
            validly.classList.remove("text-black")
        }
        else{
            validly.innerHTML="email already exists"
            validly.classList.add("text-black")
            validly.classList.remove("text-white")
        }
    }
    else{
        validly.innerHTML="empty or incorrect input"
            validly.classList.add("text-black")
            validly.classList.remove("text-white")
    }
}
signUp.addEventListener('click', function(){
    nameInput.classList.remove("d-none")
    pIn.classList.remove("d-none")
    pUp.classList.add("d-none")
    logIn.classList.add("d-none")
    logUp.classList.remove("d-none")
    clear()
})
signIn.addEventListener('click', function(){
    nameInput.classList.add("d-none")
    pUp.classList.remove("d-none")
    pIn.classList.add("d-none")
    logIn.classList.remove("d-none")
    logUp.classList.add("d-none")
    validly.classList.add("d-none")
    clear()
})
logIn.addEventListener('click', function(){
    usersList.forEach(e => {
        if(e.email ==emailInput.value && e.password==passwordInput.value){
          console.log(hello.innerHTML= "welcome "+e.name);
          home.classList.remove("d-none")
          form.classList.add("d-none")
        }
        else{
            validly.innerHTML="incorrect email or password"
        }
    })
})
logOut.addEventListener('click', function(){
    home.classList.add("d-none")
    form.classList.remove("d-none")
    validly.classList.add("d-none")
    clear()
})
function clear(){
    nameInput.value=''
    emailInput.value=''
    passwordInput.value=''
}
console.log(usersList);
function validName(){
    var rexname = /^\w{2,18}$/gm
    if(rexname.test(nameInput.value)){
        return true;
    }
    else{
        return false
    }
}
function validEmail(){
    var rexemail = /^\w{2,}@\w{2,}\.[a-z]{2,3}$/gm
    if(rexemail.test(emailInput.value)){
        return true;
    }
    else{
        return false
    }
}
function validPassword(){
    var rexpassword = /^(?=.+[0-9])(?=.+[!@#$%^])[a-z A-z 0-9 !@#$%^]{6,18}$/gm
    if(rexpassword.test(passwordInput.value)){
        return true;
    }
    else{
        return false
    }
}