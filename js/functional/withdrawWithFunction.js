document.getElementById('withdrew-btn').addEventListener('click', function (){
    const newWithdrewFieldValue = valueFromInputField('withdrew-amount');
    //validation for change value from inspect
    if (newWithdrewFieldValue < 0)
    {
        alert('give a valid number');
        return;
    }

    const totalWithdrewValue = valueFromElement('withdraw-total')
    const totalWithdrewAmount = newWithdrewFieldValue + totalWithdrewValue;
    if (isNaN(totalWithdrewAmount)){
        alert('give a valid number');
        return;
    }
    setElementValue('withdraw-total', totalWithdrewAmount);

    const totalBalanceValue = valueFromElement('balance-total')
    const finalBalanceValue = totalBalanceValue - newWithdrewFieldValue;
    //validation for change value from inspect
    if (isNaN(finalBalanceValue)){
        alert('give a valid number');
        return;
    }
    setElementValue('balance-total', finalBalanceValue);
})