import { HiLocationMarker } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      {/* Upper Side */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center">
            {/* <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p> */}

            <h1 className="text-2xl font-semibold md:text-5xl text-primary-cyan dark:text-white">
              Contact With Us
            </h1>

            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
              Our friendly team is always here to chat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center border-2 border-cyan-600 p-6 rounded-2xl shadow-xl">
              <span className="p-3 text-primary-cyan rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-primary-cyan dark:text-blue-400">
                contact@careloom.com
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center border-2 border-cyan-600 p-6 rounded-2xl shadow-xl">
              <span className="p-3 text-primary-cyan rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Office
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-primary-cyan dark:text-blue-400">
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center border-2 border-cyan-600 p-6 rounded-2xl shadow-xl">
              <span className="p-3 text-primary-cyan rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-primary-cyan dark:text-blue-400">
                +1 (555) 000-0000
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="min-h-screen bg-gradient-to-r from-primary-cyan via-cyan-600 to-cyan-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-2xl">
        <div className="container flex flex-col  min-h-screen px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6 flex flex-col items-center">
              <h1 className="text-2xl font-semibold capitalize lg:text-5xl">
                Get a quote
              </h1>

              <p className="max-w-xl text-xl mt-6 text-center">
                Ask us everything and we would love to hear from you
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <div className="flex items-center -mx-2">
                  <HiLocationMarker className="text-2xl" />

                  <p className="mx-2 text-white text-xl">
                    Baridhara J Block, Notun Bazar, Dhaka, Bangladesh
                  </p>
                </div>

                <div className="flex items-center justify-center -mx-2">
                  <IoCallOutline className="text-2xl" />

                  <span className="mx-2 text-white text-xl truncate w-72">
                    (257) 563-7401
                  </span>
                </div>

                <div className="flex items-center justify-center -mx-2">
                  <MdOutlineMailOutline className="text-2xl" />

                  <span className="mx-2 text-white text-xl truncate w-72">
                    contact@careloom.com
                  </span>
                </div>
              </div>

              <div className="mt-6 md:mt-12">
                {/* <h3 className="text-gray-300 ">Follow us</h3> */}

                <div className="flex items-center justify-center mt-4 -mx-1.5 gap-5 text-2xl">
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaFacebookF />
                  <FaInstagram />
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-cyan-600 dark:text-gray-200 text-center">
                  Contact form
                </h1>

                <form className="mt-4">
                  <div className="flex-1">
                    <label className="block mb-2 text-lg text-cyan-600 dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-lg text-cyan-600 dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-lg text-cyan-600 dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button className="w-full  px-6 py-3 mt-6 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-600 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-400 focus:ring-opacity-50">
                    Send Email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
