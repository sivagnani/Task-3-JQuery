$(document).ready(function(){
    $('#name').blur(function(){validateName();});
    $('#male').click(function(){genderCheck($(this).val());});
    $('#female').click(function(){genderCheck($(this).val());});
    $('#email').blur(function(){validateEmail();});
    $('#contact').blur(function(){validateContact();});
    $('#organisation').blur(function(){reqOrganisation();});
    $('#state').change(function(){changepromo();});
    $('#mail').click(function(){contactbyCheck($(this).val());});
    $('#mobile').click(function(){contactbyCheck($(this).val());});
    $('#both').click(function(){contactbyCheck($(this).val());});
    $('#website').blur(function(){validateWebsite();});
    $('#checkform').click(function(){checkForm();});
    $('#clearform').click(function(){resetForm();});
});
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
        if(validname.test(name)){
            $('#nameError').html("&nbsp;");
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
    $('#genderError').html("&nbsp;");
    alert("Hello "+message);
}
function requireGender(){
    if($('#male').prop("checked") || $('#female').prop("checked")){
        $('#genderError').html("&nbsp;");
        return true;
    }
    else{
        $('#genderError').text("Please select Gender");
        return false;
    }
}
function validateContact(){
    let number = $('#contact').val();
    const validnumber =/^[0-9]{10}$/;
    if(validnumber.test(number) || number==""){
        if(number==""&&($('#both').prop("checked")||$('#mobile').prop("checked"))){
            $('#contactError').text("Enter Mobile Number");
            return false;
        }
        else{
            $('#contactError').html('&nbsp;');
            return true;
        }
    }
    else{
        $('#contactError').text("Invalid Mobile Number");
        return false;
    }
}
function validateEmail(){
    let email = $("#email").val();
    const mail = /^[a-zA-Z0-9.$_*]+@[a-zA-Z0-9\-]+.[a-zA-Z0-9.]{3,}$/;
    if(mail.test(email) || email==""){
        if(email=="" && ($('#both').prop("checked")||$('#mail').prop("checked"))){
            $('#emailError').text("Enter Email");
            return false;
        }
        else{
            $("#emailError").html('&nbsp;');
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
        $('#reqEmail').html("&nbsp;");
        $("#emailError").html("&nbsp;");
        return validateContact();
    }
    else if(contactby=="reqEmail"){
        $('#reqEmail').text("*");
        $('#reqContact').html("&nbsp;");
        $('#contactError').html("&nbsp;");
        return validateEmail();        
    }
    else if(contactby=="reqBoth"){
        $('#reqContact').text("*");
        $('#reqEmail').text("*");
        let email = validateEmail();
        let number = validateContact(); 
        return (email && number);
    }
    else{
        return true;
    }
}
function requireContactby(){
    if($('#mail').prop("checked")){
        return contactbyCheck('reqEmail');
    }
    else if($('#mobile').prop("checked")){
        return contactbyCheck('reqContact');
    }
    else{
        return contactbyCheck('reqBoth');
    }
}
function reqOrganisation(){
    let organisation = $("#organisation").val();
    if(require(organisation)){
        $("#organisationError").html("&nbsp;");
        return true;
    }
    else{
        $("#organisationError").text("Enter Organisation Name");
        return false;
    }
}
function changepromo(){
    let val = $("#state").val();
    if(val && val!='null'){
        $("#promo").val(val+" - PROMO");
    }
    else{
        $("#promo").val("");
    }
}
function validateWebsite(){
    let website = $("#website").val();
    let web = /^(http(s)?:\/\/)?((www.)?)+[a-zA-Z0-9#!:?+=&%!.\-\/]+\.[a-zA-Z\/]{2,}$/;
    if(web.test(website) || website==""){
        $("#websiteError").html("&nbsp;");
        return true;
    }
    else{
        $("#websiteError").text("Enter valid Website");
        return false;
    }
}
function checkForm(){
    let name = validateName();
    let gender = requireGender();
    let number = requireContactby();
    let organisation = reqOrganisation();
    let web = validateWebsite();
    if(name && gender && number && organisation &&web){
        $("#status").css("color","green");
        $("#status").text("Success");
        $('#reqContact').html("&nbsp;");
        $("#details").trigger("reset");
    }
    else{
        $("#status").css({color:"red"});
        $("#status").text("Enter valid Inputs");
    }
}
function resetForm(){
    $("#nameError").html("&nbsp;");
    $('#reqEmail').text("*");
    $('#reqContact').html("&nbsp;");
    $('#contactError').html("&nbsp;");
    $("#genderError").html("&nbsp;");
    $("#emailError").html("&nbsp;");
    $("#contactError").html("&nbsp;");
    $("#organisationError").html("&nbsp;");
    $("#contactbyError").html("&nbsp;");
    $("#websiteError").html("&nbsp;");
    $("#status").html("&nbsp;");
    $("#details").trigger("reset");
}