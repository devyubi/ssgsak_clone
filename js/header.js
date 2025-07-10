console.log("headerScroll");

window.addEventListener("DOMContentLoaded", () => {
  // 상단 header 영역 가져오기
  const headerTop = document.querySelector("header_top");
  const logo = document.querySelector(".logo");
  const loginBtn = document.querySelector(".login_bt");
  const skyblueIcon = document.querySelector(".skyblue_icon");
  const blueIcon = document.querySelector(".blue_icon");
  // 모바일 햄버거 버튼
  // const menuBtn = document.querySelector(".menu_button");
  // const mobileMenu = document.querySelector(".mobile_menu");
  // const closeBtn = document.querySelector(".close_button");
  // 브라우저에 스크롤이 발생시 실행
  window.addEventListener("scroll", () => {
    // 현재 스크롤 위치 (위로부터 몇 px 내렸는지 확인)
    const scY = window.scrollY;
    // if 문; 스크롤이 0보다 크면 페이지를 아래로 내린다
    if (scY > 0) {
      console.log("scroll"); // 스크롤 되었다
      // header에 스크롤 스타일 클래스 추가하기
      // 무조건 변수(예:loginBtn)는 카멜 케이스(camelCase)로 하기
      headerTop.classList.add("header_top_scroll");
      logo.classList.add("logo_hide");
      loginBtn.classList.add("icon_hide");
      skyblueIcon.classList.add("icon_hide");
      blueIcon.classList.add("icon_hide");
    } else {
      // 스크롤 최상단일때 헤더 원래 상태로 복구하기
      headerTop.classList.remove("header_top_scroll");
      logo.classList.remove("logo_hide");
      loginBtn.classList.remove("icon_hide");
      skyblueIcon.classList.remove("icon_hide");
      blueIcon.classList.remove("icon_hide");
    }

    //햄버거 메뉴 열기
    // menuBtn.addEventListener("click", function () {
    //   mobileMenu.classList.add("active");
    // });

    // 햄버거 메뉴 닫기
    // closeBtn.addEventListener("click", function () {
    //   mobileMenu.classList.remove("active");
    // });
  });
});
