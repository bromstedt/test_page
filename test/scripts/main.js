var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/images.jpeg') {
    myImage.setAttribute ('src','images/eye.jpg');
  } else {
    myImage.setAttribute ('src','images/images.jpeg');
  }
}
