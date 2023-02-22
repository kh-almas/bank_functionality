function valueFromInputField(id)
{
    const inputField = document.getElementById(id);
    const inputStringValue = inputField.value;
    const inputFieldValue = parseFloat(inputStringValue);
    inputField.value = '';
    return inputFieldValue;
}

function valueFromElement(element)
{
    const elementValue = document.getElementById(element);
    const totalStringValue = elementValue.innerText;
    const totalValue = parseFloat(totalStringValue);
    return totalValue;
}

function setElementValue(element, value)
{
    const setElementValue = document.getElementById(element);
    setElementValue.innerText = value;
}

// function error(value)
// {
//     if (isNaN(value)){
//         alert('give a valid number1');
//         return;
//     }
// }