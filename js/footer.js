window.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");

  if (footer) {
    footer.innerHTML = `
              <div class="layout">
          <!-- 고객센터 -->
          <div class="footer_wrap">
            <ul class="footer_top">
              <li class="customer_service">고객센터</li>
              <br />
              <li class="tel">전화 010-4824-3999</li>
              <br />
              <li class="operating">
                운영시간 10:00 - 19:00 (토∙일, 공휴일 휴무)<br />
                점심시간 12:30 - 14:00
              </li>
            </ul>
            <div class="cb">
            <div class="company">
              <p><strong>회사</strong></p>
              <p>회사 소개</p>
              <p>서비스 소개</p>
              <p>채용</p>
            </div>
            <div class="business">
              <p><strong>비즈니스</strong></p>
              <p>광고 문의</p>
              <p>공고 등록</p>
            </div>
            </div>
          </div>

          <div class="line"></div>

          <div class="footer_bottom">
            <div class="footer_info">
              <p><strong>(주)이십사점오</strong></p>
              <p>
                <strong>대표이사 </strong>김신우 |
                <strong>사업자등록번호 </strong>123-45-67890
              </p>
              <p><strong>직업정보제공사업 신고번호 </strong>J1700020250005</p>
              <p>
                <strong>주소 </strong>대전 중구 대종로 708, 2층 | 서울시 마포구
                마포대로 122, 15층
              </p>

              <div class="inquiry">
                <strong>광고 문의 </strong>
                <p>sales@ssgsag.kr</p>
                <p class="bar">|</p>
                <strong> 제휴 문의 </strong>
                <p>ssgsag.univ@gmail.com</p>
              </div>

              <div class="util_poilcy">
                <p class="util">이용약관</p>
                <p><strong>개인정보 처리방침</strong></p>
              </div>
            </div>
            <div class="footer_img">
              <img
                src="https://www.ssgsag.kr/layout/ic_instagram.svg"
                alt="인스타"
              />
              <img
                src="https://www.ssgsag.kr/layout/ic_naver_blog.svg"
                alt="블로그"
              />
            </div>
          </div>
        </div>
    `;
  }
});
