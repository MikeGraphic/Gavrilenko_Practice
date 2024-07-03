function updateTextStats() {
    var input = document.getElementById('textInput');
    var charCount = document.getElementById('charCount');
    var wordCount = document.getElementById('wordCount');
    var lineCount = document.getElementById('lineCount');
    charCount.innerText = 'Количество символов: ' + input.value.length;
    wordCount.innerText = 'Количество слов: ' + input.value.split(/[\s,.!?;:()]+/).filter(function(word) { return word.length > 0; }).length;
    var lines = input.value.split(/\n/);
    lineCount.innerText = 'Количество строк: ' + (input.value.length > 0 ? lines.length : 0);
}
