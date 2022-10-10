let createBlindDashboard = document.createElement('div');
let createBlindDashboardStyles = document.createElement('style');
createBlindDashboard.id = '_blind__dashboard';

createBlindDashboardStyles.innerHTML=`
#_blind__dashboard{
  position: fixed;
  background-color: #fff;
  width: 100%;
  height: 75vh;
  max-height: 350px;
  left: 0; bottom: -75vh;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.11);
  transition: .4s ease-in-out;
  overflow: visible;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
}
._BLIND_ #_blind__dashboard{
  opacity: 1;
  pointer-events: all;
}
@media screen and (min-height: 500px) {
  #_blind__dashboard{
    bottom: -350px;
  }
}
#_blind__dashboard.__open{
  bottom: 0;
}
#_blind__dashboard ._blind__dashboard__container{
  max-width: 1366px;
  position: relative;
  margin: 0 auto;
  height: 100%;
}
#_blind__dashboard ._blind__dashboard__options{
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
#_blind__dashboard ._blind__dashboard__options::-webkit-scrollbar{
  opacity: 0;
}
#_blind__dashboard ._blind__dashboard__container ._blind__dashboard__icon{
  position: absolute;
  top: -75px; right: 0;
  height: 75px;
  width: 75px;
  cursor: pointer;
  background-color: #fff;
  z-index: 1;
}
#_blind__dashboard ._blind__dashboard__container ._blind__dashboard__icon svg{
  width: 100%;
  height: 100%;
}
#_blind__dashboard.__open ._blind__dashboard__container ._blind__dashboard__icon svg ._BLIND_arrow_up{
  opacity: 0;
}
#_blind__dashboard ._blind__dashboard__container ._blind__dashboard__icon svg ._BLIND_arrow_down{
  opacity: 0;
}
#_blind__dashboard.__open ._blind__dashboard__container ._blind__dashboard__icon svg ._BLIND_arrow_down,
#_blind__dashboard ._blind__dashboard__container ._blind__dashboard__icon svg ._BLIND_arrow_up{
  opacity: 1;
  transition: .3s ease-in-out;
}
#_blind__dashboard.__open ._blind__dashboard__container ._blind__dashboard__icon svg ._BLIND_set_sup,
#_blind__dashboard.__open ._blind__dashboard__container ._blind__dashboard__icon svg ._BLIND_set_sub{
  transition: .3s ease-in-out;
}
#_blind__dashboard *{
  font-size: 16px;
}
#_blind__dashboard button,
#_blind__dashboard ._blind__dashboard__fonts input{
  cursor: pointer;
  font-size: 18px;
  padding: 5px 15px;
}
#_blind__dashboard ._blind__dashboard__header,
#_blind__dashboard ._blind__dashboard__fonts,
#_blind__dashboard ._blind__dashboard__scheme,
#_blind__dashboard ._blind__dashboard__img{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 15px 0;
  padding: 5px 15px;
  gap: 10px;
}
#_blind__dashboard ._blind__dashboard__header{
  justify-content: end;
  gap: 15px;
  flex-wrap: wrap-reverse;
}
#_blind__dashboard ._blind__dashboard__fonts div{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 20%;
  min-width: 200px;
}
#_blind__dashboard ._blind__dashboard__fonts label{
  pointer-events: none;
}
#_blind__dashboard ._blind__dashboard__fonts input{
  padding: 0;
  width: 100%;
}
#_blind__dashboard button{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid #000;
}

@media screen and (max-width: 700px){
  #_blind__dashboard ._blind__dashboard__container ._blind__dashboard__icon{
    height: 50px;
    width: 50px;
    top: -50px;
  }
  #_blind__dashboard ._blind__dashboard__scheme button span{
    display: none;
  }
}
`;
createBlindDashboard.innerHTML=`
<div class="_blind__dashboard__container">

      <div class="_blind__dashboard__icon">
        <svg class="_BLIND_no_invert" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
          <g id="icon" clip-path="url(#clip0_2252_1988)">
          <rect width="75" height="75" fill="url(#paint0_linear_2252_1988)"/>
          <g id="_BLIND_settings" clip-path="url(#clip1_2252_1988)">
          <g id="Group">
          <g class="_BLIND_set_sub">
          <path id="Vector" d="M39.7208 45.6714H37.1744C36.8282 44.0452 36.2448 42.7679 35.4561 41.4889L37.257 39.6694C37.6805 39.2459 37.6805 38.5508 37.257 38.1274L34.1909 35.0568C33.7674 34.6333 33.0814 34.6309 32.6579 35.0544L30.7997 36.8544C29.5208 36.0656 28.2248 35.4809 26.5987 35.1347V32.5885C26.5987 31.9892 26.226 31.5776 25.6267 31.5776H21.2902C20.6909 31.5776 20.0938 31.9892 20.0938 32.5885V35.1347C18.7386 35.4809 17.2839 36.0643 16.0049 36.853L14.231 35.0521C13.8074 34.6286 13.1355 34.6286 12.712 35.0521L9.65302 38.1182C9.22949 38.5417 9.23293 39.2277 9.65646 39.6512L11.4592 41.49C10.6701 42.769 10.0887 44.0452 9.74247 45.6715H7.19638C6.59715 45.6715 6 46.0831 6 46.6824V51.0189C6 51.6182 6.59715 52.1764 7.19638 52.1764H9.74259C10.0888 53.5317 10.6722 55.0059 11.4609 56.2848L9.66003 58.0683C9.2365 58.4918 9.2365 59.1688 9.66003 59.5923L12.7261 62.6537C13.1496 63.0773 13.8356 63.0751 14.2592 62.6517L16.004 60.8498C17.2829 61.6385 18.7387 62.2205 20.0938 62.5667V65.113C20.0938 65.7122 20.6909 66.2705 21.2902 66.2705H25.6267C26.226 66.2705 26.5987 65.7122 26.5987 65.113V62.5667C28.2248 62.2205 29.5219 61.6371 30.8008 60.8484L32.6298 62.6493C33.0533 63.0728 33.7533 63.0728 34.1769 62.6493L37.2501 59.5832C37.6736 59.1597 37.6771 58.4737 37.2533 58.0502L35.4542 56.2861C36.243 55.0071 36.8282 53.5318 37.1744 52.1765H39.7208C40.32 52.1765 40.6927 51.6183 40.6927 51.019V46.6825C40.6926 46.083 40.32 45.6714 39.7208 45.6714ZM38.5244 50.008H36.2884C35.759 50.008 35.3069 50.3536 35.2191 50.8767C34.9195 52.6617 34.2334 54.299 33.1799 55.7781C32.8729 56.209 32.9215 56.7897 33.2964 57.1645L34.9575 58.8208L33.4244 60.3518L31.7633 58.6895C31.3896 58.3147 30.7999 58.2644 30.368 58.5725C28.8889 59.6259 27.1769 60.3115 25.3919 60.6112C24.8689 60.699 24.4306 61.1508 24.4306 61.6802V64.1018H22.2622V61.6802C22.2622 61.1508 21.9362 60.6988 21.4131 60.6109C19.6281 60.3113 18.0003 59.6252 16.5212 58.5718C16.0892 58.2637 15.5136 58.3135 15.1398 58.6883L13.4858 60.3494L11.956 58.8164L13.6192 57.1553C13.994 56.7816 14.0432 56.1918 13.7362 55.7599C12.6965 54.3 11.9919 52.6354 11.6976 50.8768C11.6097 50.3537 11.1581 50.0081 10.6288 50.0081H8.16833V47.8396H10.6288C11.1581 47.8396 11.6102 47.4209 11.6981 46.8978C11.9924 45.1392 12.6974 43.4193 13.7372 41.9593C14.0442 41.5273 13.9955 40.9287 13.6207 40.5549L11.9595 38.889L13.4926 37.3538L15.1537 39.014C15.5274 39.3888 16.1172 39.4377 16.5492 39.1299C18.0091 38.0899 19.6544 37.3846 21.413 37.0903C21.936 37.0024 22.2621 36.5501 22.2621 36.0207V33.7458H24.4305V36.0209C24.4305 36.5502 24.8687 37.0023 25.3918 37.0901C27.1504 37.3845 28.8798 38.0895 30.3398 39.1293C30.7718 39.4374 31.3755 39.3875 31.7493 39.0127L33.4173 37.3516L34.9538 38.8847L33.2945 40.5458C32.9197 40.9206 32.8721 41.5103 33.1791 41.9411C34.2325 43.4202 34.9188 45.1128 35.2185 46.8978C35.3063 47.4209 35.759 47.8396 36.2884 47.8396H38.5244V50.008V50.008Z" fill="black"/>
          </g>
          </g>
          <g id="Group_3">
          <g class="_BLIND_set_sup">
          <path id="Vector_2" d="M68.963 23.6887L67.8408 19.4993C67.7667 19.2219 67.5846 18.9847 67.3358 18.8407C67.0859 18.6979 66.7895 18.6597 66.5131 18.7327L64.0527 19.3912C63.3412 18.0732 62.4137 16.8641 61.32 15.8329L62.5948 13.6265C62.7388 13.3777 62.7769 13.0813 62.7028 12.8038C62.6288 12.5265 62.4466 12.2892 62.1978 12.1453L58.4415 9.97693C57.9227 9.67731 57.26 9.85524 56.9602 10.374L55.6865 12.5794C54.2477 12.1496 52.7368 11.9462 51.2387 11.9939L50.5791 9.53347C50.5051 9.25612 50.323 9.01889 50.0742 8.87492C49.8243 8.73096 49.5268 8.69281 49.2515 8.76689L45.0621 9.89018C44.7836 9.96425 44.5475 10.1464 44.4035 10.3952C44.2596 10.644 44.2214 10.9404 44.2955 11.2177L44.9552 13.6772C43.636 14.3887 42.4269 15.3172 41.3957 16.4098L39.1892 15.1351C38.9394 14.9911 38.6419 14.9529 38.3666 15.027C38.0893 15.1011 37.852 15.2832 37.7081 15.532L35.5397 19.2884C35.2401 19.8071 35.418 20.4699 35.9368 20.7695L38.1422 22.0432C37.7124 23.4819 37.5133 24.9928 37.5567 26.4909L35.0963 27.1506C34.8189 27.2247 34.5817 27.4068 34.4377 27.6556C34.2938 27.9044 34.2556 28.2008 34.3297 28.4781L35.453 32.6675C35.6086 33.2467 36.2036 33.5928 36.7807 33.434L39.2401 32.7754C39.9527 34.0957 40.8801 35.3037 41.9728 36.3349L40.698 38.5403C40.554 38.7891 40.5159 39.0855 40.59 39.363C40.664 39.6403 40.8461 39.8776 41.0949 40.0215L44.8513 42.1899C45.3669 42.4884 46.0318 42.3106 46.3324 41.7928L47.6061 39.5874C49.0449 40.0172 50.5515 40.2174 52.0539 40.1729L52.7134 42.6333C52.8426 43.1183 53.2809 43.4369 53.7594 43.4369C53.8526 43.4369 53.9468 43.4254 54.0411 43.3999L58.2304 42.2776C58.5078 42.2035 58.745 42.0214 58.889 41.7726C59.033 41.5238 59.0711 41.2274 58.997 40.95L58.3385 38.4895C59.6588 37.7769 60.8667 36.8495 61.898 35.7568L64.1034 37.0316C64.3522 37.1735 64.6486 37.2116 64.926 37.1396C65.2034 37.0656 65.4406 36.8835 65.5846 36.6347L67.7529 32.8783C68.0525 32.3595 67.8747 31.6968 67.3558 31.3972L65.1505 30.1235C65.5803 28.6847 65.7794 27.1738 65.7359 25.6757L68.1965 25.0161C68.7745 24.8618 69.1175 24.2667 68.963 23.6887ZM64.3193 23.8105C63.8079 23.9471 63.4702 24.4341 63.521 24.9613C63.6914 26.7368 63.4511 28.5632 62.8254 30.2413C62.6401 30.7379 62.8402 31.2947 63.2986 31.5593L65.3325 32.7335L64.2483 34.6117L62.2145 33.4364C61.756 33.1727 61.1737 33.2776 60.836 33.6852C59.6978 35.0658 58.2368 36.187 56.6116 36.9281C56.1299 37.1484 55.8769 37.6841 56.0145 38.1954L56.6222 40.4643L54.527 41.0253L53.9193 38.7565C53.7912 38.2791 53.3591 37.9529 52.8732 37.9529C52.8383 37.9529 52.8033 37.955 52.7684 37.9582C50.9886 38.1265 49.1655 37.8873 47.4885 37.2626C46.9909 37.0773 46.436 37.2764 46.1704 37.7358L44.9963 39.7697L43.1181 38.6855L44.2933 36.6516C44.558 36.1932 44.4531 35.6109 44.0445 35.2731C42.6639 34.135 41.5427 32.674 40.8016 31.0488C40.5813 30.5671 40.0435 30.313 39.5343 30.4517L37.2666 31.0594L36.7044 28.9642L38.9732 28.3564C39.4846 28.2199 39.8224 27.7328 39.7716 27.2056C39.6011 25.43 39.8415 23.6038 40.4672 21.9256C40.6525 21.4291 40.4524 20.8722 39.9939 20.6076L37.9601 19.4334L39.0442 17.5553L41.0781 18.7305C41.5375 18.9952 42.1188 18.8893 42.4566 18.4817C43.6127 17.0809 45.0345 15.9894 46.682 15.2388C47.1637 15.0185 47.4167 14.4828 47.2792 13.9715L46.6703 11.7038L48.7656 11.1416L49.3733 13.4104C49.511 13.9218 50.0065 14.2574 50.5241 14.2088C52.3028 14.0415 54.1271 14.2796 55.8041 14.9043C56.3006 15.0906 56.8565 14.8906 57.1222 14.4311L58.2963 12.3973L60.1745 13.4814L58.9992 15.5153C58.7346 15.9737 58.8394 16.556 59.248 16.8938C60.6307 18.0351 61.7519 19.4962 62.4909 21.1181C62.7112 21.5998 63.249 21.8528 63.7582 21.7152L66.0271 21.1075L66.5882 23.2027L64.3193 23.8105Z" fill="black"/>
          </g>
          </g>
          <g id="Group_5">
          <g id="Group_6">
          <path id="Vector_3" d="M23.4585 44.5142C21.0668 44.5142 19.122 46.459 19.122 48.8507C19.122 51.2426 21.0668 53.1872 23.4585 53.1872C25.8502 53.1872 27.795 51.2426 27.795 48.8507C27.7952 46.459 25.8502 44.5142 23.4585 44.5142ZM23.4585 51.019C22.2632 51.019 21.2902 50.046 21.2902 48.8507C21.2902 47.6554 22.2631 46.6824 23.4585 46.6824C24.6538 46.6824 25.6268 47.6553 25.6268 48.8507C25.6268 50.0461 24.6538 51.019 23.4585 51.019Z" fill="black"/>
          </g>
          </g>
          <g id="Group_7">
          <g id="Group_8">
          <path id="Vector_4" d="M48.4272 27.3675H48.6316V27.8412C48.6316 28.095 48.8359 28.2993 49.0896 28.2993C49.3433 28.2993 49.5477 28.095 49.5477 27.8435V27.3697H49.752C50.0057 27.3697 50.21 27.1654 50.21 26.9117C50.21 26.6579 50.0057 26.4536 49.752 26.4536H49.5477V23.3213C49.5477 23.0676 49.3433 22.8633 49.0896 22.8633C48.8359 22.8633 48.6316 23.0676 48.6316 23.3213V26.4514H48.4272C48.1735 26.4514 47.9692 26.6557 47.9692 26.9094C47.9692 27.1631 48.1735 27.3675 48.4272 27.3675V27.3675Z" fill="black"/>
          <path id="Vector_5" d="M50.8387 24.9425H51.0431V27.8412C51.0431 28.095 51.2474 28.2993 51.5011 28.2993C51.7548 28.2993 51.9592 28.095 51.9592 27.8412V24.9425H52.1635C52.4172 24.9425 52.6215 24.7382 52.6215 24.4844C52.6215 24.2307 52.4172 24.0264 52.1635 24.0264H51.9592V23.3213C51.9592 23.0676 51.7548 22.8633 51.5011 22.8633C51.2474 22.8633 51.0431 23.0676 51.0431 23.3213V24.0264H50.8387C50.585 24.0264 50.3807 24.2307 50.3807 24.4844C50.3807 24.7382 50.585 24.9425 50.8387 24.9425V24.9425Z" fill="black"/>
          <path id="Vector_6" d="M53.2502 26.2652H53.4546V27.8437C53.4546 28.0974 53.6589 28.3017 53.9126 28.3017C54.1663 28.3017 54.3707 28.0974 54.3707 27.8437V26.2652H54.575C54.8287 26.2652 55.0331 26.0609 55.0331 25.8071C55.0331 25.5534 54.8287 25.3491 54.575 25.3491H54.3707V23.3238C54.3707 23.07 54.1663 22.8657 53.9126 22.8657C53.6589 22.8657 53.4546 23.07 53.4546 23.3238V25.3491H53.2502C52.9965 25.3491 52.7922 25.5534 52.7922 25.8071C52.7922 26.0609 52.9965 26.2652 53.2502 26.2652Z" fill="black"/>
          <path id="Vector_7" d="M56.5442 21H46.4581C46.2066 21 46 21.2043 46 21.4581V29.7075C46 29.9612 46.2043 30.1655 46.4581 30.1655H51.0408V31.0861H49.3793C49.1255 31.0861 48.9212 31.2905 48.9212 31.5442C48.9212 31.7979 49.1255 32.0022 49.3793 32.0022H53.6207C53.8745 32.0022 54.0788 31.7979 54.0788 31.5442C54.0788 31.2905 53.8745 31.0861 53.6207 31.0861H51.9592V30.1655H56.5419C56.7957 30.1655 57 29.9612 57 29.7075V21.4581C57.0022 21.2043 56.7957 21 56.5442 21ZM56.0839 29.2494H46.9183V21.9161H56.0861V29.2494H56.0839Z" fill="black"/>
          </g>
          </g>
          </g>
          <g class="_BLIND_arrow_up">
          <path id="Vector_8" d="M6 25.3335H30C30.243 25.3327 30.4812 25.2657 30.6889 25.1396C30.8966 25.0136 31.0661 24.8333 31.1789 24.6181C31.2918 24.4029 31.3438 24.161 31.3295 23.9184C31.3151 23.6759 31.2348 23.4418 31.0973 23.2415L19.0973 5.90814C18.6 5.18947 17.4027 5.18947 16.904 5.90814L4.904 23.2415C4.7651 23.4414 4.68365 23.6756 4.66849 23.9185C4.65333 24.1615 4.70504 24.404 4.81802 24.6196C4.93099 24.8353 5.1009 25.0158 5.30929 25.1417C5.51767 25.2675 5.75656 25.3339 6 25.3335Z" fill="black"/>
          </g>
          <g class="_BLIND_arrow_down">
          <path id="Vector_9" d="M71 50.6665L47 50.6665C46.757 50.6673 46.5188 50.7343 46.3111 50.8604C46.1034 50.9864 45.9339 51.1667 45.8211 51.3819C45.7082 51.5971 45.6562 51.839 45.6705 52.0816C45.6849 52.3241 45.7652 52.5582 45.9027 52.7585L57.9027 70.0919C58.4 70.8105 59.5973 70.8105 60.096 70.0919L72.096 52.7585C72.2349 52.5586 72.3164 52.3244 72.3315 52.0815C72.3467 51.8385 72.295 51.596 72.182 51.3804C72.069 51.1647 71.8991 50.9842 71.6907 50.8583C71.4823 50.7325 71.2434 50.6661 71 50.6665Z" fill="black"/>
          </g>
          </g>
          <defs>
          <linearGradient id="paint0_linear_2252_1988" x1="37.5" y1="0" x2="37.5" y2="75" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFEC43"/>
          <stop offset="0.833333" stop-color="#FFEC43" stop-opacity="0"/>
          </linearGradient>
          <clipPath id="clip0_2252_1988">
          <rect width="75" height="75" fill="white"/>
          </clipPath>
          <clipPath id="clip1_2252_1988">
          <rect width="63" height="63" fill="white" transform="translate(6 6)"/>
          </clipPath>
          </defs>
          </svg>
      </div>

      <div class="_blind__dashboard__options _blind__dashboard__container">

        <div class="_blind__dashboard__header">
          <button title="${createLocalization().reset}" id="blind_styles_default">${createLocalization().reset}</button>
          <button title="${createLocalization().close}" id="blind_quit">${createLocalization().close}</button>
        </div>
    
        <div class="_blind__dashboard__fonts">

          <div title="${createLocalization().fontsize}">
            <label for="blind_text_zoom">${createLocalization().fontsize} <span>100</span> %</label>
            <input type="range" name="" id="blind_text_zoom" min="100" max="125" value="100">
          </div>

          <div title="${createLocalization().kerning}">
            <label for="blind_text_kerning">${createLocalization().kerning} <span>0</span></label>
            <input type="range" min="0" max="10" value="0" name="" id="blind_text_kerning">
          </div>

          <div title="${createLocalization().wordspacing}">
            <label for="blind_text_word_spacing">${createLocalization().wordspacing} <span>0</span></label>
            <input type="range" min="0" max="25" value="0" name="" id="blind_text_word_spacing">
          </div>

          <div title="${createLocalization().lineheight}">
            <label for="blind_text_line_height">${createLocalization().lineheight} <span>0</span></label>
            <input type="range" min="100" max="250" value="100" name="" id="blind_text_line_height">
          </div>

        </div>
    
        <div class="_blind__dashboard__scheme">
          <button title="${createLocalization().blackonwhite}" id="blind_scheme_default">
            <svg class="_BLIND_no_invert" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clip-path="url(#clip0_2254_2035)">
              <rect width="30" height="30" fill="white"/>
              <path d="M9.48864 28H1.81818L10.4602 1.81818H20.1761L28.8182 28H21.1477L15.4205 9.02841H15.2159L9.48864 28ZM8.05682 17.6705H22.4773V22.9886H8.05682V17.6705Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_2254_2035">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <span>
            ${createLocalization().blackonwhite}
            </span>
          </button>
          <button title="${createLocalization().whiteonblack}" id="blind_scheme_dark">
            <svg class="_BLIND_no_invert" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clip-path="url(#clip0_2254_2035)">
              <rect width="30" height="30" fill="black"/>
              <path d="M9.48864 28H1.81818L10.4602 1.81818H20.1761L28.8182 28H21.1477L15.4205 9.02841H15.2159L9.48864 28ZM8.05682 17.6705H22.4773V22.9886H8.05682V17.6705Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_2254_2035">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <span>
              ${createLocalization().whiteonblack}
            </span>
          </button>
          <button title="${createLocalization().darkblueonblue}" id="blind_scheme_blue">
            <svg class="_BLIND_no_invert" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clip-path="url(#clip0_2254_2035)">
              <rect width="30" height="30" fill="#9DD1FF"/>
              <path d="M9.48864 28H1.81818L10.4602 1.81818H20.1761L28.8182 28H21.1477L15.4205 9.02841H15.2159L9.48864 28ZM8.05682 17.6705H22.4773V22.9886H8.05682V17.6705Z" fill="#063462"/>
              </g>
              <defs>
              <clipPath id="clip0_2254_2035">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <span>
              ${createLocalization().darkblueonblue}
            </span>
          </button>
          <button title="${createLocalization().brownonbeige}" id="blind_scheme_brown">
            <svg class="_BLIND_no_invert" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clip-path="url(#clip0_2254_2035)">
              <rect width="30" height="30" fill="#F7F3D6"/>
              <path d="M9.48864 28H1.81818L10.4602 1.81818H20.1761L28.8182 28H21.1477L15.4205 9.02841H15.2159L9.48864 28ZM8.05682 17.6705H22.4773V22.9886H8.05682V17.6705Z" fill="#87755F"/>
              </g>
              <defs>
              <clipPath id="clip0_2254_2035">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <span>
              ${createLocalization().brownonbeige}
            </span>
          </button>
          <button title="${createLocalization().greenondarkbrown}" id="blind_scheme_greenBrown">
            <svg class="_BLIND_no_invert" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clip-path="url(#clip0_2254_2035)">
              <rect width="30" height="30" fill="#3B2716"/>
              <path d="M9.48864 28H1.81818L10.4602 1.81818H20.1761L28.8182 28H21.1477L15.4205 9.02841H15.2159L9.48864 28ZM8.05682 17.6705H22.4773V22.9886H8.05682V17.6705Z" fill="#A9DD38"/>
              </g>
              <defs>
              <clipPath id="clip0_2254_2035">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <span>
            ${createLocalization().greenondarkbrown}
            </span>
          </button>
        </div>
    
        <div class="_blind__dashboard__img">
          <button title="${createLocalization().bwpics}" id="blind_images_bw">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27 6.6C27 5.64522 26.6207 4.72955 25.9456 4.05442C25.2705 3.37928 24.3548 3 23.4 3H6.6C5.64522 3 4.72955 3.37928 4.05441 4.05442C3.37928 4.72955 3 5.64522 3 6.6V14.4C3.0001 14.5012 3.013 14.602 3.0384 14.7C3.013 14.798 3.0001 14.8988 3 15V23.4C3 24.3548 3.37928 25.2705 4.05441 25.9456C4.72955 26.6207 5.64522 27 6.6 27H23.4C24.3548 27 25.2705 26.6207 25.9456 25.9456C26.6207 25.2705 27 24.3548 27 23.4V19.8C26.9999 19.6988 26.987 19.598 26.9616 19.5C26.987 19.402 26.9999 19.3012 27 19.2V6.6ZM23.4072 18.396C23.8248 18.4032 24.2232 18.4224 24.6 18.4512V6.6C24.6 6.28174 24.4736 5.97652 24.2485 5.75147C24.0235 5.52643 23.7183 5.4 23.4 5.4H6.6C6.28174 5.4 5.97651 5.52643 5.75147 5.75147C5.52643 5.97652 5.4 6.28174 5.4 6.6V13.8192C10.5564 13.986 14.28 15.228 16.896 16.9668C15.9048 17.3184 14.796 17.8188 13.7088 18.474C12.03 19.482 10.3236 20.898 9.1752 22.7736C9.09294 22.908 9.03796 23.0573 9.0134 23.213C8.98884 23.3687 8.99519 23.5276 9.03207 23.6809C9.06896 23.8341 9.13566 23.9785 9.22837 24.106C9.32108 24.2334 9.43798 24.3413 9.5724 24.4236C9.70682 24.5059 9.85613 24.5608 10.0118 24.5854C10.1675 24.61 10.3264 24.6036 10.4797 24.5667C10.6329 24.5298 10.7773 24.4631 10.9048 24.3704C11.0322 24.2777 11.1401 24.1608 11.2224 24.0264C12.1056 22.5828 13.476 21.4128 14.9448 20.5308C16.4112 19.65 17.9028 19.1004 18.9372 18.8604C20.3943 18.5276 21.8864 18.3721 23.3808 18.3972H23.4072V18.396ZM21.0264 8.3856C20.4915 8.00876 19.8543 7.80443 19.2 7.8C18.708 7.8 17.9964 7.938 17.3736 8.3856C16.6896 8.8776 16.2 9.6888 16.2 10.8C16.2 11.9112 16.6896 12.7212 17.3736 13.2132C17.9083 13.5905 18.5456 13.7952 19.2 13.8C19.692 13.8 20.4036 13.662 21.0264 13.2132C21.7104 12.7212 22.2 11.9124 22.2 10.8C22.2 9.6888 21.7104 8.8788 21.0264 8.3856Z" fill="black"/>
            </svg>
            ${createLocalization().removepics}
          </button>
          <button title="${createLocalization().bwpics}" id="blind_images_remove">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M3.121 20.3385L12.392 16.3652L17.6897 18.7731M21.5028 27.1209L24.3119 24.3118M27.121 21.5027L24.3119 24.3118M24.3119 24.3118L21.5028 21.5027M24.3119 24.3118L27.121 27.1209M20.3386 12.392C19.6361 12.392 18.9623 12.1129 18.4656 11.6161C17.9688 11.1194 17.6897 10.4456 17.6897 9.7431C17.6897 9.04058 17.9688 8.36683 18.4656 7.87007C18.9623 7.37331 19.6361 7.09424 20.3386 7.09424C21.0411 7.09424 21.7149 7.37331 22.2116 7.87007C22.7084 8.36683 22.9875 9.04058 22.9875 9.7431C22.9875 10.4456 22.7084 11.1194 22.2116 11.6161C21.7149 12.1129 21.0411 12.392 20.3386 12.392V12.392Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.3653 26.9608H3.91566C3.7049 26.9608 3.50278 26.8771 3.35375 26.7281C3.20472 26.5791 3.121 26.3769 3.121 26.1662V3.91575C3.121 3.705 3.20472 3.50287 3.35375 3.35384C3.50278 3.20482 3.7049 3.12109 3.91566 3.12109H26.1661C26.3768 3.12109 26.579 3.20482 26.728 3.35384C26.877 3.50287 26.9607 3.705 26.9607 3.91575V16.3654" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ${createLocalization().removepics}
          </button>
          <button title="${createLocalization().turnonimages}" id="blind_images_default">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M15.6316 25.7368H3.75789C3.55689 25.7368 3.36412 25.657 3.22198 25.5149C3.07985 25.3727 3 25.18 3 24.9789V3.75789C3 3.55689 3.07985 3.36412 3.22198 3.22198C3.36412 3.07985 3.55689 3 3.75789 3H24.9789C25.18 3 25.3727 3.07985 25.5149 3.22198C25.657 3.36412 25.7368 3.55689 25.7368 3.75789V15.6316" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 19.4211L11.8421 15.6317L18.7895 18.7896M19.4211 23.2106H23.2105M27 23.2106H23.2105M23.2105 23.2106V19.4211M23.2105 23.2106V27.0001M19.4211 11.8422C18.751 11.8422 18.1085 11.576 17.6347 11.1022C17.1609 10.6285 16.8947 9.98589 16.8947 9.31587C16.8947 8.64585 17.1609 8.00327 17.6347 7.52949C18.1085 7.05572 18.751 6.78955 19.4211 6.78955C20.0911 6.78955 20.7337 7.05572 21.2074 7.52949C21.6812 8.00327 21.9474 8.64585 21.9474 9.31587C21.9474 9.98589 21.6812 10.6285 21.2074 11.1022C20.7337 11.576 20.0911 11.8422 19.4211 11.8422V11.8422Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ${createLocalization().turnonimages}
          </button>
        </div>

      </div>

    </div>
`;
document.body.prepend(createBlindDashboard);
document.body.append(createBlindDashboardStyles);

