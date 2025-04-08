// -- script to show image in big --
var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modal-image");
var closeBtn = document.getElementsByClassName("close")[0];
var portfolio = document.querySelector(".portfolio");
var slides = document.getElementsByClassName("portfolio__img"); // Cache slides initially
var slideIndex = 0; // Initialize slideIndex to 0

function openModal(img) {
  modal.style.display = "block";
  modalImage.src = img.src;
  // Find the index of the clicked image in the portfolio
  for (let i = 0; i < slides.length; i++) {
    if (slides[i] === img) {
      slideIndex = i;
      break;
    }
  }
}

// slide image button
function nextImage(m) {
  showSlides(slideIndex + m);
}

function showSlides(n) {
  if (slides.length === 0) {
    return; // Handle case where there are no portfolio images
  }

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  modalImage.src = slides[slideIndex].src;
}

function closeModal() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
if (closeBtn) {
  closeBtn.onclick = closeModal;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Event delegation for opening the modal
if (portfolio) {
  portfolio.addEventListener("click", function (event) {
    if (event.target.classList.contains("portfolio__img")) {
      openModal(event.target);
    }
  });
}

// scroll to top button
var Tbtn = document.getElementById("upButton");

window.onscroll = () => {
  showTopbtn();
};

function toggleTopbtn() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showTopbtn() {
  if (Tbtn) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      Tbtn.style.display = "block";
    } else {
      Tbtn.style.display = "none";
    }
  }
}