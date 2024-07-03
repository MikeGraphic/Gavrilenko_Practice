function limitInput() {
    let baseValue = 10;
    let inputLimit = document.getElementById('inputLimit');
    let limitCheck = document.getElementById('limitCheck');
    let limitCount = document.getElementById('limitCount');

    let currentLength = inputLimit.value.length;
    let remainingChars = baseValue - currentLength;

    limitCount.style.color = remainingChars < 0 ? 'red' : 'black';
    limitCount.textContent = remainingChars < 0 ? `x Превышено символов: ${-remainingChars}` : `Осталось символов: ${remainingChars}`;

    limitCheck.checked ? inputLimit.maxLength = baseValue : inputLimit.removeAttribute('maxLength');
}
