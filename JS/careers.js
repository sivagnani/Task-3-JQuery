function require(text){
    if(text==""){
        return false;
    }
    else{
        return true;
    }
}
function validateName(){
    let name = document.getElementById('name').value;
    const validname =/^[a-zA-Z\s]{4,}$/;
    if(require(name)){
        if(name.match(validname)){
            document.getElementById('nameError').innerHTML="";
            return true;
        }
        else{
            document.getElementById('nameError').innerHTML="Enter valid Name";
            return false;
        }
    }
    else{
        document.getElementById('nameError').innerHTML="Name is required";
        return(false);
    }
}
function genderCheck(message) {
    document.getElementById('genderError').innerHTML="";
    alert("Hello "+message);
}
function requireGender(){
    if(document.getElementById('male').checked || document.getElementById('female').checked){
        document.getElementById('genderError').innerHTML="";
        return true;
    }
    else{
        document.getElementById('genderError').innerHTML="Please select Gender";
        return false;
    }
}
function validateContact(req){
    let number = document.getElementById('contact').value;
    const validnumber =/^[0-9]{10}$/;
    if(number.match(validnumber) || number==""){
        if(req==1 && number==""){
            document.getElementById('contactError').innerHTML="Please Enter Mobile Number";
            return false;
        }
        else{
            document.getElementById('contactError').innerHTML="";
            return true;
        }
    }
    else{
        document.getElementById('contactError').innerHTML="Enter valid Mobile Number";
        return false;
    }
}
function validateEmail(req){
    let email = document.getElementById("email").value;
    const mail = /^[a-zA-Z0-9.$_*]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]{2,}$/;
    if(email.match(mail) || email==""){
        if(req==1 && email==""){
            document.getElementById('emailError').innerHTML="Please Enter Email";
            return false;
        }
        else{
            document.getElementById("emailError").innerHTML="";
            return true;
        }
    }
    else{
        document.getElementById("emailError").innerHTML = "Enter valid Email";
        return false;
    }
}
function contactbyCheck(contactby){
    if(contactby=="reqContact"){
        document.getElementById('reqContact').innerHTML="*";
        document.getElementById('reqEmail').innerHTML="";
        document.getElementById("emailError").innerHTML="";
        document.getElementById("contactbyError").innerHTML="";
        return validateContact(1);
    }
    else if(contactby=="reqEmail"){
        document.getElementById('reqEmail').innerHTML="*";
        document.getElementById('reqContact').innerHTML="";
        document.getElementById('contactError').innerHTML="";
        document.getElementById("contactbyError").innerHTML="";
        return validateEmail(1);        
    }
    else if(contactby=="reqBoth"){
        document.getElementById('reqContact').innerHTML="*";
        document.getElementById('reqEmail').innerHTML="*";
        document.getElementById("contactbyError").innerHTML="";
        let email = validateEmail(1);
        let number = validateContact(1); 
        return (email && number);
    }
    else{
        return true;
    }
}
function requireContactby(){
    let selected = false;
    if(document.getElementById('mail').checked){
        selected = true;
        return selected && contactbyCheck('reqEmail');
    }
    else if(document.getElementById('mobile').checked){
        selected = true;
        return selected && contactbyCheck('reqContact');
    }
    else if(document.getElementById('both').checked){
        selected = true;
        return selected && contactbyCheck('reqBoth');
    }
    else{
        document.getElementById('contactbyError').innerHTML="Please select a way of contact";
        return false;
    }
}
function reqOrganisation(){
    let organisation = document.getElementById("organisation").value;
    if(require(organisation)){
        document.getElementById("organisationError").innerHTML="";
        return true;
    }
    else{
        document.getElementById("organisationError").innerHTML="Please Enter Organisation Name";
        return false;
    }
}
function changepromo(){
    let val = document.getElementById("state").value;
    if(val){
        document.getElementById("promo").value= val+" - PROMO";
    }
    else{
        document.getElementById("promo").value="";
    }
}
function validateWebsite(){
    let website = document.getElementById("website").value;
    let web = /^www.+[a-zA-Z0-9.]+.[a-zA-Z]$/;
    if(website.match(web) || website==""){
        document.getElementById("websiteError").innerHTML = "";
    }
    else{
        document.getElementById("websiteError").innerHTML = "Enter valid Website";
    }
}
function checkForm(){
    let name = validateName();
    let gender = requireGender();
    let number = requireContactby();
    let organisation = reqOrganisation();
    if(name && gender && number && organisation){
        document.getElementById("status").style.color="green";
        document.getElementById("status").innerHTML="Success";
        document.getElementById("details").reset();
    }
    else{
        document.getElementById("status").style.color="red";
        document.getElementById("status").innerHTML="Enter valid Inputs";
    }
}
function resetForm(){
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("contactError").innerHTML = "";
    document.getElementById("organisationError").innerHTML = "";
    document.getElementById("contactbyError").innerHTML = "";
    document.getElementById("websiteError").innerHTML = "";
    document.getElementById("status").innerHTML = "";
    document.getElementById("details").reset();
}