function updateCharacterCount() {
    var input = document.getElementById('characterInput');
    var count = document.getElementById('characterCount');
    count.innerText = 'Количество символов в строке: ' + input.value.length;
}