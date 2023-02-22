document.getElementById('withdrew-btn').addEventListener('click', function (){
    const newWithdrewField = document.getElementById('withdrew-amount');
    const newWithdrewFieldStringValue = newWithdrewField.value;
    const newWithdrewFieldValue = parseFloat(newWithdrewFieldStringValue);
    newWithdrewField.value = '';
    if (newWithdrewFieldValue < 0)
    {
        alert('give a valid number');
        return;
    }

    const totalWithdrew = document.getElementById('withdraw-total');
    const totalWithdrewStringValue = totalWithdrew.innerText;
    const totalWithdrewValue = parseFloat(totalWithdrewStringValue);
    const totalWithdrewAmount = newWithdrewFieldValue + totalWithdrewValue;
    if (isNaN(totalWithdrewAmount)){
        alert('give a valid number');
        return;
    }
    totalWithdrew.innerText = totalWithdrewAmount;


    const totalBalance = document.getElementById('balance-total');
    const totalBalanceStringValue = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceStringValue);
    const finalBalanceValue = totalBalanceValue - newWithdrewFieldValue;
    if (isNaN(finalBalanceValue)){
        alert("don't play game");
        return;
    }
    totalBalance.innerText = finalBalanceValue;
})