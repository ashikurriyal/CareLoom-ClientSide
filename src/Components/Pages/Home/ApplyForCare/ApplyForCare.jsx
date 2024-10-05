import { Link } from "react-router-dom";
import banner from '../../../../assets/Images/ApplyCare/ApplyForCare.jpg'
const ApplyForCare = () => {
  return (
      <section className="w-full md:mt-20 bg-blue-50 py-16 px-4 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
        {/* Left side: Text content */}
        <div className="max-w-lg mb-10 lg:mb-0 ">
          <h2 className="text-5xl font-bold text-blue-500 mb-4">
            Find Your Care!
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            What types of {" "}
            <span className="text-2xl font-semibold text-blue-500">
              Care
            </span>{" "}
            you need, find from here
          </p>
          <button className="bg-blue-500 text-white py-4 px-6 text-xl font-medium rounded-lg shadow-lg hover:bg-blue-600">
            <Link to="/applyCareForm">Find Your Care</Link>
          </button>
        </div>

        {/* Right side: Image illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={banner}
            alt="Hiring Illustration"
            className="w-full h-auto shadow-xl shadow-blue-400 rounded-lg hover:shadow-blue-600"
          />
        </div>
      </section>
  );
};

export default ApplyForCare;
