// DOMContentLoaded는 문서의 콘텐츠 로딩이 완료되었을 때 발생하는 이벤트
document.addEventListener("DOMContentLoaded", function (e) {
  let keydown = document.querySelector("#keydown");
  keydown.addEventListener("keydown", function (e) {    
      console.log(e.key);
      if(e.key === 'q'){
        alert("q를 입력하셨습니다.");
      }
    
  });

  let change = document.querySelector("#change");
  change.addEventListener("change", function (e) {
    console.log(e.target.value);
  });

  let input = document.querySelector("#input");
  input.addEventListener("input", function (e) {
    console.log(e.target.value);
  });

  let button = document.querySelector("input");
  button.addEventListener("input", function (e) {
    console.log(e.target.value);
  });
});

function hi() {
  alert("hi");
}
