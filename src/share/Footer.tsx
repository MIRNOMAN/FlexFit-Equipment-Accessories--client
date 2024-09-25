import logo from "../assets/icons/navber_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900  px-8 text-gray-400 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <img
            src={logo}
            alt="Company Logo"
            className="h-[80px] mb-4 bg-white p-2 rounded-md"
          />
          <p className="text-gray-400">
            Your trusted company for quality services.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg text-white font-semibold mb-4">Contact Us</h4>
          <p className="mb-2">Email: abdullahalnoman1509@gmail.com</p>
          <p className="mb-2">Phone: +8801798341509</p>
          <p className="mb-2">
            Address: 123 shahid faruk road, jatrabari, Dhaka
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 h-4 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M..." />
              </svg>
            </a>
            <a href="#" className="text-pink-600 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M..." />
              </svg>
            </a>
          </div>
        </div>

        {/* Relevant Links */}
        <div>
          <h4 className="text-lg text-white font-semibold mb-4">
            Useful Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-5 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; 2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
