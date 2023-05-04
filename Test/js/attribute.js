document.addEventListener("DOMContentLoaded", function (ex) {   // DOMContentLoaded 이벤트는 HTML 문서를 완전히 불러오고 분석했을 때 발생
  let input = document.querySelector("input");

  input.addEventListener("click", function (e) {
    if (e.target.getAttribute("type") === "button") {
      e.target.setAttribute("type", "text"); // setAttribute() 메서드를 사용하여 type 속성을 text로 변경
    }
  });
  
  input.addEventListener("change", function (e) {   // change 이벤트는 input 요소의 값이 변경되었을 때 발생(포커스가 해제되었을 때 발생)
    console.log("aaa");
    e.target.setAttribute("type", "button"); // setAttribute() 메서드를 사용하여 type 속성을 button으로 변경
  });
});