function createLocalization() {
  const ru = {
    reset: 'Сбросить',
    close: 'Выйти',
    fontsize: 'Размер шрифта',
    kerning: 'Кёрнинг',
    wordspacing: 'Пространство между слов',
    lineheight: 'Межстрочный интервал',
    blackonwhite: 'Чёрным по белому',
    whiteonblack: 'Белым по чёрному',
    darkblueonblue: 'Тёмно-синим по голубому',
    brownonbeige: 'Коричневым по бежевому',
    greenondarkbrown: 'Зеленым по тёмно-коричневому',
    bwpics: 'Чёрно-белые фото',
    removepics: 'Удалить изображения',
    turnonimages: 'Показать изображения'
  },
  en = {
    reset: 'Reset',
    close: 'Close',
    fontsize: 'Font-size',
    kerning: 'Kerning',
    wordspacing: 'Word-spacing',
    lineheight: 'Line-height',
    blackonwhite: 'Black on white',
    whiteonblack: 'White on black',
    darkblueonblue: 'Dark blue on blue',
    brownonbeige: 'Brown on beige',
    greenondarkbrown: 'Green on dark brown',
    bwpics: 'Black & white photos',
    removepics: 'Remove images',
    turnonimages: 'Turn on images'
  },
  kk = {
    reset: 'Қалпына келтіру',
    close: 'Шығу',
    fontsize: 'Қаріп өлшемі',
    kerning: 'Қарғылау',
    wordspacing: 'Сөздер арасындағы кеңістік',
    lineheight: 'Жол аралығы',
    blackonwhite: 'Аққа қара',
    whiteonblack: 'Қарада ақ',
    darkblueonblue: 'Көк үстінде қою көк',
    brownonbeige: 'Бежевыйдағы қоңыр',
    greenondarkbrown: 'Қара қоңырда жасыл',
    bwpics: 'Ақ-қара фотосуреттер',
    removepics: 'Суреттерді жою',
    turnonimages: 'Суреттерді көрсету'
  };
  let currentLanguage = window.location.href.split('/')[3].toLowerCase();
    if (currentLanguage == 'kk') {
      return kk;
    } else if(currentLanguage == 'en') {
      return en;
    } else {
      return ru;
    }
  
}

