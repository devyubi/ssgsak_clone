window.addEventListener("DOMContentLoaded", () => {
  const headerTop = document.querySelector(".header_top"); // 클래스명 기준 수정
  const logo = document.querySelector(".logo");
  const loginBtn = document.querySelector(".login_bt");
  const skyblueIcon = document.querySelector(".skyblue_icon");
  const blueIcon = document.querySelector(".blue_icon");

  window.addEventListener("scroll", () => {
    const scY = window.scrollY;

    if (scY > 0) {
      headerTop.classList.add("header_top_scroll");
      logo.classList.add("logo_hide");
      loginBtn.classList.add("icon_hide");
      skyblueIcon.classList.add("icon_hide");
      blueIcon.classList.add("icon_hide");
    } else {
      headerTop.classList.remove("header_top_scroll");
      logo.classList.remove("logo_hide");
      loginBtn.classList.remove("icon_hide");
      skyblueIcon.classList.remove("icon_hide");
      blueIcon.classList.remove("icon_hide");
    }
  });
});

// 화면 크기 변경 시 재렌더링 (768px 기준 반응형)
let isLargeScreen = window.innerWidth >= 768;
window.addEventListener("resize", () => {
  const newLarge = window.innerWidth >= 768;
  if (newLarge !== isLargeScreen) {
    isLargeScreen = newLarge;
    renderSlides();
    initSwiper();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelectorAll(".menu_button");
  const mobileMenu = document.querySelector(".mobile_menu");
  const closeBtn = document.querySelector(".close_button");

  menuBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      mobileMenu.classList.add("active");
    })
  );

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
