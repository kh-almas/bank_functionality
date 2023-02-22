document.getElementById('deposit-btn').addEventListener('click', function (){
    const newDepositField = document.getElementById('deposit-amount');
    const newDepositFieldStringValue = newDepositField.value;
    const newDepositFieldValue = parseFloat(newDepositFieldStringValue);
    newDepositField.value = '';
    if (newDepositFieldValue < 0)
    {
        alert('give a valid number');
        return;
    }

    const totalDeposit = document.getElementById('deposit-total');
    const totalDepositStringValue = totalDeposit.innerText;
    const totalDepositValue = parseFloat(totalDepositStringValue);
    const totalDepositAmount = newDepositFieldValue + totalDepositValue;
    if (isNaN(totalDepositAmount)){
        alert('give a valid number');
        return;
    }
    totalDeposit.innerText = totalDepositAmount;


    const totalBalance = document.getElementById('balance-total');
    const totalBalanceStringValue = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceStringValue);
    const finalBalanceValue = totalBalanceValue + newDepositFieldValue;
    if (isNaN(finalBalanceValue)){
        alert("don't play game");
        return;
    }
    totalBalance.innerText = finalBalanceValue;
})