function selectSquare(event) {
    event.stopPropagation();
    document.getElementById('innerSquare').classList.add('selected');
}

function deselectSquare() {
    document.getElementById('innerSquare').classList.remove('selected');
}

document.addEventListener('click', deselectSquare);

var colors = ['#ffffff', '#e74949', '#50cb45', '#e19743', '#eb82f7', '#f2f044', '#6c62fa', '#ffb5e5', '#cbffe5', '#83f4c9'];

document.addEventListener('keydown', function(event) {
    var square = document.getElementById('innerSquare');
    if (square.classList.contains('selected')) {
        var width = square.offsetWidth;
        var height = square.offsetHeight;
        if (event.key === 'ArrowRight' && width < 320) {
            square.style.width = (width + 10) + 'px';
        } else if (event.key === 'ArrowLeft' && width > 50) {
            square.style.width = (width - 10) + 'px';
        } else if (event.key === 'ArrowUp' && height < 180) {
            square.style.height = (height + 10) + 'px';
        } else if (event.key === 'ArrowDown' && height > 50) {
            square.style.height = (height - 10) + 'px';
        } else if (event.key >= '0' && event.key <= '9') {
            square.style.backgroundColor = colors[event.key];
        }
        event.preventDefault();
    }
});