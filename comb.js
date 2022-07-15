function ValidateEmail(inputText)
{
//var inputText = document.getElementById("email").value;
//alert(inputText)
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
    document.getElementById("alemail").innerHTML = "Valid email address!";
}
else
{
    document.getElementById("alemail").innerHTML = "You have entered an invalid email address!";
    document.getElementById("email").value='';
}
}
function phnoo(evt){
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
if (ASCIICode < 48 || ASCIICode > 57)
    return false;
    else
    return true;
}
function result(){
    ValidateEmail(document.form1.text1);
    check();
    const fName = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phno = document.getElementById('phno').value;
    const gender = document.getElementById('gender').value;
    if(fName === '' || lname === '' || email === '' || phno === ''|| gender === 'gender'){
        document.getElementById('Msg').innerHTML  = "Please enter a valid data";
    }else{
        document.getElementById('Msg').innerHTML = "Registered succesfully";
    }
}
function check() {
    var dob1 = document.getElementById("dob").value;
    var dob = new Date(dob1);
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);
    //extract year from date
    var year = age_dt.getUTCFullYear();
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    //display the calculated age
    if (age <= 13) {
      document.getElementById("demo").innerHTML = "Age is lesser!";
      document.getElementById("demo").value='';
    }
    else{
      document.getElementById("demo").innerHTML = "Age is "+age;
    }
  }
function cancel(){
    document.getElementById("Msg").style.display="none";
    document.getElementById("demo").style.display="none";
    document.getElementById("alemail").style.display="none";
}