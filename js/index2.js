// -- script to show image in big --
var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modal-image");
var closeBtn = document.getElementsByClassName("close")[0];

function imageShow(img) {
  modal.style.display = "block";
  modalImage.src = img.src;
}

// slide image button
var slideIndex = 1;
function nextImage(m) {
  showSlides((slideIndex += m));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("portfolio__img");
  var img;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  img = slides[slideIndex - 1];
  imageShow(img);
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// scroll to top button
var Tbtn = document.getElementById("upButton");

window.onscroll = () => {
  showTopbtn();
};
function toggleTopbtn() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function showTopbtn() {}
