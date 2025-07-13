window.addEventListener("DOMContentLoaded", () => {
  const pickApiData = [
    {
      id: 2,
      category: "공모전",
      link: "#",
      image: "https://ssgsag.blob.core.windows.net/contents/f1d14e80-56de-11f0-936c-b1f427bfd22f.png",
      alt: "공모전",
      option: [{ style: "pick_blue", text: "공모전" }],
      text: "[스포츠윤리센터] 스포츠윤리센터 성희롱·성폭력 예방 숏폼 영상 공모전",
      d_day: "D-28",
    },
    {
      id: 3,
      category: "인턴십",
      link: "#",
      image: "https://ssgsag.blob.core.windows.net/contents/962d0f30-56ff-11f0-936c-b1f427bfd22f.png",
      alt: "인턴십",
      option: [
        { style: "pick_red", text: "인턴십" },
        { style: "pick_gray", text: "서울 영등포구" }
      ],
      text: "[롯데홈쇼핑] 2025년 6월 롯데홈쇼핑 신입사원 채용(인턴전형)",
      d_day: "D-7",
    },
    {
      id: 4,
      category: "교육/강연",
      link: "#",
      image: "https://ssgsag.blob.core.windows.net/contents/1b4aa400-56f8-11f0-936c-b1f427bfd22f.png",
      alt: "교육강연",
      option: [{ style: "pick_yellow", text: "교육/강연" }],
      text: "[천재교육] 중견기업 AI 기반 실무 FIT 풀스택 개발자 취업과정 13기",
      d_day: "D-35",
    },
    {
      id: 5,
      category: "공모전",
      link: "#",
      image: "https://ssgsag.blob.core.windows.net/contents/47c9e710-5c62-11f0-adf2-9366fd63092c.png",
      alt: "공모전",
      option: [{ style: "pick_blue", text: "공모전" }],
      text: "[방송기자연합회] 제8회 팩트체킹 공모전",
      d_day: "D-77",
    },
  ];

  // DOM 요소 선택
  const anncList = document.querySelector(".annc_list");

  // HTML 누적 변수
  let html = "";

  // 데이터 반복
  for (let i = 0; i < pickApiData.length; i++) {
    let item = pickApiData[i];
    let tag = `
      <li>
        <div class="pick_img">
          <img src="${item.image}" alt="${item.alt}" />
        </div>
        <div class="pick_option">`;

    // 옵션 여러 개 span으로 출력
    for (let j = 0; j < item.option.length; j++) {
      tag += `<span class="${item.option[j].style}">${item.option[j].text}</span>`;
    }

    tag += `
        </div>
        <p class="pick_txt">${item.text}</p>
        <br />
        <p class="pick_txt"><strong>${item.d_day}</strong></p>
      </li>
    `;

    html += tag;
  }

  // 완성된 HTML 삽입
  anncList.innerHTML = html;
});