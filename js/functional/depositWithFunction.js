
document.getElementById('deposit-btn').addEventListener('click', function (){
    const newDepositFieldValue = valueFromInputField('deposit-amount');
    if (newDepositFieldValue < 0)
    {
        alert('give a valid number');
        return;
    }

    const totalDepositValue = valueFromElement('deposit-total');
    const totalDepositAmount = newDepositFieldValue + totalDepositValue;
    //validation for change value from inspect
    if (isNaN(totalDepositAmount)){
        alert('give a valid number');
        return;
    }
    setElementValue('deposit-total', totalDepositAmount);

    const totalBalanceValue = valueFromElement('balance-total');
    const finalBalanceValue = totalBalanceValue + newDepositFieldValue;
    //validation for change value from inspect
    if (isNaN(finalBalanceValue)){
        alert('give a valid number');
        return;
    }
    setElementValue('balance-total', finalBalanceValue);
})