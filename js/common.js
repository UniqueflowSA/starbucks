// 공통으로 사용하는 자바스크립트 페이지
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


// 연도추적 명령어
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date() .getFullYear(); //날짜 정보를 가지고 있는 생성자