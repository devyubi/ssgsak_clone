// 모든 HTML 요소, 이미지까지 다 로딩된 다음 실행되도록 함
window.addEventListener("load", function () {
  // 마우스 올라간 버튼에 줄 클래스 이름 (마음대로 바꿔도 됨)
  const hoverClass = "category_mouse";

  // 모든 버튼(.launcher_icon)을 선택해서 리스트로 가져옴
  const bts = document.querySelectorAll(".launcher_icon");

  // 기존에 붙어있던 hoverClass를 전부 제거하는 함수
  function removemouse() {
    // 버튼 하나씩 돎
    bts.forEach(function (item) {
      // 클래스 제거
      item.classList.remove(hoverClass);
    });
  }

  // 각 버튼마다 마우스 올라갔을 때 반응하도록 이벤트 추가
  bts.forEach(function (item) {
    // 마우스를 올렸을 때 실행되는 코드
    item.addEventListener("mouseenter", function () {
      // 다른 버튼들에 붙은 hoverClass 먼저 다 제거
      removemouse();

      // 현재 마우스 올라간 이 버튼에 hoverClass 추가
      item.classList.add(hoverClass);
    });
  });
});
