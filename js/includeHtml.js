document.addEventListener('DOMContentLoaded', function () {
    const includes = document.querySelectorAll('include');
    includes.forEach(include => {
        fetch(include.getAttribute('src'))
            .then(response => response.text())
            .then(data => {
                include.insertAdjacentHTML('afterend', data);
                include.remove();
            });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const blocks = document.querySelectorAll('.fade-in');

    blocks.forEach((block) => {
        // Добавляем класс для запуска анимации
        block.classList.add('fade-in');
    });
});
