// 페이지 로드 완료 후 실행
window.addEventListener("DOMContentLoaded", () => {
  const hotApiData = [
    {
      id: 2,
      category: "대외활동",
      link: "#",
      image:
        "https://ssgsag.blob.core.windows.net/contents/ebdbc830-fee5-11ef-9283-ff986ee977c1.png",
      alt: "슬기로운인턴생활",
      option: [{ style: "option_purple", text: "대외활동" }],
      text: "[고용노동부] 20205 미래내일 일경험 인턴십 참여자 모집",
      d_day: "D-175",
    },
    {
      id: 3,
      category: "공모전",
      link: "#",
      image:
        "https://ssgsag.blob.core.windows.net/contents/54531310-14fc-11f0-ad8a-bb7ba2d934e7.png",
      alt: "뉴스읽기뉴스일기",
      option: [{ style: "option_blue", text: "공모전" }],
      text: "[한국언론진흥재단] 제6회 뉴스읽기 뉴스일기 공모전",
      d_day: "D-22",
    },
    {
      id: 4,
      category: "공모전",
      link: "#",
      image:
        "https://ssgsag.blob.core.windows.net/contents/902271c0-009c-11f0-b7b0-5f21ece0fe81.png",
      alt: "제임스다이슨재단",
      option: [{ style: "option_blue", text: "공모전" }],
      text: "[제임스 다이슨 재단] 국제 엔지니어링 및 디자인 공모전 제임스 다이슨 어워드 2025",
      d_day: "D-7",
    },
    {
      id: 5,
      category: "공모전",
      link: "#",
      image:
        "https://ssgsag.blob.core.windows.net/contents/de737390-517f-11f0-936c-b1f427bfd22f.png",
      alt: "미리캔버스",
      option: [{ style: "option_blue", text: "공모전" }],
      text: "[미리캔버스] 여행 계획만 짜고 1천만원 여행 떠나기",
      d_day: "D-4",
    },
    {
      id: 6,
      category: "공모전",
      link: "#",
      image:
        "https://ssgsag.blob.core.windows.net/contents/fb8535a0-0610-11f0-b7b0-5f21ece0fe81.png",
      alt: "패스프리",
      option: [{ style: "option_blue", text: "공모전" }],
      text: "[(주)패스프리] 패스프리 로고 디자인 공모전",
      d_day: "D-22",
    },
    {
      id: 7,
      category: "공모전",
      link: "#",
      image:
        "https://ssgsag.blob.core.windows.net/contents/b5349b50-14e7-11f0-ad8a-bb7ba2d934e7.png",
      alt: "KUDAF",
      option: [{ style: "option_blue", text: "공모전" }],
      text: "[KUDAF] 2025 대한민국 대학생 디지털 광고제",
      d_day: "D-79",
    },
    {
      id: 8,
      category: "공모전",
      link: "#",
      image:
        "https://ssgsag.blob.core.windows.net/contents/095960f0-3b6a-11f0-bddf-bb3205353f3d.png",
      alt: "야놀자리서치",
      option: [{ style: "option_blue", text: "공모전" }],
      text: "[야놀자리서치] 2025 트래블 이노베이션 아이디어 공모전",
      d_day: "D-2",
    },
    {
      id: 9,
      category: "공모전",
      link: "#",
      image:
        "https://ssgsag.blob.core.windows.net/contents/9f4dcc30-2c7f-11f0-af3e-b31bf137e3de.png",
      alt: "우정산업본부",
      option: [{ style: "option_blue", text: "공모전" }],
      text: "[우정산업본부] 2025 대한민국 편지쓰기 공모전",
      d_day: "D-12",
    },
  ];

  // 공고 넣을 위치
  const hotColumn = document.querySelector(".hot_column");

  // HTML 만들기

  if (hotColumn) {
    let html = ``;

    for (let i = 0; i < hotApiData.length; i++) {
      const item = hotApiData[i];

      let tag = `
      <div class="hot_li">
        <a href="${item.link}" class="hot_annc_image">
          <div class="hot_image">
            <img src="${item.image}" alt="${item.alt}" />
          </div>
          <div class="hot_annc_info">
            <div class="hot_annc_option">`;

      for (let j = 0; j < item.option.length; j++) {
        tag += `<div class="${item.option[j].style}">${item.option[j].text}</div>`;
      }

      tag += `</div>
            <div class="hot_annc_text">${item.text}</div>
            <div class="hot_day"><strong>${item.d_day}</strong></div>
          </div>
        </a>
      </div>
    `;

      html += tag;
    }

    // 삽입
    hotColumn.innerHTML = html;

    // Swiper 적용
    const hotWrap = document.querySelector(".hot_wrap");
    const hotItems = document.querySelectorAll(".hot_li");

    hotWrap.classList.add("swiper");
    hotColumn.classList.add("swiper-wrapper");
    hotItems.forEach((item) => item.classList.add("swiper-slide"));
  }
});
