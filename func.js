var e = document.getElementById('parent');
e.onmouseover = function () {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('base').style.display = 'none';
}
e.onmouseout = function () {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('base').style.display = 'block';
}


// var bog =document.querySelector(".bobmad");

// function popOff(element){ 
//         bog.style.display = 'none';
// }

function scrollToTop() {
  window.scrollTo(0, 0);
}

function popOff(selector) {
  document.querySelector(selector).style.display = 'block';
  document.querySelector('.bobmad').style.display = 'none'
}

function popOff1(selector) {
  document.querySelector(selector).style.display = 'block';
  document.querySelector('.bobmad1').style.display = 'none';
}
function popOff3(selector) {
  document.querySelector(selector).style.display = 'block';
  document.querySelector('.bobmad2').style.display = 'none';
}
function refreshPage() {
  window.location.reload();
}

function scrollFunction1() {
  let e = document.getElementById("el1");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
}
function scrollFunction2() {
  let e = document.getElementById("el2");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
    inline: 'center'
  });
}