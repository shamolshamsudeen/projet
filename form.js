let email=document.getelementById("email");

let error=document.getelementById("error");

function validate()
{
    let regexp = /^(A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).(a-zA-Z0-9\-]+)(.)[A-Z]{2,3})?$/
if(regexp.test(email.value))
{
    error.innerHTML="VALID";
    error.style.colour="green";
    return true;
}
else
{
    error.innerHTML="INVALID";
    error.style.colour="RED";
    return false; 
}

}

