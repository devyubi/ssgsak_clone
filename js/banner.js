// html 문서가 완전히 load 되면 아래 코드 실행
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
  // 배너 안의 슬라이드들이 들어갈 .swiper-wrapper 요소를 가져옴
  const bannerWrapper = document.querySelector(".sw_banner .swiper-wrapper");
  // 전체 배너 영역 .sw_banner 요소를 가져옴
  const banner = document.querySelector(".sw_banner");

  // 만약 두 요소가 없으면 오류 메시지를 찍고 코드를 멈춤 (에러 방지용!)
  if (!bannerWrapper || !banner) {
    console.error("필요한 DOM 요소가 없습니다.");
    return; // 코드 실행 중단
  }

  // html 태그 동적 생성, html 태그를 담을 빈 문자열을 준비
  let htmlTag = "";
  // apiData 배열을 하나씩 돌면서 슬라이드용 HTML 태그를 만듦 (for문으로 작성함)
  for (let i = 0; i < apiData.length; i++) {
    htmlTag += `
      <div class="swiper-slide">
        <a href="${apiData[i].link}" class="banner_slide_item">
          <img src="${apiData[i].image}" alt="${apiData[i].alt}" />
        </a>
      </div>
    `;
  }
  // 완성된 HTML 태그들을 .swiper-wrapper 안에 삽입해서 슬라이드들을 DOM에 출력
  bannerWrapper.innerHTML = htmlTag;

  // Swiper 라이브러리를 사용해서 슬라이드 기능을 초기화
  const swiper = new Swiper(".sw_banner", {
    slidesPerView: "auto", // 보이는 슬라이드 개수 : 오토 (자동 조절)
    centeredSlides: true, //  슬라이드 가운데 정렬
    spaceBetween: 80, // 슬라이드 사이 간격 80px임.
    loop: true, // 슬라이드 무한 반복 루프
    speed: 1000, // 슬라이드 전환 속도 1000ms = 1초
    autoplay: {
      delay: 3000, // 자동 재생 간격 : 3초
      disableOnInteraction: false, // 터치해도 자동 재생 계속하는 중
    },
    navigation: {
      nextEl: ".banner_slide_next", // 다음 버튼 (요소)
      prevEl: ".banner_slide_prev", // 이전 버튼 (요소)
    },
    pagination: {
      el: ".banner_slide_pg", // pg (요소)
      clickable: true, // 점 클릭 가능하게끔
    },
    // 반응형 
    breakpoints: {
      // 760: {
      //   slidesPerView: 2, // 특정 너비에서 설정 바꾸고 싶을 때 2개
      //   spaceBetween: 25, // 간격 25px
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
