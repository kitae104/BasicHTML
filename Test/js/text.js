document.addEventListener("DOMContentLoaded", function (e) {
  let button = document.querySelector("input[type=button]");   // type 속성이 button인 input 요소를 찾음
  let p = document.querySelector("p");    // p 요소를 찾음

  button.addEventListener("click", function (e) {
    p.textContent = "Hello World";   // p 요소의 텍스트 콘텐츠를 변경
    console.log(p.textContent);   // p 요소의 텍스트 콘텐츠를 가져옴
  });
});