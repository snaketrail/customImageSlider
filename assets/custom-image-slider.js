(function() {

  var sliderContainer = document.querySelector('.custom-image-slider');
  var sliderImages = sliderContainer.querySelectorAll('img');
  var currentSlide = 0;


  function showSlide(index) {
    // Hide all slides
    for (var i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = 'none';
    }


    sliderImages[index].style.display = 'block';
  }


  function nextSlide() {
    currentSlide++;
    if (currentSlide >= sliderImages.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }


  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = sliderImages.length - 1;
    }
    showSlide(currentSlide);
  }


  function initSlider() {
    // Show the first slide
    showSlide(currentSlide);


    var nextButton = document.createElement('button');
    nextButton.classList.add('slider-button', 'next-button');
    nextButton.textContent = 'Next';

    var prevButton = document.createElement('button');
    prevButton.classList.add('slider-button', 'prev-button');
    prevButton.textContent = 'Previous';

    sliderContainer.appendChild(prevButton);
    sliderContainer.appendChild(nextButton);

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  }


  document.addEventListener('DOMContentLoaded', initSlider);
})();


