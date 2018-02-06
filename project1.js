
// ------1.VERY SIMPLE AUTOMATIC SLIDESHOW USING MODULO OPERATOR------
var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
	slides[currentSlide].className = "slide";
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = "slide showing";
}


// ----2.SLIDESHOW WITH ARROWS, CAPTION TEXT AND NUMBERS, USING FOR LOOP-----

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
  	slideIndex = 1
  }
  if (n < 1) {
  	slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 




// --------3. AUTOMATIC SLIDESHOW USING LOOP--------
var slideId = 0;
showFun();

function showFun() {
	var i;
	var slidesFun = document.getElementsByClassName("mySlides2");
	for (i = 0; i < slidesFun.length; i++) {
		slidesFun[i].style.display = "none";
	}
	slideId++;
	if (slideId > slidesFun.length) {
		slideId = 1
	}
	slidesFun[slideId-1].style.display = "block";
	setTimeout(showFun, 3000);
}