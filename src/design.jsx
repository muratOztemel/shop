const design = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header
        id="siteHeader"
        className="header-two sticky-header sticky top-0 z-20 lg:relative w-full h-16 lg:h-auto">
        <div className="z-20 transition-all duration-200 ease-in-out innerSticky lg:w-full body-font bg-fill-secondary">
          <div className="w-full transition-all duration-200 ease-in-out top-bar-search hidden lg:max-w-[600px] absolute z-30 px-4 md:px-6 top-1">
            <div className="overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed"></div>
            <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
              <div className="flex flex-col w-full mx-auto">
                <form className="relative flex w-full rounded-md" role="search">
                  <label
                    htmlFor="mobile-search"
                    className="flex flex-1 items-center py-0.5">
                    <input
                      id="mobile-search"
                      className="text-heading outline-none w-full h-[52px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm lg:text-15px rounded-md transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50 border border-border-base"
                      placeholder="What are you looking..."
                      aria-label="mobile-search"
                      autoComplete="off"
                      name="search"
                    />
                  </label>
                  <span className="absolute top-0 flex items-center justify-center h-full w-14 md:w-16 ltr:right-0 rtl:left-0 shrink-0 focus:outline-none">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="w-5 h-5 text-brand-dark text-opacity-40">
                      <path
                        d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                </form>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-16 py-3 top-bar lg:h-auto mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
            <a
              className="inline-block focus:outline-none max-w-[131px] w-full logo -mt-1.5 md:-mt-1 "
              href="/en">
              <img
                alt="BoroBazar"
                loading="eager"
                width="131"
                height="30"
                decoding="async"
                src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <div className="w-full transition-all duration-200 ease-in-out hidden lg:flex lg:max-w-[650px] 2xl:max-w-[800px] lg:ltr:ml-7 lg:rtl:mr-7 lg:ltr:mr-5 lg:rtl:ml-5">
              <div className="overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed"></div>
              <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
                <div className="flex flex-col w-full mx-auto">
                  <form
                    className="relative flex w-full rounded-md"
                    role="search">
                    <label
                      htmlFor="top-bar-search"
                      className="flex flex-1 items-center py-0.5">
                      <input
                        id="top-bar-search"
                        className="text-heading outline-none w-full h-[52px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm lg:text-15px rounded-md transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50 border border-border-base"
                        placeholder="What are you looking..."
                        aria-label="top-bar-search"
                        autoComplete="off"
                        name="search"
                      />
                    </label>
                    <span className="absolute top-0 flex items-center justify-center h-full w-14 md:w-16 ltr:right-0 rtl:left-0 shrink-0 focus:outline-none">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="w-5 h-5 text-brand-dark text-opacity-40">
                        <path
                          d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 -mx-2.5 xl:-mx-3.5">
              <div className="xl:mx-3.5 mx-2.5">
                <div className="relative z-10 lg:top-[1px]">
                  <button
                    className="relative w-full py-2 rounded-lg cursor-pointer text-brand-dark ltr:pl-3 rtl:pr-3 ltr:pr-5 rtl:pl-5 ltr:text-left rtl:text-right focus:outline-none"
                    id="headlessui-listbox-button-:r0:"
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    data-headlessui-state="">
                    <span className="flex items-center text-sm truncate lg:text-15px">
                      <span className="w-5 h-5 overflow-hidden rounded-full ltr:mr-2 rtl:ml-2 shrink-0"></span>
                      <span className="leading-5 pb-0.5"></span>
                    </span>
                    <span className="absolute inset-y-0 flex items-center pointer-events-none ltr:right-0 rtl:left-0">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="w-3 h-3.5 text-brand-dark opacity-40"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <button
                className="flex items-center justify-center shrink-0 h-auto focus:outline-none transform hidden lg:flex mx-2.5 xl:mx-3.5"
                aria-label="cart-button">
                <div className="relative flex items-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-brand-dark text-opacity-40">
                    <g clipPath="url(#clip0)">
                      <path
                        d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.1"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="22" height="22" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="min-w-[20px] min-h-[20px] p-0.5 rounded-[20px] flex items-center justify-center bg-brand text-brand-light absolute -top-2.5 ltr:left-2.5 rtl:right-2.5 text-10px font-bold">
                    0
                  </span>
                </div>
                <span className="text-sm font-normal lg:text-15px text-brand-dark ltr:ml-2 rtl:mr-2">
                  Cart
                </span>
              </button>
              <div className="items-center hidden lg:flex shrink-0 mx-2.5 xl:mx-3.5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-brand-dark text-opacity-40">
                  <path
                    d="M20.9001 11C20.9001 5.52836 16.4723 1.09998 11.0001 1.09998C5.52848 1.09998 1.1001 5.52775 1.1001 11C1.1001 16.4231 5.49087 20.9 11.0001 20.9C16.4867 20.9 20.9001 16.448 20.9001 11ZM11.0001 2.26013C15.8193 2.26013 19.7399 6.1808 19.7399 11C19.7399 12.7629 19.2156 14.4573 18.2432 15.8926C14.3386 11.6924 7.66873 11.6849 3.75698 15.8926C2.78459 14.4573 2.26025 12.7629 2.26025 11C2.26025 6.1808 6.18092 2.26013 11.0001 2.26013ZM4.48056 16.8201C7.95227 12.926 14.0488 12.9269 17.5195 16.8201C14.0361 20.7172 7.96541 20.7184 4.48056 16.8201Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.2"></path>
                  <path
                    d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.2"></path>
                </svg>
                <button
                  className="text-sm font-normal lg:text-15px text-brand-dark focus:outline-none ltr:ml-2 rtl:mr-2"
                  aria-label="Authentication">
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <div className="hidden navbar bg-brand-light lg:block">
            <div className="flex items-center justify-between h-16 mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
              <a
                className="inline-block focus:outline-none max-w-[131px] w-full !w-0 transition-all duration-200 ease-in-out opacity-0 navbar-logo"
                href="/en">
                <img
                  alt="BoroBazar"
                  loading="eager"
                  width="131"
                  height="30"
                  decoding="async"
                  src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg"
                  style={{ color: "transparent" }}
                />
              </a>
              <nav className="headerMenu flex w-full relative -mx-3 xl:-mx-4 transition-all duration-200 ease-in-out">
                <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
                  <a
                    className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                    href="/vintage">
                    Demos
                    <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-brand-dark opacity-40 group-hover:text-brand">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                  </a>
                  <div className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 invisible bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
                    <ul className="py-5 text-sm text-brand-muted">
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage">
                          Modern
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/classic">
                          Classic
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/vintage">
                          Vintage
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/standard">
                          Standard
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/minimal">
                          Minimal
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/trendy">
                          Trendy
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/elegant">
                          Elegant
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/refined">
                          Refined
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/antique">
                          Antique
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/ancient">
                          Ancient
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
                  <a
                    className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                    href="/vintage/search">
                    Dietary
                    <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-brand-dark opacity-40 group-hover:text-brand">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                  </a>
                  <div className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 invisible bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
                    <ul className="py-5 text-sm text-brand-muted">
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/search">
                          Vegetarian
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/search">
                          Kakogenic
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/search">
                          Mediterranean
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/search">
                          Organic
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
                  <a
                    className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                    href="/vintage/search">
                    Search
                  </a>
                </div>
                <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
                  <a
                    className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                    href="/vintage/shops">
                    Shops
                  </a>
                </div>
                <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
                  <a
                    className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                    href="/vintage">
                    Pages
                    <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-brand-dark opacity-40 group-hover:text-brand">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                  </a>
                  <div className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 invisible bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
                    <ul className="py-5 text-sm text-brand-muted">
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage">
                          Users
                          <span className="text-sm mt-0.5 shrink-0">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              className="transition duration-300 ease-in-out text-body group-hover:text-brand-dark"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                            </svg>
                          </span>
                        </a>
                        <ul className="absolute z-0 invisible w-56 py-3 transition-all duration-300 opacity-0 subMenuChild shadow-subMenu bg-brand-light ltr:right-full rtl:left-full 2xl:ltr:right-auto 2xl:rtl:left-auto 2xl:ltr:left-full 2xl:rtl:right-full top-4">
                          <li className="relative">
                            <a
                              className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                              href="/vintage/my-account/account-settings">
                              My Account
                            </a>
                          </li>
                          <li className="relative">
                            <a
                              className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                              href="/vintage/signin">
                              Sign In
                            </a>
                          </li>
                          <li className="relative">
                            <a
                              className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                              href="/vintage/signup">
                              Sign Up
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/faq">
                          FAQ
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/about-us">
                          About Us
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/privacy">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/terms">
                          Terms &amp; Condition
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/contact-us">
                          Contact Us
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/checkout">
                          Checkout
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/vintage/404">
                          404
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="flex items-center ltr:ml-auto rtl:mr-auto shrink-0">
                <div className="flex items-center py-4 overflow-hidden transition-all duration-200 ease-in-out opacity-0 shrink-0 navbar-right">
                  <button
                    type="button"
                    aria-label="Search Toggle"
                    title="Search toggle"
                    className="flex items-center justify-center w-12 h-full transition duration-200 ease-in-out outline-none ltr:mr-6 rtl:ml-6 md:w-14 hover:text-heading focus:outline-none">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="w-[22px] h-[22px] text-brand-dark text-opacity-40">
                      <path
                        d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                        fill="currentColor"></path>
                    </svg>
                  </button>
                  <button
                    className="flex items-center justify-center shrink-0 h-auto focus:outline-none transform"
                    aria-label="cart-button">
                    <div className="relative flex items-center">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-brand-dark text-opacity-40">
                        <g clipPath="url(#clip0)">
                          <path
                            d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="0.1"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="22" height="22" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="min-w-[20px] min-h-[20px] p-0.5 rounded-[20px] flex items-center justify-center bg-brand text-brand-light absolute -top-2.5 ltr:left-2.5 rtl:right-2.5 text-10px font-bold">
                        0
                      </span>
                    </div>
                    <span className="text-sm font-normal lg:text-15px text-brand-dark ltr:ml-2 rtl:mr-2">
                      Cart
                    </span>
                  </button>
                  <div className="flex items-center shrink-0 ltr:ml-7 rtl:mr-7">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-brand-dark text-opacity-40">
                      <path
                        d="M20.9001 11C20.9001 5.52836 16.4723 1.09998 11.0001 1.09998C5.52848 1.09998 1.1001 5.52775 1.1001 11C1.1001 16.4231 5.49087 20.9 11.0001 20.9C16.4867 20.9 20.9001 16.448 20.9001 11ZM11.0001 2.26013C15.8193 2.26013 19.7399 6.1808 19.7399 11C19.7399 12.7629 19.2156 14.4573 18.2432 15.8926C14.3386 11.6924 7.66873 11.6849 3.75698 15.8926C2.78459 14.4573 2.26025 12.7629 2.26025 11C2.26025 6.1808 6.18092 2.26013 11.0001 2.26013ZM4.48056 16.8201C7.95227 12.926 14.0488 12.9269 17.5195 16.8201C14.0361 20.7172 7.96541 20.7184 4.48056 16.8201Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.2"></path>
                      <path
                        d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.2"></path>
                    </svg>
                    <button
                      className="text-sm font-normal lg:text-15px text-brand-dark focus:outline-none ltr:ml-2 rtl:mr-2"
                      aria-label="Authentication">
                      Sign In
                    </button>
                  </div>
                </div>
                <div className="delivery-address">
                  <button className="inline-flex items-center text-15px text-brand-dark tracking-[0.1px]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 0C5.27737 0 2.25 3.02737 2.25 6.75C2.25 11.4289 8.343 17.5759 8.60175 17.8358C8.712 17.9449 8.856 18 9 18C9.144 18 9.288 17.9449 9.39825 17.8358C9.657 17.5759 15.75 11.4289 15.75 6.75C15.75 3.02737 12.7226 0 9 0ZM9 16.6241C7.65675 15.1864 3.375 10.3241 3.375 6.75C3.375 3.64838 5.89838 1.125 9 1.125C12.1016 1.125 14.625 3.64838 14.625 6.75C14.625 10.3208 10.3433 15.1864 9 16.6241Z"
                        fill="#8C969F"></path>
                      <path
                        d="M9 3.375C7.13925 3.375 5.625 4.88925 5.625 6.75C5.625 8.61075 7.13925 10.125 9 10.125C10.8608 10.125 12.375 8.61075 12.375 6.75C12.375 4.88925 10.8608 3.375 9 3.375ZM9 9C7.75912 9 6.75 7.99088 6.75 6.75C6.75 5.50912 7.75912 4.5 9 4.5C10.2409 4.5 11.25 5.50912 11.25 6.75C11.25 7.99088 10.2409 9 9 9Z"
                        fill="#8C969F"></path>
                    </svg>
                    <span className="ltr:pl-1.5 lg:rtl:pr-1.5">Delivery:</span>
                    <span className="font-semibold text-brand relative top-[1px] ltr:pl-1 rtl:pr-1">
                      Address
                    </span>
                    <span className="ltr:pl-1.5 lg:rtl:pr-1.5">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="text-xs text-brand-dark text-opacity-40"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="relative flex-grow">
        <div className="border-t border-border-base "></div>
        <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
          <div className="flex pb-16 pt-7 lg:pt-7 lg:pb-20">
            <div className="sticky hidden h-full lg:pt-4 shrink-0 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16 lg:block w-80 xl:w-96 top-16">
              <div className="space-y-10">
                <div className="block">
                  <h3 className="text-brand-dark text-15px sm:text-base font-semibold mb-5 -mt-1">
                    Categories
                  </h3>
                  <div className="max-h-full overflow-hidden border rounded border-border-base">
                    <div
                      data-overlayscrollbars-initialize=""
                      data-overlayscrollbars="host">
                      <div className="os-size-observer">
                        <div className="os-size-observer-listener ltr"></div>
                      </div>
                      <div
                        data-overlayscrollbars-contents=""
                        data-overlayscrollbars-viewport="scrollbarHidden"
                        tabIndex="-1"
                        style={{
                          marginRight: "0px",
                          marginBottom: "0px",
                          marginLeft: "0px",
                          top: "0px",
                          right: "auto",
                          left: "0px",
                          width: "calc(100% + 0px)",
                          padding: "0px",
                        }}>
                        <ul className="">
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Fresh Vegetables"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/fresh-vegetables.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Fresh Vegetables
                              </span>
                              <span className="ltr:ml-auto rtl:mr-auto">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  className="text-base text-brand-dark text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Diet Foods"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/diet-foods.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Diet Foods
                              </span>
                              <span className="ltr:ml-auto rtl:mr-auto">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  className="text-base text-brand-dark text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Diet Nutrition"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/diet-nutrition.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Diet Nutrition
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Fast Food Items"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/fast-food.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Fast Food Items
                              </span>
                              <span className="ltr:ml-auto rtl:mr-auto">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  className="text-base text-brand-dark text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Fruits Items"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/fruits-items.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Fruits Items
                              </span>
                              <span className="ltr:ml-auto rtl:mr-auto">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  className="text-base text-brand-dark text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Healthy Foods"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/healthy-foods.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Healthy Foods
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Grocery Items"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/grocery-items.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Grocery Items
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Quality Milk"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/quality-milk.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Quality Milk
                              </span>
                              <span className="ltr:ml-auto rtl:mr-auto">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  className="text-base text-brand-dark text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Cold Drinks"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/cold-drinks.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Cold Drinks
                              </span>
                              <span className="ltr:ml-auto rtl:mr-auto">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  className="text-base text-brand-dark text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Beaf Steak"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/beaf-steak.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Beaf Steak
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Vitamin Items"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/vitamin-items.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Vitamin Items
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Raw Chicken"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/raw-chicken.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Raw Chicken
                              </span>
                              <span className="ltr:ml-auto rtl:mr-auto">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  className="text-base text-brand-dark text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Breakfast Item"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/breakfast-item.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Breakfast Item
                              </span>
                              <span className="ltr:ml-auto rtl:mr-auto">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  className="text-base text-brand-dark text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Fish Items"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/fish-items.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Fish Items
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Green Vegetables"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/green-vegetables.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Green Vegetables
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Cookies &amp; Biscuits"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/cookies-biscuits.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Cookies &amp; Biscuits
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Frozen Desserts"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/frozen-desserts.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Frozen Desserts
                              </span>
                            </button>
                          </li>
                          <li className="flex justify-between items-center transition text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3">
                            <button className="flex items-center w-full ltr:text-left rtl:text-right cursor-pointer group">
                              <div className="inline-flex shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto ltr:mr-2.5 rtl:ml-2.5 md:ltr:mr-4 md:rtl:ml-4 2xl:ltr:mr-3 2xl:rtl:ml-3 3xl:ltr:mr-4 3xl:rtl:ml-4">
                                <img
                                  alt="Deli Meat"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  src="https://borobazar.vercel.app/assets/images/category/icon/deli-meat.svg"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                  }}
                                />
                              </div>
                              <span className="text-brand-dark capitalize py-0.5">
                                Deli Meat
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                        <div className="os-scrollbar-track">
                          <div
                            className="os-scrollbar-handle"
                            style={{ width: "100%" }}></div>
                        </div>
                      </div>
                      <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                        <div className="os-scrollbar-track">
                          <div
                            className="os-scrollbar-handle"
                            style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <h3 className="text-brand-dark text-15px sm:text-base font-semibold mb-5 -mt-1">
                    Dietary Needs
                  </h3>
                  <div className="flex flex-col p-5 border rounded-md border-border-base">
                    <label className="group flex items-center justify-between text-brand-dark text-sm md:text-15px cursor-pointer transition-all hover:text-opacity-80 border-b border-border-base py-3.5 last:border-b-0 last:pb-0 first:pt-0">
                      <span className="ltr:mr-3.5 rtl:ml-3.5 -mt-0.5">
                        Organic
                      </span>
                      <input
                        className="form-checkbox text-yellow-100 w-[22px] h-[22px] border-2 border-border-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-yellow-100 focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-yellow-100 hover:checked:bg-yellow-100"
                        type="checkbox"
                        value="organic"
                        name="organic"
                      />
                    </label>
                    <label className="group flex items-center justify-between text-brand-dark text-sm md:text-15px cursor-pointer transition-all hover:text-opacity-80 border-b border-border-base py-3.5 last:border-b-0 last:pb-0 first:pt-0">
                      <span className="ltr:mr-3.5 rtl:ml-3.5 -mt-0.5">
                        Kakogenic
                      </span>
                      <input
                        className="form-checkbox text-yellow-100 w-[22px] h-[22px] border-2 border-border-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-yellow-100 focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-yellow-100 hover:checked:bg-yellow-100"
                        type="checkbox"
                        value="kakogenic"
                        name="kakogenic"
                      />
                    </label>
                    <label className="group flex items-center justify-between text-brand-dark text-sm md:text-15px cursor-pointer transition-all hover:text-opacity-80 border-b border-border-base py-3.5 last:border-b-0 last:pb-0 first:pt-0">
                      <span className="ltr:mr-3.5 rtl:ml-3.5 -mt-0.5">
                        Vegetarian
                      </span>
                      <input
                        className="form-checkbox text-yellow-100 w-[22px] h-[22px] border-2 border-border-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-yellow-100 focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-yellow-100 hover:checked:bg-yellow-100"
                        type="checkbox"
                        value="vegetarian"
                        name="vegetarian"
                      />
                    </label>
                    <div className="w-full">
                      <button
                        className="flex justify-center items-center w-full px-4 pt-3.5 pb-1 text-sm font-medium text-center text-brand focus:outline-none"
                        id="headlessui-disclosure-button-:r5:"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state="">
                        <span className="inline-block ltr:pr-1 rtl:pl-1">
                          See more
                        </span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className="text-brand-dark text-opacity-60 text-15px"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <h3 className="text-brand-dark text-15px sm:text-base font-semibold mb-5 -mt-1">
                    Brands
                  </h3>
                  <div className="flex flex-col p-5 border rounded-md border-border-base">
                    <label className="group flex items-center justify-between text-brand-dark text-sm md:text-15px cursor-pointer transition-all hover:text-opacity-80 border-b border-border-base py-3.5 last:border-b-0 last:pb-0 first:pt-0">
                      <span className="ltr:mr-3.5 rtl:ml-3.5 -mt-0.5">
                        Good &amp; Gather
                      </span>
                      <input
                        className="form-checkbox text-yellow-100 w-[22px] h-[22px] border-2 border-border-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-yellow-100 focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-yellow-100 hover:checked:bg-yellow-100"
                        type="checkbox"
                        value="good-gather"
                        name="good &amp; gather"
                      />
                    </label>
                    <label className="group flex items-center justify-between text-brand-dark text-sm md:text-15px cursor-pointer transition-all hover:text-opacity-80 border-b border-border-base py-3.5 last:border-b-0 last:pb-0 first:pt-0">
                      <span className="ltr:mr-3.5 rtl:ml-3.5 -mt-0.5">
                        Green Giant
                      </span>
                      <input
                        className="form-checkbox text-yellow-100 w-[22px] h-[22px] border-2 border-border-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-yellow-100 focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-yellow-100 hover:checked:bg-yellow-100"
                        type="checkbox"
                        value="green-giant"
                        name="green giant"
                      />
                    </label>
                    <label className="group flex items-center justify-between text-brand-dark text-sm md:text-15px cursor-pointer transition-all hover:text-opacity-80 border-b border-border-base py-3.5 last:border-b-0 last:pb-0 first:pt-0">
                      <span className="ltr:mr-3.5 rtl:ml-3.5 -mt-0.5">
                        Veg-Land
                      </span>
                      <input
                        className="form-checkbox text-yellow-100 w-[22px] h-[22px] border-2 border-border-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-yellow-100 focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-yellow-100 hover:checked:bg-yellow-100"
                        type="checkbox"
                        value="veg-land"
                        name="veg-land"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:pt-4 lg:ltr:-ml-4 lg:rtl:-mr-2 xl:ltr:-ml-8 xl:rtl:-mr-8 lg:-mt-1">
              <div className="flex items-center justify-between mb-6">
                <button className="flex items-center px-4 py-2 text-sm font-semibold transition duration-200 ease-in-out border rounded-md lg:hidden text-brand-dark border-border-base focus:outline-none hover:border-brand hover:text-brand">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="14px"
                    viewBox="0 0 18 14">
                    <g
                      id="Group_36196"
                      data-name="Group 36196"
                      transform="translate(-925 -1122.489)">
                      <path
                        id="Path_22590"
                        data-name="Path 22590"
                        d="M942.581,1295.564H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1295.564,942.581,1295.564Z"
                        transform="translate(0 -169.575)"
                        fill="currentColor"></path>
                      <path
                        id="Path_22591"
                        data-name="Path 22591"
                        d="M942.581,1951.5H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1951.5,942.581,1951.5Z"
                        transform="translate(0 -816.512)"
                        fill="currentColor"></path>
                      <path
                        id="Path_22593"
                        data-name="Path 22593"
                        d="M1163.713,1122.489a2.5,2.5,0,1,0,1.768.732A2.483,2.483,0,0,0,1163.713,1122.489Z"
                        transform="translate(-233.213)"
                        fill="currentColor"></path>
                      <path
                        id="Path_22594"
                        data-name="Path 22594"
                        d="M2344.886,1779.157a2.5,2.5,0,1,0,.731,1.768A2.488,2.488,0,0,0,2344.886,1779.157Z"
                        transform="translate(-1405.617 -646.936)"
                        fill="currentColor"></path>
                    </g>
                  </svg>
                  <span className="ltr:pl-2.5 rtl:pr-2.5">Filters</span>
                </button>
                <div className="flex items-center justify-end w-full lg:justify-between">
                  <div className="shrink-0 text-brand-dark font-medium text-15px leading-4 md:ltr:mr-6 md:rtl:ml-6 hidden lg:block mt-0.5">
                    2,683 Items Found
                  </div>
                  <div className="relative ltr:ml-2 rtl:mr-2 lg:ltr:ml-0 lg:rtl:mr-0 min-w-[160px]">
                    <div className="flex items-center">
                      <div className="shrink-0 text-15px ltr:mr-2 rtl:ml-2 text-brand-dark text-opacity-70">
                        Sort by:
                      </div>
                      <button
                        className="relative w-full text-sm font-semibold rounded-lg cursor-pointer ltr:pr-5 rtl:pl-5 text-brand-dark ltr:text-left rtl:text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-brand focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                        id="headlessui-listbox-button-:r3:"
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        data-headlessui-state="">
                        <span className="block truncate">Lowest Price</span>
                        <span className="absolute flex items-end pointer-events-none top-1 ltr:right-0 rtl:left-0 ltr:pl-1 rtl:pr-1">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="w-3.5 h-3.5 text-brand-muted"
                            aria-hidden="true"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="48"
                              d="m112 184 144 144 144-144"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 md:gap-4 2xl:gap-5">
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Chips Ahoy! Original Chocolate Chip Cookies">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Chips Ahoy! Original Chocolate Chip Cookies"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none"
                          aria-label="Count Button">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                              <path
                                d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $8.00 - $15.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Chips Ahoy! Original Chocolate Chip Cookies
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Lay's Kettle Cooked Mesquite Potato Chips">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Lay's Kettle Cooked Mesquite Potato Chips"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $5.00 - $15.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Lays Kettle Cooked Mesquite Potato Chips
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="SkinnyPop Popcorn SkinnyPack Original">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="SkinnyPop Popcorn SkinnyPack Original"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.apphttps://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $15.00 - $25.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      SkinnyPop Popcorn SkinnyPack Original
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Nabisco Nilla Wafers">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Nabisco Nilla Wafers"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-25.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $15.00 - $25.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Nabisco Nilla Wafers
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Freshness Guaranteed Mango Spears">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Freshness Guaranteed Mango Spears"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none"
                          aria-label="Count Button">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                              <path
                                d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $3.99
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Freshness Guaranteed Mango Spears
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Ruffles Party Size Cheddar &amp; Sour Cream">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Ruffles Party Size Cheddar &amp; Sour Cream"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $15.00 - $25.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Ruffles Party Size Cheddar &amp; Sour Cream
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Organic Spring Mix">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Organic Spring Mix"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <span className="text-[11px] md:text-xs font-bold text-brand-light uppercase inline-block bg-brand rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
                        on sale
                      </span>
                      <div className="block product-count-button-position">
                        <button
                          className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none"
                          aria-label="Count Button">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                              <path
                                d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $2.60
                      </span>
                      <del className="mx-1 text-sm text-brand-dark text-opacity-70">
                        $3.00
                      </del>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Organic Spring Mix
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Organic Girl Lettuce">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Organic Girl Lettuce"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none"
                          aria-label="Count Button">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                              <path
                                d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $1.50
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Organic Girl Lettuce
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 Bag</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Organic Green Cabbage">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Organic Green Cabbage"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <span className="text-[11px] md:text-xs font-bold text-brand-light uppercase inline-block bg-brand rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
                        on sale
                      </span>
                      <div className="block product-count-button-position">
                        <button
                          className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none"
                          aria-label="Count Button">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                              <path
                                d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $1.50
                      </span>
                      <del className="mx-1 text-sm text-brand-dark text-opacity-70">
                        $1.99
                      </del>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Organic Green Cabbage
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Fresh Express Iceberg Garden Salad Blend">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Fresh Express Iceberg Garden Salad Blend"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $25.00 - $40.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Fresh Express Iceberg Garden Salad Blend
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 Bag</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Fresh Express Iceberg Garden Salad Blend">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Fresh Express Iceberg Garden Salad Blend"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $25.00 - $40.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Fresh Express Iceberg Garden Salad Blend
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 Bag</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Gourmet Garden™ Lightly Dried Cilantro">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Gourmet Garden™ Lightly Dried Cilantro"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <span className="text-[11px] md:text-xs font-bold text-brand-light uppercase inline-block bg-brand rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
                        on sale
                      </span>
                      <div className="block product-count-button-position">
                        <button
                          className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none"
                          aria-label="Count Button">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                              <path
                                d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $2.64
                      </span>
                      <del className="mx-1 text-sm text-brand-dark text-opacity-70">
                        $2.99
                      </del>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Gourmet Garden™ Lightly Dried Cilantro
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Organic Firm Fresh White Lettuce">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Organic Firm Fresh White Lettuce"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $3.00 - $5.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Organic Firm Fresh White Lettuce
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each </div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Pepperidge Farm®  Milano® Mint Chocolate">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Pepperidge Farm®  Milano® Mint Chocolate"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $20.00 - $35.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Pepperidge Farm® Milano® Mint Chocolate
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Chobani Yogurt, Greek, Cookies &amp; Cream">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Chobani Yogurt, Greek, Cookies &amp; Cream"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $15.00 - $25.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Chobani Yogurt, Greek, Cookies &amp; Cream
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Fresh Green Leaf Lettuce">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Fresh Green Leaf Lettuce"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <span className="text-[11px] md:text-xs font-bold text-brand-light uppercase inline-block bg-brand rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
                        on sale
                      </span>
                      <div className="block product-count-button-position">
                        <button
                          className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none"
                          aria-label="Count Button">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                              <path
                                d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $2.64
                      </span>
                      <del className="mx-1 text-sm text-brand-dark text-opacity-70">
                        $2.74
                      </del>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Fresh Green Leaf Lettuce
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Lay's Kettle Cooked Jalapeno Potato Chips">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Lay's Kettle Cooked Jalapeno Potato Chips"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-19.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $15.00 - $25.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Lays Kettle Cooked Jalapeno Potato Chips
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="belVita Breakfast Biscuits, Blueberry Flavor">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="belVita Breakfast Biscuits, Blueberry Flavor"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $15.00 - $25.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      belVita Breakfast Biscuits, Blueberry Flavor
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Lay's Bar-B-Que Potato Chips">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Lay's Bar-B-Que Potato Chips"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $5.00 - $15.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Lays Bar-B-Que Potato Chips
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Fresh Organic Broccoli">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Fresh Organic Broccoli"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $5.00 - $8.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Fresh Organic Broccoli
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Chester's Fries Flamen Hot Corn Potato Snacks">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Chester's Fries Flamen Hot Corn Potato Snacks"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $5.00 - $15.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Chesters Fries Flamen Hot Corn Potato Snacks
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Oreo Chocolate Sandwich Cookies, Original Flavor">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Oreo Chocolate Sandwich Cookies, Original Flavor"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $10.00 - $20.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Oreo Chocolate Sandwich Cookies, Original Flavor
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Fresh Cilantro">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Fresh Cilantro"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $25.00 - $40.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Fresh Cilantro
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 Bag</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Great Value Tortilla Chips, Cantina Style">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Great Value Tortilla Chips, Cantina Style"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $5.00 - $15.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Great Value Tortilla Chips, Cantina Style
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Leafy Romaine Mixed Lettuce">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Leafy Romaine Mixed Lettuce"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <span className="text-[11px] md:text-xs font-bold text-brand-light uppercase inline-block bg-brand rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
                        on sale
                      </span>
                      <div className="block product-count-button-position">
                        <button
                          className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none"
                          aria-label="Count Button">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                              <path
                                d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $2.50
                      </span>
                      <del className="mx-1 text-sm text-brand-dark text-opacity-70">
                        $2.74
                      </del>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Leafy Romaine Mixed Lettuce
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Tate's Bake Shop Cookies, Gluten Free, Chocolate">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Tate's Bake Shop Cookies, Gluten Free, Chocolate"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-29.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $25.00 - $50.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Tates Bake Shop Cookies, Gluten Free, Chocolate
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Frito Lay's Family Fun Mix Snacks">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Frito Lay's Family Fun Mix Snacks"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <span className="text-[11px] md:text-xs font-bold text-brand-light uppercase inline-block bg-brand rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
                        on sale
                      </span>
                      <div className="block product-count-button-position">
                        <button
                          className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none"
                          aria-label="Count Button">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                              <path
                                d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $6.20
                      </span>
                      <del className="mx-1 text-sm text-brand-dark text-opacity-70">
                        $6.98
                      </del>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Frito Lays Family Fun Mix Snacks
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Calavo Fresh Avocados ">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Calavo Fresh Avocados "
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $25.00 - $40.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Calavo Fresh Avocados{" "}
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 Bag</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Green Giant Peas">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Green Giant Peas"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none"
                          aria-label="Count Button">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                              <path
                                d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $1.99
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Green Giant Peas
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
                <article
                  className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
                  title="Tate's Bake Shop Cookies, Chocolate Chip">
                  <div className="relative shrink-0">
                    <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                      <img
                        alt="Tate's Bake Shop Cookies, Chocolate Chip"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover bg-fill-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=256&amp;q=100 256w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=384&amp;q=100 384w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=640&amp;q=100 640w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=750&amp;q=100 750w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=828&amp;q=100 828w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=1080&amp;q=100 1080w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=1200&amp;q=100 1200w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=1920&amp;q=100 1920w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=2048&amp;q=100 2048w, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=3840&amp;q=100 3840w"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24.png&amp;w=3840&amp;q=100"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                      <div className="block product-count-button-position">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
                          aria-label="Count Button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="19"
                            height="19"
                            opacity="1">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
                    <div className="mb-1 lg:mb-1.5 -mx-1">
                      <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                        $15.00 - $40.00
                      </span>
                    </div>
                    <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
                      Tates Bake Shop Cookies, Chocolate Chip
                    </h2>
                    <div className="mt-auto text-13px sm:text-sm">1 each</div>
                  </div>
                </article>
              </div>
              <div className="pt-8 text-center xl:pt-10">
                <button
                  data-variant="primary"
                  className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand text-brand-light tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fill-two overflow-hidden pt-1.5 md:pt-0">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-5 md:px-6 lg:px-16 xl:px-28 2xl:px-32 3xl:px-40 md:flex justify-between items-center">
            <div className="shrink-0 mx-auto md:ltr:ml-0 md:rtl:mr-0 lg:flex lg:items-center pb-5 pt-1.5 md:pt-4 max-w-[350px] md:max-w-[340px] lg:max-w-[485px] xl:max-w-[540px] 2xl:max-w-[680px] 3xl:ltr:pl-10 3xl:rtl:pr-10">
              <div className="py-8 text-center xl:py-10 2xl:py-14 md:ltr:text-left md:rtl:text-right">
                <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[42px] leading-9 lg:leading-[1.4em] xl:leading-[1.45em] text-brand-dark font-bold font-manrope -tracking-[0.2px] mb-3 lg:mb-4">
                  Make your online shop easier with our mobile app
                </h2>
                <p className="text-15px xl:text-base 2xl:text-[17px] leading-7 xl:leading-9 text-brand-dark text-opacity-70 pb-5 lg:pb-7 ltr:pr-0 rtl:pl-0 xl:ltr:pr-8 xl:rtl:pl-8 2xl:ltr:pr-20 2xl:rtl:pl-20">
                  BoroBazar makes online grocery shopping fast and easy. Get
                  groceries delivered and order the best of seasonal farm fresh
                  food.
                </p>
                <div className="flex justify-center md:justify-start -mx-1 md:-mx-1.5 pt-0.5 px-7 sm:px-0">
                  <a
                    className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80 mx-1 md:mx-1.5"
                    href="https://www.apple.com/app-store/">
                    <img
                      alt="App Store"
                      width="170"
                      height="56"
                      decoding="async"
                      className="rounded-md w-36 lg:w-44"
                      srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-store.png&amp;w=256&amp;q=75 1x, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-store.png&amp;w=384&amp;q=75 2x"
                      src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-store.png&amp;w=384&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </a>
                  <a
                    className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80 mx-1 md:mx-1.5"
                    href="https://play.google.com/store/games">
                    <img
                      alt="Play Store"
                      width="170"
                      height="56"
                      decoding="async"
                      className="rounded-md w-36 lg:w-44"
                      srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&amp;w=256&amp;q=75 1x, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&amp;w=384&amp;q=75 2x"
                      src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&amp;w=384&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-end ltr:pl-4 rtl:pr-4 2xl:ltr:pl-0 2xl:rtl:pr-0 md:max-w-[480px] lg:max-w-[540px] xl:max-w-auto ltr:-mr-16 rtl:-ml-16 lg:ltr:-mr-8 lg:rtl:-ml-8 3xl:ltr:mr-24 3xl:rtl:ml-24">
              <img
                alt="App Thumbnail"
                width="597"
                height="500"
                decoding="async"
                srcSet="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&amp;w=640&amp;q=75 1x, https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&amp;w=1200&amp;q=75 2x"
                src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&amp;w=1200&amp;q=75"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-[50px] lg:mt-14 2xl:mt-16">
        <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
          <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px]">
            <div className="pb-10 sm:pb-0 mb-4 border-b col-span-full sm:col-span-1 md:col-span-3 sm:border-b-0 border-border-three sm:mb-0">
              <div className="flex flex-col text-center sm:ltr:text-left sm:rtl:text-right max-w-[300px] mx-auto sm:ltr:ml-0 sm:rtl:mr-0 pb-6 sm:pb-5">
                <a
                  className="inline-block focus:outline-none max-w-[131px] w-full mx-auto mb-3 lg:mb-5 sm:ltr:ml-0 sm:rtl:mr-0"
                  href="/">
                  <img
                    alt="BoroBazar"
                    loading="eager"
                    width="131"
                    height="30"
                    decoding="async"
                    src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg"
                    style={{ color: "transparent" }}
                  />
                </a>
                <p className="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px">
                  We offer high-quality foods and the best delivery service, and
                  the food market you can blindly trust
                </p>
              </div>
              <ul className="flex flex-wrap justify-center mx-auto sm:justify-start">
                <li className="transition hover:opacity-80 last:ltr:mr-0 md:ltr:mr-5 md:mx-0 ltr:mr-4 last:rtl:ml-0 rtl:ml-4 md:rtl:ml-5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/redqinc/">
                    <img
                      alt="facebook"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      className="transform scale-85 md:scale-100"
                      src="https://borobazar.vercel.app/assets/images/social/facebook.svg"
                      style={{ color: "transparent", width: "auto" }}
                    />
                  </a>
                </li>
                <li className="transition hover:opacity-80 last:ltr:mr-0 md:ltr:mr-5 md:mx-0 ltr:mr-4 last:rtl:ml-0 rtl:ml-4 md:rtl:ml-5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/redqinc">
                    <img
                      alt="twitter"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      className="transform scale-85 md:scale-100"
                      src="https://borobazar.vercel.app/assets/images/social/twitter.svg"
                      style={{ color: "transparent", width: "auto" }}
                    />
                  </a>
                </li>
                <li className="transition hover:opacity-80 last:ltr:mr-0 md:ltr:mr-5 md:mx-0 ltr:mr-4 last:rtl:ml-0 rtl:ml-4 md:rtl:ml-5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/redqinc/">
                    <img
                      alt="instagram"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      className="transform scale-85 md:scale-100"
                      src="https://borobazar.vercel.app/assets/images/social/instagram.svg"
                      style={{ color: "transparent", width: "auto" }}
                    />
                  </a>
                </li>
                <li className="transition hover:opacity-80 last:ltr:mr-0 md:ltr:mr-5 md:mx-0 ltr:mr-4 last:rtl:ml-0 rtl:ml-4 md:rtl:ml-5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw">
                    <img
                      alt="youtube"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      className="transform scale-85 md:scale-100"
                      src="https://borobazar.vercel.app/assets/images/social/youtube.svg"
                      style={{ color: "transparent", width: "auto" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
              <h3 className="text-brand-dark text-base lg:text-[17px] lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                About Us
              </h3>
              <ul className="flex flex-col space-y-3 text-sm lg:text-15px">
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage/about-us">
                    About us
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage/contact-us">
                    Contact us
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage/about-us">
                    About team
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage/contact-us">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
              <h3 className="text-brand-dark text-base lg:text-[17px] lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                Our Information
              </h3>
              <ul className="flex flex-col space-y-3 text-sm lg:text-15px">
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage/privacy">
                    Privacy policy update
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage/terms">
                    Terms &amp; conditions
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage/privacy">
                    Return Policy
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
              <h3 className="text-brand-dark text-base lg:text-[17px] lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                Community
              </h3>
              <ul className="flex flex-col space-y-3 text-sm lg:text-15px">
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage">
                    Announcements
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage">
                    Answer center
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage">
                    Discussion boards
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="transition-colors duration-200 hover:text-brand-dark"
                    href="/vintage">
                    Giving works
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col pt-8 border-t col-span-full sm:col-span-1 md:col-start-4 xl:col-start-auto md:col-span-4 xl:col-span-3 xl:ltr:pl-6 xl:rtl:pr-6 sm:pt-0 sm:border-t-0 border-border-three 2xl:ltr:pl-7 2xl:rtl:pr-7 3xl:ltr:pl-16 3xl:rtl:pr-16">
              <h3 className="text-brand-dark text-base lg:text-[17px] lg:leading-7 font-medium mb-4 lg:mb-6 lg:pb-0.5">
                Subscribe Now
              </h3>
              <p className="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px lg:-mt-1 max-w-[400px]">
                Subscribe your email for newsletter and featured news based on
                your interest
              </p>
              <form className="relative mt-5 max-w-[400px]">
                <span className="flex items-center absolute ltr:left-0 rtl:right-0 top-0 h-12 px-3.5 transform">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 2xl:w-[18px] h-4 2xl:h-[18px]">
                    <g clipPath="url(#clip0)">
                      <path
                        d="M16.3125 2.25H1.68751C0.75696 2.25 0 3.00696 0 3.93751V14.0625C0 14.9931 0.75696 15.75 1.68751 15.75H16.3125C17.243 15.75 18 14.9931 18 14.0625V3.93751C18 3.00696 17.243 2.25 16.3125 2.25ZM16.3125 3.375C16.3889 3.375 16.4616 3.39085 16.5281 3.41854L9 9.94319L1.47188 3.41854C1.53834 3.39089 1.61105 3.375 1.68747 3.375H16.3125ZM16.3125 14.625H1.68751C1.37715 14.625 1.125 14.3729 1.125 14.0625V4.60711L8.6314 11.1127C8.73743 11.2044 8.86872 11.25 9 11.25C9.13128 11.25 9.26256 11.2044 9.3686 11.1127L16.875 4.60711V14.0625C16.875 14.3729 16.6228 14.625 16.3125 14.625Z"
                        fill="#B3B3B3"></path>
                    </g>
                  </svg>
                </span>
                <div className="w-full">
                  <input
                    id="subscription-email"
                    placeholder="Write your email here"
                    className="py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-brand-dark focus:ring-0 text-brand-dark border-border-two focus:border-2 focus:outline-none focus:border-brand h-11 md:h-12 ltr:pl-10 rtl:pr-10 2xl:px-11 h-12 rounded-md"
                    autoComplete="off"
                    aria-invalid="false"
                    type="email"
                    name="email"
                  />
                </div>
                <button
                  className="absolute ltr:right-0 rtl:left-0 top-0 hover:opacity-80 focus:outline-none h-12 px-3 lg:px-3.5 transform scale-90 2xl:scale-100"
                  aria-label="Subscribe Button">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] 2xl:w-5 h-[18px] 2xl:h-5 rtl:rotate-180">
                    <g clipPath="url(#clip0)">
                      <path
                        d="M18.809 8.21633L2.67252 1.52062C1.99272 1.23851 1.22471 1.36262 0.668264 1.84434C0.111818 2.32613 -0.120916 3.06848 0.0609589 3.78164L1.49725 9.41414H8.52951C8.85311 9.41414 9.11549 9.67648 9.11549 10.0001C9.11549 10.3237 8.85315 10.5861 8.52951 10.5861H1.49725L0.0609589 16.2186C-0.120916 16.9318 0.111779 17.6741 0.668264 18.1559C1.22584 18.6386 1.99393 18.7611 2.67256 18.4796L18.809 11.7839C19.5437 11.4791 20.0001 10.7955 20.0001 10.0001C20.0001 9.20469 19.5437 8.52113 18.809 8.21633Z"
                        fill="#02B290"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20" height="20" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="pb-20 lg:pb-7">
          <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
            <div className="flex flex-col pt-6 text-center border-t md:flex-row md:justify-between border-border-three lg:pt-7">
              <p className="text-brand-dark text-sm leading-7 lg:leading-[27px] lg:text-15px">
                ©&nbsp;Copyright 2024&nbsp;
                <a
                  className="transition-colors duration-200 ease-in-out text-brand-dark hover:text-brand"
                  href="https://redq.io">
                  REDQ
                </a>
                &nbsp; All rights reserved
              </p>
              <ul className="flex flex-wrap justify-center items-center -mb-1.5 md:mb-0 mx-auto md:mx-0 pt-3.5 md:pt-0">
                <li className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 ltr:mr-4 sm:ltr:mr-5 lg:ltr:mr-7 last:ltr:mr-0 rtl:ml-4 sm:rtl:ml-5 lg:rtl:ml-7 last:rtl:ml-0">
                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex"
                    rel="noreferrer">
                    <img
                      alt="Master Card"
                      loading="lazy"
                      width="34"
                      height="20"
                      decoding="async"
                      src="https://borobazar.vercel.app/assets/images/payment/mastercard.svg"
                      style={{ color: "transparent", width: "auto" }}
                    />
                  </a>
                </li>
                <li className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 ltr:mr-4 sm:ltr:mr-5 lg:ltr:mr-7 last:ltr:mr-0 rtl:ml-4 sm:rtl:ml-5 lg:rtl:ml-7 last:rtl:ml-0">
                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex"
                    rel="noreferrer">
                    <img
                      alt="Visa"
                      loading="lazy"
                      width="50"
                      height="20"
                      decoding="async"
                      src="https://borobazar.vercel.app/assets/images/payment/visa.svg"
                      style={{ color: "transparent", width: "auto" }}
                    />
                  </a>
                </li>
                <li className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 ltr:mr-4 sm:ltr:mr-5 lg:ltr:mr-7 last:ltr:mr-0 rtl:ml-4 sm:rtl:ml-5 lg:rtl:ml-7 last:rtl:ml-0">
                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex"
                    rel="noreferrer">
                    <img
                      alt="Paypal"
                      loading="lazy"
                      width="76"
                      height="20"
                      decoding="async"
                      src="https://borobazar.vercel.app/assets/images/payment/paypal.svg"
                      style={{ color: "transparent", width: "auto" }}
                    />
                  </a>
                </li>
                <li className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 ltr:mr-4 sm:ltr:mr-5 lg:ltr:mr-7 last:ltr:mr-0 rtl:ml-4 sm:rtl:ml-5 lg:rtl:ml-7 last:rtl:ml-0">
                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex"
                    rel="noreferrer">
                    <img
                      alt="JCB"
                      loading="lazy"
                      width="26"
                      height="20"
                      decoding="async"
                      src="https://borobazar.vercel.app/assets/images/payment/jcb.svg"
                      style={{ color: "transparent", width: "auto" }}
                    />
                  </a>
                </li>
                <li className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 ltr:mr-4 sm:ltr:mr-5 lg:ltr:mr-7 last:ltr:mr-0 rtl:ml-4 sm:rtl:ml-5 lg:rtl:ml-7 last:rtl:ml-0">
                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex"
                    rel="noreferrer">
                    <img
                      alt="Skrill"
                      loading="lazy"
                      width="39"
                      height="20"
                      decoding="async"
                      src="https://borobazar.vercel.app/assets/images/payment/skrill.svg"
                      style={{ color: "transparent", width: "auto" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="lg:hidden fixed z-30 -bottom-0.5 flex items-center justify-between shadow-bottomNavigation body-font bg-brand-light w-full h-14 px-4 md:px-6 lg:px-8 text-brand-muted pb-0.5">
        <button
          aria-label="Menu"
          className="flex flex-col items-center justify-center outline-none shrink-0 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="14"
            viewBox="0 0 25.567 18">
            <g transform="translate(-776 -462)">
              <rect
                data-name="Rectangle 941"
                width="12.749"
                height="2.499"
                rx="1.25"
                transform="translate(776 462)"
                fill="currentColor"></rect>
              <rect
                data-name="Rectangle 942"
                width="25.567"
                height="2.499"
                rx="1.25"
                transform="translate(776 469.75)"
                fill="currentColor"></rect>
              <rect
                data-name="Rectangle 943"
                width="17.972"
                height="2.499"
                rx="1.25"
                transform="translate(776 477.501)"
                fill="currentColor"></rect>
            </g>
          </svg>
        </button>
        <button
          className="relative flex items-center justify-center h-auto shrink-0 focus:outline-none"
          aria-label="Search Button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
              fill="currentColor"></path>
          </svg>
        </button>
        <a className="shrink-0" href="/vintage">
          <span className="sr-only">Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="20px"
            viewBox="0 0 17.996 20.442">
            <path
              d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
              transform="translate(-30.619 0.236)"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.4"></path>
          </svg>
        </a>
        <button
          className="flex items-center justify-center shrink-0 h-auto focus:outline-none transform"
          aria-label="cart-button">
          <div className="relative flex items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-opacity-100">
              <g clipPath="url(#clip0)">
                <path
                  d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.1"></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="22" height="22" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <span className="min-w-[20px] min-h-[20px] p-0.5 rounded-[20px] flex items-center justify-center bg-brand text-brand-light absolute -top-2.5 ltr:left-2.5 rtl:right-2.5 text-10px font-bold">
              0
            </span>
          </div>
        </button>
        <button
          className="shrink-0 focus:outline-none"
          aria-label="Authentication">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.9001 11C20.9001 5.52836 16.4723 1.09998 11.0001 1.09998C5.52848 1.09998 1.1001 5.52775 1.1001 11C1.1001 16.4231 5.49087 20.9 11.0001 20.9C16.4867 20.9 20.9001 16.448 20.9001 11ZM11.0001 2.26013C15.8193 2.26013 19.7399 6.1808 19.7399 11C19.7399 12.7629 19.2156 14.4573 18.2432 15.8926C14.3386 11.6924 7.66873 11.6849 3.75698 15.8926C2.78459 14.4573 2.26025 12.7629 2.26025 11C2.26025 6.1808 6.18092 2.26013 11.0001 2.26013ZM4.48056 16.8201C7.95227 12.926 14.0488 12.9269 17.5195 16.8201C14.0361 20.7172 7.96541 20.7184 4.48056 16.8201Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.2"></path>
            <path
              d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.2"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default design;
