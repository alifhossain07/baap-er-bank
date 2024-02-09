// Step-1 ( add Event Handler)
document.getElementById("btn-submit").addEventListener("click", function(){
    console.log("submit button clicked");
    // step -2 (Get the email address inside the input field)
    // always remember to use .value to get text from input field
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    

    // step 3- Get Password
    // 3.a  set id on the html element
    // 3.b  get the element
    // 3.c  get the value from the element
    const passField = document.getElementById("user-pass");
    const pass = passField.value;
  

    // DO NOT VERIFY email pass on the client side
    // Step -4 (Verify Email and Pass)
    if(email === 'alif.iubat@gmail.com' && pass === '1324')
    {
        window.location.href = 'bank.html';
    }
    else{
       alert("Sorry! Wrong ID or Pass, Try again");
    }

})