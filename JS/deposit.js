// step-1 add event listener to the deposit button


    document.getElementById("btn-deposit").addEventListener("click",function(){
    console.log("Deposit button clicked");
    // step 2- get the deposit amount from the input
    // for input field, use .value to get the value inside the input field

    const depositField = document.getElementById("deposit-field");
    const depositAmount = depositField.value;
    console.log(depositAmount);

    // step -3 get the current deposit total 
    // for non input(element ither than input, textarea, use innerText to get the text)

    const depositTotalElement = document.getElementById("deposit-total"); 
    // const depositTotal = depositTotalElement.innerText;
    // console.log(depositTotal);
    depositTotalElement.innerText = depositAmount;

})