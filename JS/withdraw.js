// 1. add event handler with the withdraw button
// step 1
document.getElementById("btn-withdraw").addEventListener("click",function()
{
    console.log("clicked");
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawFieldValueString = withdrawField.value;
    const withdrawFieldValue = parseFloat(withdrawFieldValueString);
    console.log(withdrawFieldValue);


    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);


    const currentWithdrawTotal = previousWithdrawTotal + withdrawFieldValue;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - withdrawFieldValue;
    balanceTotalElement.innerText = newBalanceTotal;


    withdrawField.value = " ";



})