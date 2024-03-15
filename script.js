const themeToggle = document.getElementById("themeToggle");
const lightTheme = document.querySelector(".light-mode");
const darkTheme = document.querySelector(".dark-mode");
const lightPhoto = document.querySelector(".light-photo");
const darkPhoto = document.querySelector(".dark-photo");
const favicon = document.querySelector("#favicon");

themeToggle.addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.add("dark-theme");
        lightTheme.style.display = "none"; // Скрываем светлый div
        darkTheme.style.display = "block"; // Показываем темный div
        lightPhoto.style.display = "none"; // Скрываем светлый div
        darkPhoto.style.display = "block"; // Показываем темный div
        favicon.href = "img/logo_white.png";
    } else {
        document.body.classList.remove("dark-theme");
        lightTheme.style.display = "block"; // Показываем светлый div
        darkTheme.style.display = "none"; // Скрываем темный div
        lightPhoto.style.display = "block"; // Показываем светлый div
        darkPhoto.style.display = "none"; // Скрываем темный div
        favicon.href = "img/logo_neg.png";
    }
});

const Toggle = document.getElementById('toggle-wrapper');
const themeToggleContainer = document.getElementById('sidebar');

// Функция для перемещения переключателя в соответствующий контейнер
function moveToggle() {
    if (window.innerWidth <= 768) {
        themeToggleContainer.appendChild(Toggle); // Перемещаем переключатель в контейнер для маленьких устройств
    } else {
        document.getElementById('body').appendChild(Toggle); // Перемещаем переключатель в основной контейнер
    }
}

// Вызываем функцию при загрузке страницы и изменении размера окна
window.addEventListener('load', moveToggle);
window.addEventListener('resize', moveToggle);
