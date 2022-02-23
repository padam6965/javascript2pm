function fnameValidate() {
    let first_name = document.getElementById('fname').value
    if (first_name == "") {
        displayMsg('First name is mandatory', 'fnameMsg', 'red')
        return false
    }
    else if (!first_name.match(/^([a-zA-Z])+$/)) {
    
        displayMsg('First name only contains alphabet', 'fnameMsg', 'red')
        return false

    }
    else if (first_name.length < 3) {
        displayMsg('First name must be more than 2 character', 'fnameMsg', 'red')
        return false
    }
    else {
        displayMsg('Valid first name', 'fnameMsg', 'green')
        return true
    }
} 

function lnameValidate() {
    let last_name = document.getElementById('lname').value
    if (last_name == "") {
        displayMsg('Last name is mandatory', 'lnameMsg', 'red')
        return false
    }
    else if (!last_name.match(/^([a-zA-Z])+$/)) {
    
        displayMsg('Last name contains only alphabets', 'lnameMsg', 'red')
        return false

    }
    else if (last_name.length < 3) {
        displayMsg('Last name must be more than 2 character', 'lnameMsg', 'red')
        return false
    }
    else {
        displayMsg('Valid last name', 'lnameMsg', 'green')
        return true
    }
} 

function emailValidate() {
    let email = document.getElementById('email').value
    if( email == ""){
        displayMsg('Email is mandatory', 'emailMsg', 'red')
        return false
    }
    else if(!email.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)+(com)/)){
            displayMsg('Invalid email format', 'emailMsg', 'red')
        return false
    }
    
    else {
        displayMsg('Valid email', 'emailMsg', 'green')
        return true
    }
} 

function passwordValidate() { 
    let password = document.getElementById('password').value
    if( password == ""){
        displayMsg('Password is mandatory', 'passwordMsg', 'red')
        return false
    }
    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&-_.?!]).{8,}$/)){
        displayMsg('Password format should be like A@#er 34 and minimum of 8 characters', 'passwordMsg',)

    }
    
    else {
        displayMsg('Valid password', 'passwordMsg', 'green')
        return true
    }
} 
    function displayMsg(msg, id, colorValue) {
        document.getElementById(id).innerHTML = msg
        document.getElementById(id).style.color = colorValue
    }

    function validForm(){
        if(fnameValidate() && lnameValidate() && passwordValidate()){
        return true        
    }
    else{
        return false
    }
    }
   
