window.addEventListener("DOMContentLoaded", () => {
  const downloadWrap = document.querySelector(".download_wrap");

  if (!downloadWrap) return;

  const renderDownload = () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      downloadWrap.innerHTML = `
        <div class="app_download mb_grid">
          <div class="mb_item mb_img">
            <img
              class="guide_img"
              src="https://www.ssgsag.kr/home/web/img_install_guide.png"
              alt="가이드"
            />
          </div>
          <div class="mb_item mb_text">
            <p>
              <span><strong>슥삭 앱 설치 안내</strong></span><br /><br />
              슥삭 앱에서 더 편리하게 공고를 추천받고 일정을 관리할 수 있어요
            </p>
          </div>
          <div class="mb_item mb_store">
            <button class="app_guide_bt">
              <img
                class="app_guide_img"
                src="https://www.ssgsag.kr/home/web/ic_app_store.png"
                alt="애플"
              />
              App Store에서 보기
            </button>
          </div>
          <div class="mb_item mb_google">
            <button class="app_guide_bt">
              <img
                class="app_guide_img"
                src="https://www.ssgsag.kr/home/web/ic_google_play.png"
                alt="구글"
              />
              Google Play에서 보기
            </button>
          </div>
        </div>
      `;
    } else {
      downloadWrap.innerHTML = `
        <div class="app_download">
          <div class="guide_title">
            <img
              class="guide_img"
              src="https://www.ssgsag.kr/home/web/img_install_guide.png"
              alt="가이드"
            />
          </div>
          <div class="download_guide">
            <p>
              <span><strong>슥삭 앱 설치 안내</strong></span><br /><br />
              슥삭 앱에서 더 편리하게 공고를 추천받고 일정을 관리할 수 있어요
            </p>
            <div class="app_guide">
              <button class="app_guide_bt">
                <img
                  class="app_guide_img"
                  src="https://www.ssgsag.kr/home/web/ic_app_store.png"
                  alt="애플"
                />
                App Store에서 보기
              </button>
              <button class="app_guide_bt">
                <img
                  class="app_guide_img"
                  src="https://www.ssgsag.kr/home/web/ic_google_play.png"
                  alt="구글"
                />
                Google Play에서 보기
              </button>
            </div>
          </div>
        </div>
      `;
    }
  };

  // 최초 실행
  renderDownload();

  // 창 크기 변경 시 자동 반응형 구조 변경
  window.addEventListener("resize", () => {
    renderDownload();
  });
});

