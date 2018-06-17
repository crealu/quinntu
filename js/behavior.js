// quinn js

function toggleNav() {
  let navLinks = document.getElementById('mobile-nav-list');
  if (!(navLinks.style.left === '-25px')) {
    navLinks.style.left = '-25px';
    navLinks.style.opacity = 0;
  } else {
      navLinks.style.left = '-100px';
      navLinks.style.opacity = 1;
  }
}

function sayHi() {
  let xinchao = document.getElementById('xinchao');
  xinchao.style.opacity = 0;
  var i = 1;
  var id = setInterval(frame, 1000);
  function frame() {
    i--;
    xinchao.style.opacity = i;
    if (i == 0) {
      if (xinchao.innerHTML == 'Xin chao') {
        xinchao.innerHTML = 'Hello';
      } else if (xinchao.innerHTML == 'Hello') {
        xinchao.innerHTML = 'Xin chao';
      }
      clearInterval(id);
      xinchao.style.opacity = 1;
    }
  }
}

function travel() {
  let vietnam = document.getElementById('vietnam-map');
  vietnam.style.opacity = 0;
  var i = 1;
  var id = setInterval(frame, 1000);
  function frame() {
    i--;
    vietnam.style.opacity = i;
    if (i == 0) {
      if (vietnam.src === 'img/vietnam.jpg') {
        vietnam.src = 'img/california.jpg';
      } else if (vietnam.src === 'img/california.jpg') {
        vietnam.src = 'img/vietnam.jpg';
      }
      clearInterval(id);
      vietnam.style.opacity = 1;
    }
  }
}

$(window).bind('scroll',function(e){
  parallaxScroll();
  $('#parallax-2').parallax({imageSrc: 'img/landing.jpg'});
  $('#parallax-3').parallax({imageSrc: 'img/quinnwet.jpg'});
  $('#parallax-4').parallax({imageSrc: 'img/indo.jpg'});
  $('#parallax-5').parallax({imageSrc: 'img/gallax.jpg'});
});

function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('#parallax-2').css('top',(0 - (scrolled * .25)) + ' px');
  $('#parallax-3').css('top',(0 - (scrolled * .15)) + ' px');
  $('#parallax-4').css('top',(0 - (scrolled * .15)) + ' px');
  $('#parallax-5').css('top',(0 - (scrolled * .15)) + ' px');
}
