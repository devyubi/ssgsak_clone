window.addEventListener("DOMContentLoaded", () => {
  const justApiData = [
    {
      image:
        "https://ssgsag.blob.core.windows.net/contents/00f6a3e0-5cc2-11f0-adf2-9366fd63092c.png",
      alt: "경남무료",
      options: [{ style: "just_yellow", text: "교육/강연" }],
      text: "[경남/무료] 생성형AI·데이터분석 8주 기업연계 실무 프로젝트 (1인당 100만원 지급)",
      dday: "D-4",
    },
    {
      image:
        "https://ssgsag.blob.core.windows.net/contents/fcbd0170-5bc7-11f0-adf2-9366fd63092c.png",
      alt: "새만금개발청",
      options: [{ style: "just_blue", text: "공모전" }],
      text: "[새만금개발청] 2025년 새만금 공공데이터 활용 경진대회",
      dday: "D-22",
    },
    {
      image:
        "https://ssgsag.blob.core.windows.net/contents/0e8e5e90-5b09-11f0-b1f5-1f18f8266b4c.png",
      alt: "팀스파르타",
      options: [{ style: "just_yellow", text: "교육/강연" }],
      text: "[팀스파르타] AI 디지털 마케터 부트 캠프",
      dday: "D-25",
    },
    {
      image:
        "https://ssgsag.blob.core.windows.net/contents/10a30330-5b08-11f0-b1f5-1f18f8266b4c.png",
      alt: "스파르타코딩클럽",
      options: [{ style: "just_purple", text: "대외활동" }],
      text: "[스파르타코딩클럽]대학생 앰배서더 스파클 2기",
      dday: "D-5",
    },
    {
      image:
        "https://ssgsag.blob.core.windows.net/contents/b986ee70-5b04-11f0-b1f5-1f18f8266b4c.png",
      alt: "오비맥주",
      options: [{ style: "just_blue", text: "공모전" }],
      text: "[오비맥주] 크리에이티브 공모전 Creative X Challengers 참가자 모집",
      dday: "D-2",
    },
    {
      image:
        "https://ssgsag.blob.core.windows.net/contents/bc2e4080-5adf-11f0-b1f5-1f18f8266b4c.png",
      alt: "PTKOREA인턴",
      options: [
        { style: "just_red", text: "인턴십" },
        { style: "just_gray", text: "서울 강남구" },
      ],
      text: "[PTKOREA인턴] 기업문화팀 총무",
      dday: "D-22",
    },
    {
      image:
        "https://ssgsag.blob.core.windows.net/contents/2ef77350-5ad8-11f0-b1f5-1f18f8266b4c.png",
      alt: "와이어트",
      options: [
        { style: "just_red", text: "인턴십" },
        { style: "just_gray", text: "서울 강남구" },
      ],
      text: "[와이어트] 틱톡 마케터 전환형 인턴",
      dday: "D-6",
    },
    {
      image:
        "https://ssgsag.blob.core.windows.net/contents/fabc2c70-5ad7-11f0-b1f5-1f18f8266b4c.png",
      alt: "네이버클라우드",
      options: [
        { style: "just_red", text: "인턴십" },
        { style: "just_gray", text: "경기 성남시 분당구" },
      ],
      text: "[NAVER Cloud] AI 사업 전략 및 리서치 체험형 인턴",
      dday: "D-2",
    },
  ];

  const justList = document.querySelector(".just_list");

  justApiData.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="just_img">
      <img src="${item.image}" alt="${item.alt}" />
      <div class="just_option">
        ${item.options
          .map((opt) => `<span class="${opt.style}">${opt.text}</span>`)
          .join("")}
      </div>
      <p class="just_txt">${item.text}</p>
      <p class="just_day"><strong>${item.dday}</strong></p>
    </div>
  `;
    justList.appendChild(li);
  });
});
