function onSubmitRegister(e)
{
   e.preventDefault();
    const userName = document.querySelector("#RegiName").value
    const submitEmail = document.querySelector("#RegiEmailAddres").value
    const submitPassword = document.querySelector("#RegiPassword").value
    const confirmPassword = document.querySelector("#RegiConfirmPassword").value
    if (submitPassword != confirmPassword){
        console.log(submitPassword)
        console.log(confirmPassword)
        alert('Password mismatch')
        return
    }
    let userArr = JSON.parse(localStorage.getItem('userArr')) || [];
    if (isExist(userArr , userName)){
        alert("User already registered")
        return
    }
    data = {userName,submitEmail,submitPassword}
    userArr.push(data);
    localStorage.setItem('userArr', JSON.stringify(userArr));
    alert("You are Registered Successfully")
}
function isExist(userArr , userName){
    for(let  i of userArr){
        if (i?.userName == userName){
            return true
        }
    }
    return false
}

function onSubmitLogin(e)
{
    e.preventDefault();
    const loginEmail = document.querySelector("#LoginEmail").value;
    const loginPassword = document.querySelector("#LoginPassword").value;

    console.log(loginEmail,loginPassword);
    let userArr = JSON.parse(localStorage.getItem('userArr')) || [] ;
    for(let i of userArr)
    {
        if(i?.submitEmail == loginEmail){
            if(i?.submitPassword == loginPassword){
                localStorage.setItem("loggedInUser", JSON.stringify(i));
                window.location.replace("landingPage.html")
                return
            }
        }
    }
    alert("sfjlsfjsf")
}

function checkEmail(e)
{
    e.preventDefault();
    const checkEmail = document.querySelector("#forgotPassEmail").value;
    const NewPassword = document.querySelector("#NewPassword").value;
    const ConfirmNewPassword = document.querySelector("#ConfirmNewPassword").value;
    console.log(NewPassword);
    if (NewPassword != ConfirmNewPassword){
        console.log(NewPassword)
        console.log(ConfirmNewPassword)
        alert('Password mismatch')
        return
    }

    let userArr = JSON.parse(localStorage.getItem('userArr')) || [];
    for(let i of userArr){
        if(i?.submitEmail == checkEmail)
        {
           i.submitPassword = NewPassword;
           localStorage.setItem('userArr', JSON.stringify(userArr));
           alert('Password reset successfullly')
           return 
        }   
    }
    alert('does not exit')
}

