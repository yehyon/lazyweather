var second_main = document.querySelector('.second-main');
var panel = document.querySelector('.panel');
var arrow = document.querySelector('.arrow-up');
var arrow_container = document.querySelector('.icon');

second_main.addEventListener('click', function(e) {
  // 1. 스크롤되는 요소를 아래쪽 위치로 이동시킨다.
  // 2. 스크롤되는 요소를 토글시킨다.
  if( e.target.classList.contains('scroll') ) {
    arrow_container.classList.toggle('rotate');
    // arrow_container.classList.toggle('ion-ios-arrow-down');
  }
}, true);

second_main.addEventListener('click', function(e) {
  // 1. 스크롤되는 요소를 아래쪽 위치로 이동시킨다.
  // 2. 스크롤되는 요소를 토글시킨다.
  if( e.target.classList.contains('scroll') ) {
    panel.classList.toggle('change-height');
  }
}, true);

arrow.addEventListener('click', function(){
  if ( !panel.classList.contains('scrolling') ) {
    panel.classList.toggle('change-height');
  }
});

// panel 요소의 스크롤 상태 처리
second_main.addEventListener('scroll', function(e) {
  var scroll = this.querySelector('.scroll');
  var scroll_y = Number(scroll.style.transform.split(' ')[1].replace(/px,/,''));
  if( scroll_y !== 0 ) {
    panel.classList.add('scrolling');
  } else {
    panel.classList.remove('scrolling');
  }
});
