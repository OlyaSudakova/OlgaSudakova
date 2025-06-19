var cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = 'style.css'; 
document.head.appendChild(cssLink);
// элементы слайдера
        document
        const slider = document.querySelector('.slider');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const slides = Array.from(slider.querySelectorAll('div'));
        const slideCount = slides.length;
        let slideIndex = 0;

        // Устанавливаем обработчики событий для кнопок
        prevButton.addEventListener('click', showPreviousSlide);
        nextButton.addEventListener('click', showNextSlide);

        // Функция для показа предыдущего слайда
        function showPreviousSlide() {
            slideIndex = (slideIndex - 1 + slideCount) % slideCount;
            updateSlider();
        }

        // Функция для показа следующего слайда
        function showNextSlide() {
            slideIndex = (slideIndex + 1) % slideCount;
            updateSlider();
        }


        // Функция для обновления отображения слайдера
        function updateSlider() {
            slides.forEach((slide, index) => {
                if (index === slideIndex) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });
        }

        // Инициализация слайдера
        updateSlider();

        let blockCount = 0;
        const countElement = document.getElementById('count');
        function addBlock() {
            blockCount++;
            newBlock.textContent = blockCount;
            blocksContainer.appendChild(newBlock);
            updateCounter();
          }
        
          function removeBlock() {
            if (blockCount > 0) {
              blockCount--;
              updateCounter();
            }
          }
        
          function updateCounter() {
            countElement.textContent = blockCount;
          }
          updateCounter();