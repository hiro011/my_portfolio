document.addEventListener('DOMContentLoaded', () => {
  // -- Image Modal --
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close');
  const portfolioImages = document.querySelectorAll('.portfolio__img'); // Select all portfolio images

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
  }

  // -- Image Slider --
  let slideIndex = 0; // Initialize to 0 for array indexing

  function showSlides(index) {
    if (index < 0) {
      slideIndex = portfolioImages.length - 1;
    } else if (index >= portfolioImages.length) {
      slideIndex = 0;
    } else {
      slideIndex = index;
    }
    if (portfolioImages.length > 0) {
      openModal(portfolioImages[slideIndex].src);
    }
  }

  function nextImage(n) {
    showSlides(slideIndex + n);
  }

  // Attach click event listeners to portfolio images to open the modal
  portfolioImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      showSlides(index); // Show the clicked image in the modal
    });
  });

  // -- Scroll to Top Button --
  const topButton = document.getElementById('upButton');

  function toggleTopButtonVisibility() {
    if (window.scrollY > 130) {
      topButton.style.display = 'block'; // Make sure the button is visible
    } else {
      topButton.style.display = 'none'; // Hide when at the top
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (topButton) {
    topButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', toggleTopButtonVisibility);
    toggleTopButtonVisibility(); // Initial check on load
  }

});