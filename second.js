function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // Задаем случайные размеры снежинки
  const size = Math.random() * (10 - 5) + 5; // Размер от 5 до 10px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  // Устанавливаем случайную позицию по горизонтали
  snowflake.style.left = Math.random() * window.innerWidth + "px";

  // Добавляем снежинку в контейнер
  document.querySelector(".snow-container").appendChild(snowflake);

  // Анимация падения
  const fallDuration = Math.random() * (5 - 3) + 10; // Случайное время падения от 3 до 5 секунд
  setTimeout(() => {
    snowflake.style.transition = `top ${fallDuration}s linear`; // Случайное время падения
    snowflake.style.top = window.innerHeight + 2000 + "px"; // Падение до низа экрана

    // Удаляем снежинку после анимации с небольшой задержкой
    setTimeout(() => {
      snowflake.remove();
    }, fallDuration * 1000 + 1000); // Задержка на полсекунды перед удалением
  }, Math.random() * (1000 - 500) + 500); // Задержка перед началом падения
}

// Создаем снежинки каждые полсекунды
setInterval(createSnowflake, 100);

document.addEventListener("DOMContentLoaded", function () {
  const showSlider = new Swiper(".showcase-carousel", {
    loop: true,
    slidesPerView: 3,
    speed: 1000,
    centeredSlides: true,
    navigation: {
      nextEl: ".showcase-navigation__next",
      prevEl: ".showcase-navigation__prev",
    },
  });
});

const letter = document.getElementById("letter");
const card = document.getElementById("card");
const letterButton = document.getElementById("letter-button");
const textExample = document.getElementById("textExample");
var flag = 0;

if (flag === 0) {
  letterButton.addEventListener("click", function () {
    if (flag === 0) {
      flag = 1;
      const breakLine = document.getElementById("break-line");
      const upperHeart = document.getElementById("upper-heart");
      const downHeart = document.getElementById("down-heart");
      const upLetter = document.getElementById("up-letter");

      // Показываем линию разрыва
      breakLine.setAttribute("visibility", "visible");

      // Анимация линии разрыва
      anime({
        targets: breakLine,
        strokeDashoffset: [anime.setDashoffset, 0], // Анимация появления линии
        easing: "easeInOutQuad",
        duration: 1000,
        loop: false,
        complete: function () {
          //     // После завершения анимации можно добавить дополнительные эффекты
          anime({
            targets: upperHeart,
            translateY: [
              { value: -300, duration: 1500 }, // Движение вверх
            ],
            easing: "easeInOutQuad",
            loop: false,
            complete: function () {
              upperHeart.setAttribute("visibility", "hidden");
            },
          });

          // Анимация для нижней части сердечка
          anime({
            targets: downHeart,
            translateY: [
              { value: 300, duration: 1500 }, // Движение вверх
            ],
            easing: "easeInOutQuad",
            loop: false,
            complete: function () {
              downHeart.setAttribute("visibility", "hidden");
              // upLetter.setAttribute("visibility", "visible");
              anime({
                targets: upLetter,
                translateY: [
                  { value: 261, duration: 10 }, // Поднимите элемент вверх
                ],
                easing: "easeInOutQuad",
                loop: false,
                complete: function () {
                  upLetter.setAttribute("visibility", "visible");
                  anime({
                    targets: upLetter,

                    rotateX: [{ value: -180, duration: 100 }],
                    easing: "easeInOutQuad",
                    loop: false,
                    complete: function () {
                      letter.style.display = "flex";
                      anime({
                        targets: letter,
                        translateY: -100, // Поднимаем на 100 пикселей
                        opacity: [0, 1],
                        duration: 1000,
                        easing: "easeInOutQuad",
                        loop: false,
                        complete: function () {
                          anime({
                            targets: letter,
                            translateY: 100,
                            scale: [1, 3.5],
                            duration: 500,
                            easing: "easeInOutQuad",
                            loop: false,
                            complete: function () {
                              setTimeout(function () {
                                typeText();
                              }, 200);
                            },
                          });
                          anime({
                            targets: card,
                            scaleY: [1, 0],
                            opacity: [1, 0],
                            duration: 1500,
                          });
                        },
                      });
                      anime({
                        targets: card,
                        translateY: 500,
                        duration: 1000,
                        easing: "easeInOutQuad",
                        loop: false,
                      });
                    },
                  });
                },
              });
            },
          });
          breakLine.setAttribute("visibility", "hidden");
        },
      });
    }
  });
}

const text =
  "Привет, зайка! Я поздравляю тебя с Новым годом! Все пожелания я тебе донесу в \
другом формате, перед тем как ты получишь свой подарок) Но кое-что все же скажу: в \
этом году было много всего хорошего, и я рад, что эти моменты связаны с тобой. Я тебя \
невероятно люблю! Пришло время для кое-чего важного)";
let index = 0;

function typeText() {
  if (index < text.length) {
    textExample.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 150); // Задержка между символами
  }
}
