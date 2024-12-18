const button = document.getElementById("toggle-button");
const container = document.getElementById("lectures-container");

button.addEventListener("click", () => {
    if (container.classList.contains("show")) {
        container.classList.remove("show"); // Скрыть таблицу
        setTimeout(() => {
            container.style.display = "none"; // Убираем элемент после анимации
        }, 500); // Время совпадает с CSS transition
        button.textContent = "Показать лекции";
    } else {
        container.style.display = "block"; // Отображаем элемент
        setTimeout(() => container.classList.add("show"), 10); // Анимация через класс
        button.textContent = "Скрыть лекции";
    }
});

