// step-1 add event listener to the deposit button


    document.getElementById("btn-deposit").addEventListener("click",function(){
    console.log("Deposit button clicked");
    // step 2- get the deposit amount from the input
    // for input field, use .value to get the value inside the input field

    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount =parseFloat(newDepositAmountString);

    // step -3 get the current deposit total 
    // for non input(element ither than input, textarea, use innerText to get the text)

    const depositTotalElement = document.getElementById("deposit-total"); 
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

//    step -4 add 2 numbers to get the deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    // step -5 Get balence current total

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //step -7 set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    //Step 7 Clear the deposit field
    depositField.value ="";

})
