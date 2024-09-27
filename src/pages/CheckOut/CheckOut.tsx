const CheckOut = () => {
  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Shopping Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-3 items-start gap-4">
            <div className="col-span-2 flex items-start gap-4">
              <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                <img
                  src="https://readymadeui.com/images/product14.webp"
                  className="w-full h-full object-contain"
                  alt="Velvet Sneaker"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-bold text-gray-800">
                  Velvet Sneaker
                </h3>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">
                  Size: MD
                </p>

                <button
                  type="button"
                  className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-current inline"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                  </svg>
                  REMOVE
                </button>
              </div>
            </div>

            <div className="ml-auto">
              <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                $20.00
              </h4>

              <button
                type="button"
                className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                </svg>

                <span className="mx-3 font-bold">2</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                >
                  <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                </svg>
              </button>
            </div>
          </div>

          <hr className="border-gray-300" />
        </div>

        <div className="bg-gray-100 rounded-md p-4 h-max">
          <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
            Order Summary
          </h3>

          <form className="mt-6">
            <div>
              <h3 className="text-base text-gray-800 font-semibold mb-4">
                Enter Details
              </h3>
              <div className="space-y-3">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6" />
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
                  </svg>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" />
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      />
                      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" />
                    </g>
                  </svg>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <svg
                    fill="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 64 64"
                  >
                    <g>
                      <path d="M32 1C15.56 1 1 15.56 1 32c0 11.98 6.47 22.45 16.5 28.2a3 3 0 0 0 4.27-3.39C17.93 53.06 12 42.16 12 32c0-8.84 7.16-16 16-16s16 7.16 16 16c0 10.16-5.93 21.06-9.77 24.81a3 3 0 0 0 4.27 3.39C57.53 54.45 64 43.98 64 32c0-16.44-14.56-31-32-31z" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-2.5 px-4 text-base font-semibold rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
