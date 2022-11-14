const searchEl = document.querySelector('.search'); // 도큐먼트 문서(HTML)안에서 서치라는 클래스찾아라 하나만 
const searchInputEl = searchEl.querySelector('input'); //이번에는 서치 엘리먼트에서 인풋이라는 클래스 찾아라

searchEl.addEventListener('click', function (){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //배지숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
   //스크롤 업 버튼 보이기
   gsap.to(toTopEl, .2, {
    x: 0
  });
  
    // gsap.to(요소, 지속시간, 옵션);
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //스크롤업 버튼 숨기기
    // gsap:CSS선택자만 적어줘도 대상할당해준다.
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// addEventListener에서 scroll/function값 중 _.throttle로 function을 감쌈
// JS라이브러리를 통해서 새로운 명령어를 사용할 수 있는데, 300이라는 값은 0.3초
// 화면이 몇픽셀 지점에 있는지 알수있다
// _.throttle(함수, 시간(밀리세컨드)) 메소드가 발생하는 스택값을 늦춘다. 스크롤 작업할때 많이 사용된다.
 
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
    // 윈도우(화면브라우저) 기준으로 0.7동안 scrollTo: 0(스크롤의 가장 초기 상단값)
  });
});





const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    // 인덱스(목차)는 JS특성상 0부터 센다.
    // 각 요소의 유의미한 딜레이값을 주기위해서는
    // index + 1을 해줘야 * .7이 작동한다는 이야기지
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
// new Swiper('.promotion .swiper-container', {
//   // direction: 'horizontal'은 Swiper에 기본으로 들어가있다.
//   slidesPerView: 3,//한번에 보이는 슬라이드 수 221112_이거 때문에 제대로 안되는거였어..
//   spaceBetween: 10, //슬라이드 사이 여백(px)
//   centeredSlides: true, //1번 슬라이드가 가운데기준
// });

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  //오토플레이에 {}객체데이터 삽입시, 여러가지 옵션을 추가할 수 있다!
  pagination: {
      el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
      clickable: true, //사용자의 페이지번호 요소 제어 가능 여부. 클릭가능?:ㅇㅇㄱㄴ
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextel: '.awrads .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
// ishidepromotion의 처음 값을 false로 할당(불린데이터)
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  // !로 클릭하면 ishidepromotion의 값을 현재의 반대값 'true'로,
  // 한번 더 클릭하면, 'false'가 되게 설정함
  // !는 따라오는 값에 반대가 되는 값을 반환함
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
    // 처음 값이 'false'로 프로모션 탭이 활성화 되어있음.
    // 그래서 클릭해서 true로 값이 변하면 탭을 숨길 수 있도록 promotion 클래스에 hide라는
    // 클래스명을 남기고, CSS에서 선택해서 안보이기 옵션을 넣을 예정 display: none; 하려나
  } else {
    //나타내기
    promotionEl.classList.remove('hide');
  }
});

// // 범위 랜덤 함수(소수점 2자리까지)
// function random(min, max) {
//   // `.toFixed()`를 통해 반환된 문자 데이터를,
//   // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
//   return parseFloat((Math.random() * (max - min) + min).toFixed(2))
// }
// function floatingObject(selector, delay, size) {
//   gsap.to(
//     selector, //선택자
//     ramdom(1.5, 2.5), //애니메이션 동작시간 
//     {//옵션
//     y: size,  // y축 움직임값을 매개변수로 한다. 할당값이 변할 수 있음
//     repeat: -1, // 반복값, -1은 무한반복, 라이브러리에서 지원하는 값임
//     yoyo: true,
//     ease: Power1.easeInOut,
//     delay: random(0, delay)
//    }
//   );
// }
// floatingObject('.floating1', 1, 15);
// floatingObject('.floating2', 5, 15);
// floatingObject('.floating3', 1.5, 20);
// // 작동안됨 개같네 진짜.

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
new ScrollMagic
.Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
    triggerHook: .8 //트리거 개념을 뷰포트 어떤 지점에 걸려있다.
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
  // Scene: ScrollMagic라는 자바스크립트 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정하는 메소드
  // 화면 스크롤을 하면서 제어하려는 섹션들이 보이는지 보이지않는지 라이브러리를 통해 감시해야한다. 그때 Scene씀
  //setClassToggle: 지정(set)클래스 토글(넣었다 뺐다)제어
  // addTo: ScrollMagic이라는 라이브러리리가 필요한 컨트롤러 개념의 내용을 추가하기 위해서 작성
});

// 연도추적 명령어
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date() .getFullYear(); //날짜 정보를 가지고 있는 생성자