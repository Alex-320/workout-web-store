// document.addEventListener("DOMContentLoaded", function () {
//   const list = document.querySelector(".new-arrivals__list");
//   const items = document.querySelectorAll(".new-arrivals__item");

//   if (!list || items.length === 0) {
//     console.warn("Carousel elements not found!");
//     return;
//   }

//   const itemWidth = items[0].offsetWidth + 25; // Ширина одного елемента + відступ
//   let currentIndex = 0;
//   let interval;

//   // Функція для прокрутки до певного індексу
//   function scrollToIndex(index) {
//     list.style.transform = `translateX(-${index * itemWidth}px)`;
//   }

//   // Автоматична зміна слайдів
//   function startAutoSlide() {
//     interval = setInterval(() => {
//       currentIndex = (currentIndex + 1) % items.length;
//       scrollToIndex(currentIndex);
//     }, 3000);
//   }

//   // Функція для перезапуску автопрокрутки
//   function resetAutoSlide() {
//     clearInterval(interval);
//     startAutoSlide();
//   }

//   // **Додаємо кнопки вручну в DOM**
//   const prevButton = document.createElement("button");
//   prevButton.textContent = "←";
//   prevButton.classList.add("new-arrivals__prev");

//   const nextButton = document.createElement("button");
//   nextButton.textContent = "→";
//   nextButton.classList.add("new-arrivals__next");

//   // Додаємо обробники подій
//   prevButton.addEventListener("click", function () {
//     currentIndex = (currentIndex - 1 + items.length) % items.length;
//     scrollToIndex(currentIndex);
//     resetAutoSlide();
//   });

//   nextButton.addEventListener("click", function () {
//     currentIndex = (currentIndex + 1) % items.length;
//     scrollToIndex(currentIndex);
//     resetAutoSlide();
//   });

//   // Додаємо кнопки в контейнер `.new-arrivals`
//   const section = document.querySelector(".new-arrivals");
//   section.appendChild(prevButton);
//   section.appendChild(nextButton);

//   // **Додаємо стилі до кнопок**
//   const style = document.createElement("style");
//   style.textContent = `
//     .new-arrivals {
//       position: relative;
//       overflow: hidden;
//     }
//     .new-arrivals__list {
//       display: flex;
//       transition: transform 0.5s ease-in-out;
//     }
//     .new-arrivals__prev, .new-arrivals__next {
//       position: absolute;
//       top: 50%;
//       transform: translateY(-50%);
//       background: rgba(0, 0, 0, 0.6);
//       color: white;
//       border: none;
//       padding: 10px 15px;
//       cursor: pointer;
//       font-size: 18px;
//     }
//     .new-arrivals__prev {
//       left: 10px;
//     }
//     .new-arrivals__next {
//       right: 10px;
//     }
//     .new-arrivals__prev:hover, .new-arrivals__next:hover {
//       background: rgba(0, 0, 0, 0.8);
//     }
//   `;
//   document.head.appendChild(style);

//   // **Запускаємо автопрокрутку**
//   startAutoSlide();
// });


// const productList = document.querySelector(".new-arrivals__list");

// document.querySelector(".new-arrivals__prev").addEventListener("click", () => {
//   productList.scrollBy({ left: -300, behavior: "smooth" });
// });

// document.querySelector(".new-arrivals__next").addEventListener("click", () => {
//   productList.scrollBy({ left: 300, behavior: "smooth" });
// });


document.addEventListener("DOMContentLoaded", function () {
  const productList = document.querySelector(".new-arrivals__list");
  const items = Array.from(productList.children);
  const itemWidth = items[0].offsetWidth; // Ширина одного товару
  let currentIndex = 0;

  function updateCarousel() {
    productList.style.transition = "transform 0.5s ease-in-out";
    productList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  document.querySelector(".new-arrivals__next").addEventListener("click", () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Повертаємось на початок (ефект каруселі)
    }
    updateCarousel();
  });

  document.querySelector(".new-arrivals__prev").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = items.length - 1; // Переходимо на останній елемент
    }
    updateCarousel();
  });
});
