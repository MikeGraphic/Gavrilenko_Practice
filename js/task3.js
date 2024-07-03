function checkInput() {
    const baseValue = 10;
    var input = document.getElementById('inputCheck');
    var remainingCount = document.getElementById('remainingCount');
    var remaining = baseValue - input.value.length;
    remainingCount.innerText = remaining >= 0 ? 'Осталось символов: ' + remaining : 'x Превышено символов: ' + Math.abs(remaining);
    remainingCount.style.color = remaining >= 0 ? 'black' : 'red';
}