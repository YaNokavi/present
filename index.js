document.getElementById("heart").addEventListener("click", function() {
  window.location.href = "second.html"
})


function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  
  // Задаем случайные размеры снежинки
  const size = Math.random() * (10 - 5) + 5; // Размер от 5 до 10px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  
  // Устанавливаем случайную позицию по горизонтали
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  
  // Добавляем снежинку в контейнер
  document.querySelector('.snow-container').appendChild(snowflake);
  
  // Анимация падения
  const fallDuration = Math.random() * (5 - 3) + 3; // Случайное время падения от 3 до 5 секунд
  setTimeout(() => {
      snowflake.style.transition = `top ${fallDuration}s linear`; // Случайное время падения
      snowflake.style.top = window.innerHeight + 'px'; // Падение до низа экрана
      
      // Удаляем снежинку после анимации с небольшой задержкой
      setTimeout(() => {
          snowflake.remove();
      }, fallDuration * 1000 + 10000); // Задержка на полсекунды перед удалением
      
  }, Math.random() * (1000 - 500) + 500); // Задержка перед началом падения
}

// Создаем снежинки каждые полсекунды
setInterval(createSnowflake, 100);

