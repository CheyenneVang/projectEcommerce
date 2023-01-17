var myIndex = 0;
carousel(); // carousel() function cycles through elements like a slideshow

function carousel() {
  var i; // the value will be assigned below in the parameters
  var x = document.getElementsByClassName("imgSlide"); // Grabbing the images in my html which have the class called imgSlide
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  } // each image will have display none applied at a time
  myIndex++; // the variable starts at zero and will increment until index 2 of .length property in this case

  if (myIndex > x.length) { // 0 > 2
    myIndex = 1
  }    
  x[myIndex-1].style.display = "block";  // the images will apply display block
  // x[1-1].
  setTimeout(carousel, 2000); // Changes image every 2 seconds
}