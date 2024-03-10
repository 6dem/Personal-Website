const themeToggle = document.getElementById("themeToggle");
const lightTheme = document.querySelector(".light-mode");
const darkTheme = document.querySelector(".dark-mode");
const lightPhoto = document.querySelector(".light-photo");
const darkPhoto = document.querySelector(".dark-photo");

themeToggle.addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.add("dark-theme");
        lightTheme.style.display = "none"; // Скрываем светлый div
        darkTheme.style.display = "block"; // Показываем темный div
        lightPhoto.style.display = "none"; // Скрываем светлый div
        darkPhoto.style.display = "block"; // Показываем темный div
    } else {
        document.body.classList.remove("dark-theme");
        lightTheme.style.display = "block"; // Показываем светлый div
        darkTheme.style.display = "none"; // Скрываем темный div
        lightPhoto.style.display = "block"; // Показываем светлый div
        darkPhoto.style.display = "none"; // Скрываем темный div
    }
});















// // Функция для обновления переменных CSS
// function updateThemeColors(theme) {
// 	if (theme === "light") {
// 			document.documentElement.style.setProperty("--bg-color", "#f5f5dc");
// 			document.documentElement.style.setProperty("--acc-color", "#8e6244");
// 			document.documentElement.style.setProperty("--ex-color", "#5c3c37");
// 			document.documentElement.style.setProperty("--form-color", "#8e6244");
// 			document.documentElement.style.setProperty("--form-text", "#fff");
// 	} else if (theme === "dark") {
// 			document.documentElement.style.setProperty("--bg-color", "#252850");
// 			document.documentElement.style.setProperty("--acc-color", "#f5f5dc");
// 			document.documentElement.style.setProperty("--ex-color", "#c9c9ac");
// 			document.documentElement.style.setProperty("--form-color", "#f5f5dc");
// 			document.documentElement.style.setProperty("--form-text", "#000");
// 	}
// }

// // Функция, которая будет вызвана при изменении предпочтительной цветовой схемы
// function handleColorSchemeChange(event) {
// 	const preferredTheme = event.matches ? "dark" : "light";
// 	updateThemeColors(preferredTheme);
// }

// // Добавляем обработчик события на изменение предпочтительной цветовой схемы
// const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
// colorSchemeQuery.addEventListener("change", handleColorSchemeChange);

// // Вызываем функцию обновления цветов сразу после загрузки страницы
// handleColorSchemeChange(colorSchemeQuery);
