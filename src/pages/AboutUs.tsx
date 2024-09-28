import "../styles/AboutUs.css";
import customer1 from "../assets/customer/User-persona1.jpg";
import customer2 from "../assets/customer/User-persona2.jpg";
import customer3 from "../assets/customer/User-persona3.jpg";
import customer4 from "../assets/customer/User-persona4.jpg";
import customer5 from "../assets/customer/User-persona5.jpg";

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 px-6">
      <div className="container mx-auto">
        {/* Company Overview */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold animate-fade-in">Our Story</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto animate-fade-up">
            Founded in [Year], our company has been on a mission to deliver the
            best products and services to our valued customers. With a vision to
            innovate and lead, we strive to achieve excellence in everything we
            do.
          </p>
        </div>

        {/* Team Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 animate-fade-up">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center text-gray-800 hover:scale-105 transition-transform duration-300">
              <img
                className="w-24 h-24 mx-auto rounded-full mb-4"
                src={customer1}
                alt="Team Member 1"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-sm">CEO & Founder</p>
              <p className="mt-2">
                John is the visionary behind our company, leading with passion
                and dedication.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center text-gray-800 hover:scale-105 transition-transform duration-300">
              <img
                className="w-24 h-24 mx-auto rounded-full mb-4"
                src={customer2}
                alt="Team Member 2"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-sm">Chief Marketing Officer</p>
              <p className="mt-2">
                Jane drives our marketing strategies and helps grow our brand
                globally.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center text-gray-800 hover:scale-105 transition-transform duration-300">
              <img
                className="w-24 h-24 mx-auto rounded-full mb-4"
                src={customer3}
                alt="Team Member 2"
              />
              <h3 className="text-xl font-bold">J. F. Willumsen</h3>
              <p className="text-sm"> Marketing Officer</p>
              <p className="mt-2">
                Jane drives our marketing strategies and helps grow our brand
                globally.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 animate-fade-up">
            What Our Customers Say
          </h2>
          <div className="space-y-8">
            {/* Testimonial 1 */}

            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto relative overflow-hidden transition-transform duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-30 rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <img
                    src={customer4} // Replace with your avatar image URL
                    alt="Avatar"
                    className="rounded-full w-12 h-12 border-2 border-white shadow-md"
                  />
                  <div className="ml-3">
                    <p className="font-bold text-gray-800">Sarah W.</p>
                    <p className="text-sm text-gray-600">Customer</p>
                  </div>
                </div>
                <div className="relative z-10 p-4 bg-white rounded-lg shadow-lg">
                  <p className="italic text-gray-800">
                    "This company exceeded my expectations. Their customer
                    service is top-notch!"
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto relative overflow-hidden transition-transform duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-30 rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <img
                    src={customer5} /// Replace with your avatar image URL
                    alt="Avatar"
                    className="rounded-full w-12 h-12 border-2 border-white shadow-md"
                  />
                  <div className="ml-3">
                    <p className="font-bold text-gray-800">Michael D.</p>
                    <p className="text-sm text-gray-600">Customer</p>
                  </div>
                </div>
                <div className="relative z-10 p-4 bg-white rounded-lg shadow-lg">
                  <p className="italic text-gray-800">
                    "Highly recommend! They truly care about their customers and
                    their products are fantastic."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4 animate-fade-up">
            Get in Touch
          </h2>
          <p className="text-lg max-w-md mx-auto animate-fade-up">
            We're here to help! Feel free to reach out with any questions,
            feedback, or inquiries.
          </p>
          <div className="mt-8">
            <p className="text-lg">
              Email:{" "}
              <a
                href="mirnoman76@gmail.com"
                className="underline hover:text-yellow-300 transition-colors"
              >
                mirnoman76@gmail.com
              </a>
            </p>
            <p className="text-lg">
              Phone:{" "}
              <a
                href="tel:+123456789"
                className="underline hover:text-yellow-300 transition-colors"
              >
                +8801798341509
              </a>
            </p>
            <p className="text-lg">
              Address: 1234 Street jatrabari, Dhaka City, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
