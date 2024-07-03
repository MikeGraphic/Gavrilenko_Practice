let currentDate = document.getElementById('currentDate');
let today = new Date();
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let dateStr = today.toLocaleDateString('ru-RU', options);
dateStr = dateStr.replace(' г.', ' года');
currentDate.textContent = `Сегодня: ${dateStr}`;

let daySelect = document.getElementById('day');
let monthSelect = document.getElementById('month');
let yearSelect = document.getElementById('year');
let eventDate = document.getElementById('eventDate');

let months = Array.from({length: 12}, (v, i) => {
    return new Date(0, i).toLocaleString('ru-RU', {month: 'long'});
});

for (let i = 0; i < months.length; i++) {
    let option = document.createElement('option');
    option.value = i + 1;
    option.text = months[i];
    monthSelect.appendChild(option);
}

for (let i = 1900; i <= new Date().getFullYear(); i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}

function updateDays() {
    let month = monthSelect.value;
    let year = yearSelect.value;
    let daysInMonth = new Date(year, month, 0).getDate();

    let currentDay = daySelect.value;

    daySelect.innerHTML = '';

    for (let i = 1; i <= daysInMonth; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }

    if (currentDay <= daysInMonth) {
        daySelect.value = currentDay;
    } else {
        daySelect.value = daysInMonth;
    }

    updateEventDate();
}

function getDeclension(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function updateEventDate() {
    let year = yearSelect.value;
    let month = monthSelect.value - 1;
    let day = daySelect.value;
    let eventDateObj = new Date(year, month, day);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (eventDateObj.getTime() === today.getTime()) {
        eventDate.textContent = 'Событие произошло сегодня';
    } else if (eventDateObj > today) {
        eventDate.textContent = 'Событие еще не произошло';
    } else {
        let diff = today - eventDateObj;
        let yearsDiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        let monthsDiff = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        let daysDiff = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

        let yearsStr = yearsDiff > 0 ? `${yearsDiff} ${getDeclension(yearsDiff, ['год', 'года', 'лет'])}` : '';
        let monthsStr = monthsDiff > 0 ? `${monthsDiff} ${getDeclension(monthsDiff, ['месяц', 'месяца', 'месяцев'])}` : '';
        let daysStr = daysDiff > 0 ? `${daysDiff} ${getDeclension(daysDiff, ['день', 'дня', 'дней'])}` : '';

        let parts = [yearsStr, monthsStr, daysStr].filter(Boolean);
        let lastPart = parts.pop();
        eventDate.textContent = `Событие произошло ${parts.join(', ')} ${parts.length > 0 ? 'и' : ''} ${lastPart} назад`.trim();
    }
}


daySelect.onchange = monthSelect.onchange = yearSelect.onchange = updateEventDate;

monthSelect.onchange = yearSelect.onchange = updateDays;

monthSelect.value = today.getMonth() + 1;
yearSelect.value = today.getFullYear();
updateDays();
daySelect.value = today.getDate();

updateEventDate();