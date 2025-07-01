window.addEventListener("DOMContentLoaded", () => {
  const apiData = [
    {
      id: 2,
      link: "#",
      image:
        "https://storage.googleapis.com/ssgsag/contents/888bf59e-5ee2-451c-a9e9-678c863531ac.png",
      alt: "1",
    },
    {
      id: 3,
      link: "#",
      image:
        "https://storage.googleapis.com/ssgsag/contents/b11a66d0-c376-4505-8b82-4b2667123ecb.png",
      alt: "2",
    },
    {
      id: 4,
      link: "#",
      image:
        "https://storage.googleapis.com/ssgsag/contents/283d0b23-2c18-4bcd-8178-7fa783838d99.png",
      alt: "3",
    },
    {
      id: 5,
      link: "#",
      image:
        "https://storage.googleapis.com/ssgsag/contents/7a6c6625-b9f9-4818-9f74-6051b4266768.png",
      alt: "4",
    },
  ];

  const bannerWrapper = document.querySelector(".sw_banner .swiper-wrapper");
  const banner = document.querySelector(".sw_banner");

  // 에러 방지: DOM 요소가 존재하는지 확인
  if (!bannerWrapper || !banner) {
    console.error("필요한 DOM 요소가 없습니다.");
    return;
  }

  // HTML 태그 동적 생성
  let htmlTag = "";
  for (let i = 0; i < apiData.length; i++) {
    htmlTag += `
      <div class="swiper-slide">
        <a href="${apiData[i].link}" class="banner_slide_item">
          <img src="${apiData[i].image}" alt="${apiData[i].alt}" />
        </a>
      </div>
    `;
  }
  bannerWrapper.innerHTML = htmlTag;

  // Swiper 초기화
  const swiper = new Swiper(".sw_banner", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 80,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".banner_slide_next",
      prevEl: ".banner_slide_prev",
    },
    pagination: {
      el: ".banner_slide_pg",
      clickable: true,
    },
    breakpoints: {
      // 760: {
      //   slidesPerView: 2,
      //   spaceBetween: 25,
      // },
    },
  });

  // 마우스 hover 시 자동재생 멈춤/재시작
  banner.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });

  banner.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
});
