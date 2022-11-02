function require(text){
    if(text==""){
        return false;
    }
    else{
        return true;
    }
}
function validateName(){
    let name = $('#name').val();
    const validname =/^[a-zA-Z\s]{4,}$/;
    if(require(name)){
        if(name.match(validname)){
            $('#nameError').text("");
            return true;
        }
        else{
            $('#nameError').text("Enter valid Name");
            return false;
        }
    }
    else{
        $('#nameError').text("Name is required");
        return(false);
    }
}
function genderCheck(message) {
    $('#genderError').text("");
    alert("Hello "+message);
}
function requireGender(){
    if($('#male').prop("checked") || $('#female').prop("checked")){
        $('#genderError').text("");
        return true;
    }
    else{
        $('#genderError').text("Please select Gender");
        return false;
    }
}
function validateContact(req){
    let number = $('#contact').val();
    const validnumber =/^[0-9]{10}$/;
    if(number.match(validnumber) || number==""){
        if(req==1 && number==""){
            $('#contactError').text("Please Enter Mobile Number");
            return false;
        }
        else{
            $('#contactError').text("");
            return true;
        }
    }
    else{
        $('#contactError').text("Enter valid Mobile Number");
        return false;
    }
}
function validateEmail(req){
    let email = $("#email").val();
    const mail = /^[a-zA-Z0-9.$_*]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]{2,}$/;
    if(email.match(mail) || email==""){
        if(req==1 && email==""){
            $('#emailError').text("Please Enter Email");
            return false;
        }
        else{
            $("#emailError").text("");
            return true;
        }
    }
    else{
        $("#emailError").text("Enter valid Email");
        return false;
    }
}
function contactbyCheck(contactby){
    if(contactby=="reqContact"){
        $('#reqContact').text("*");
        $('#reqEmail').text("");
        $("#emailError").text("");
        $("#contactbyError").text("");
        return validateContact(1);
    }
    else if(contactby=="reqEmail"){
        $('#reqEmail').text("*");
        $('#reqContact').text("");
        $('#contactError').text("");
        $("#contactbyError").text("");
        return validateEmail(1);        
    }
    else if(contactby=="reqBoth"){
        $('#reqContact').text("*");
        $('#reqEmail').text("*");
        $("#contactbyError").text("");
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
    if($('#mail').prop("checked")){
        selected = true;
        return selected && contactbyCheck('reqEmail');
    }
    else if($('#mobile').prop("checked")){
        selected = true;
        return selected && contactbyCheck('reqContact');
    }
    else if($('#both').prop("checked")){
        selected = true;
        return selected && contactbyCheck('reqBoth');
    }
    else{
        $('#contactbyError').text("Please select a way of contact");
        return false;
    }
}
function reqOrganisation(){
    let organisation = $("#organisation").val();
    if(require(organisation)){
        $("#organisationError").text("");
        return true;
    }
    else{
        $("#organisationError").text("Please Enter Organisation Name");
        return false;
    }
}
function changepromo(){
    let val = $("#state").val();
    if(val){
        $("#promo").val(val+" - PROMO");
    }
    else{
        $("#promo").val("");
    }
}
function validateWebsite(){
    let website = $("#website").val();
    let web = /^www.+[a-zA-Z0-9.]+.[a-zA-Z]$/;
    if(website.match(web) || website==""){
        $("#websiteError").text("");
    }
    else{
        $("#websiteError").text("Enter valid Website");
    }
}
function checkForm(){
    let name = validateName();
    let gender = requireGender();
    let number = requireContactby();
    let organisation = reqOrganisation();
    if(name && gender && number && organisation){
        $("#status").css("color","green");
        $("#status").text("Success");
        $("#details").trigger("reset");
    }
    else{
        $("#status").css({color:"red"});
        $("#status").text("Enter valid Inputs");
    }
}
function resetForm(){
    $("#nameError").text("");
    $("#genderError").text("");
    $("#emailError").text("");
    $("#contactError").text("");
    $("#organisationError").text("");
    $("#contactbyError").text("");
    $("#websiteError").text("");
    $("#status").text("");
    $("#details").trigger("reset");
}