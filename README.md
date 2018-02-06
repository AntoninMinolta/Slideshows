# Slideshows
my practise on slideshows, there are three different types of them - onclick version and two automatic versions with different approach

#HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Slideshow</title>
	<link rel="stylesheet" href="project1.css">
	<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet"> 
</head>
<body>
	
<!-- 1.VERY SIMPLE AUTOMATIC SLIDESHOW USING MODULO OPERATOR -->
<h1>1) simple automatic slideshow using modulo operator and transition effect</h1>
<ul id="slides">
    <li class="slide showing"></li>
    <li class="slide"></li>
    <li class="slide"></li>
    <li class="slide"></li>
    <li class="slide"></li>
</ul>

<!-- 2.SLIDESHOW WITH ARROWS, CAPTION TEXT AND NUMBERS -->
<h1>2) onclick slideshow with arrows, caption text and numbers using loop and fade effect</h1>
<div class="slideshow-container">
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="https://source.unsplash.com/efwGCPFdIcM">
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="https://source.unsplash.com/aZjw7xI3QAA">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="https://source.unsplash.com/M03OCZvYSxY">
    <div class="text">Caption Three</div>
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>

<!-- 3. AUTOMATIC SLIDESHOW USING LOOP -->
<h1>3) automatic slideshow using loop and fade effect</h1>
<div class="slideshow-container">
  <div class="mySlides2 fade">
    <img src="https://source.unsplash.com/CQl3Y5bV6FA">
  </div>

  <div class="mySlides2 fade">
    <img src="https://source.unsplash.com/c1fFv08N7qE">
  </div>

  <div class="mySlides2 fade">
    <img src="https://source.unsplash.com/O6DUoIl6NWA">
  </div>
</div>


<script src="project1.js"></script>	
</body>
</html>

#CSS
body {
    background: #555;
}

* {
    box-sizing:border-box;
}

h1 {
    font-family: 'Source Code Pro', monospace;
    color: #fff;
    font-size: 22px;
    margin-left: 9%;
}

/*-----1.VERY SIMPLE AUTOMATIC SLIDESHOW USING MODULO OPERATOR------*/
#slides {
    position: relative;
    height: 300px;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
}

.slide {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
    background-image: url(https://source.unsplash.com/O453M2Liufs);
    background-repeat: no-repeat;
    background-position: center;
}

.slide:nth-of-type(1) {
    background-image: url(https://source.unsplash.com/umqw42faoBU);
}
.slide:nth-of-type(2) {
    background-image: url(https://source.unsplash.com/O453M2Liufs);
}
.slide:nth-of-type(3) {
    background-image: url(https://source.unsplash.com/2YQoKbyGvDc);
}
.slide:nth-of-type(4) {
    background-image: url(https://source.unsplash.com/lBL7rSRaNGs);
}
.slide:nth-of-type(5) {
    background-image: url(https://source.unsplash.com/UdgvzNom0Xs);
}

.showing {
    opacity: 1;
    z-index: 2;
}


/*------2.SLIDESHOW WITH ARROWS, CAPTION TEXT AND NUMBERS------*/
/*------3. AUTOMATIC SLIDESHOW USING LOOP---------*/
.slideshow-container {
  position: relative;
  margin: 0 auto;
  width: 83%;
}

.slideshow-container img {
    height: 300px;
    width: 100%;
    vertical-align: middle;
}

.mySlides {  
    display: none;
}

.mySlides2 {
    display: none;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

.next { 
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

#JavaScript

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
