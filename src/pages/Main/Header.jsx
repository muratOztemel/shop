const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="header">
        <div className="logo">
          <a href="/">
            <h2 className="md:text-4xl text-2xl font-bold">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <span className="ant-input-affix-wrapper !rounded-full max-w-[800px] ant-input-affix-wrapper-lg css-1amspvc">
            <span className="ant-input-prefix">
              <span
                role="img"
                aria-label="search"
                className="anticon anticon-search">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="search"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true">
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
              </span>
            </span>
            <input
              placeholder="Search..."
              className="ant-input ant-input-lg css-1amspvc"
              type="text"
            />
          </span>
        </div>
        <div className="menu-links md:border-t-0 border-t">
          <a
            className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all   active"
            href="/">
            <span
              role="img"
              aria-label="home"
              className="anticon anticon-home md:text-2xl text-xl">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="home"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true">
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
              </svg>
            </span>
            <span className="md:text-[12px] text-[10px]">Ana Sayfa</span>
          </a>
          <span className="ant-badge md:flex hidden css-1amspvc">
            <a
              className="menu-link flex flex-col items-center justify-center relative  hover:text-[#40a9ff] transition-all  false"
              href="/cart">
              <span className="flex flex-col justify-center">
                <span
                  role="img"
                  aria-label="shopping-cart"
                  className="anticon anticon-shopping-cart md:text-2xl text-xl">
                  <svg
                    viewBox="0 0 1024 1024"
                    focusable="false"
                    data-icon="shopping-cart"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"></path>
                  </svg>
                </span>
                <span className="md:text-[12px] text-[10px]">Sepet</span>
              </span>
            </a>
          </span>
          <a
            className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all  false"
            href="/bills">
            <span
              role="img"
              aria-label="copy"
              className="anticon anticon-copy md:text-2xl text-xl">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="copy"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true">
                <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
              </svg>
            </span>
            <span className="md:text-[12px] text-[10px]">Faturalar</span>
          </a>
          <a
            className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all   false"
            href="/customers">
            <span
              role="img"
              aria-label="user"
              className="anticon anticon-user md:text-2xl text-xl">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="user"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true">
                <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
              </svg>
            </span>
            <span className="md:text-[12px] text-[10px]">Müşteriler</span>
          </a>
          <a
            className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all false"
            href="/statistics">
            <span
              role="img"
              aria-label="bar-chart"
              className="anticon anticon-bar-chart md:text-2xl text-xl">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="bar-chart"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true">
                <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </span>
            <span className="md:text-[12px] text-[10px]">İstatistikler</span>
          </a>
          <div>
            <a className="menu-link flex flex-col items-center  " href="/">
              <span
                role="img"
                aria-label="login"
                className="anticon anticon-login md:text-2xl text-xl">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="login"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true">
                  <path d="M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"></path>
                </svg>
              </span>
              <span className="md:text-[12px] text-[10px]">Çıkış</span>
            </a>
          </div>
        </div>
        <span className="ant-badge md:hidden flex css-1amspvc">
          <a
            className="menu-link flex flex-col items-center   justify-center relative  false"
            href="/cart">
            <span className="flex flex-col justify-center">
              <span
                role="img"
                aria-label="shopping-cart"
                className="anticon anticon-shopping-cart text-2xl">
                <svg
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  data-icon="shopping-cart"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true">
                  <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"></path>
                </svg>
              </span>
              <span className="text-[12px]">Sepet</span>
            </span>
          </a>
        </span>
      </header>
    </div>
  );
};
export default Header;
