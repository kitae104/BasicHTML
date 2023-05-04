document.addEventListener("DOMContentLoaded", function (e) {
  let button = document.querySelector("input[type=button]");   // type 속성이 button인 input 요소를 찾음
  let img = document.querySelector("img");    // img 요소를 찾음

  let img1 = "./image/hl1.jpg";
  let img2 = "./image/hl2.jpg";
  let img3 = "./image/profile.jpg";

  button.addEventListener("click", function (e) {
    let src = img.getAttribute("src");              // img 요소의 src 속성을 가져옴

    if (src === img1) {
      img.setAttribute("src", img2);
    } else if(src === img2) {
      img.setAttribute("src", img3);
    } else {
      img.setAttribute("src", img1);
    }
  });
});
