import { Link } from "react-router-dom";

const CaregiverApply = () => {
  // return (
  //   <div className=" md:mt-20 ">
  //     <header className=" bg-white dark:bg-blue-100">
  //       <div className="container px-6 py-16 mx-auto">
  //         <div className="items-center lg:flex">
  //           <div className="w-full lg:w-1/2">
  //             <div className="lg:max-w-lg">
  //               <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
  //                 Apply as a{" "}
  //                 <span className="text-primary-cyan">CareGiver</span>
  //               </h1>
  //               <p className="mt-3 text-gray-600 dark:text-gray-400">
  //                 be the first to knows when our{" "}
  //                 <span className="font-medium text-blue-500">Brand</span> is
  //                 live
  //               </p>
  //               <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
  //                 {/* <input
  //                   id="email"
  //                   type="text"
  //                   className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
  //                   placeholder="Email Address"
  //                 /> */}
  //                 <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
  //                   <Link to="/careGiverApplyForm">Apply</Link>
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
  //             <img
  //               className="w-full h-full max-w-md"
  //               src="https://merakiui.com/images/components/Email-campaign-bro.svg"
  //               alt="email illustration vector art"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </header>
  //   </div>
  // );
  return (
    <section className="w-full md:mt-20 bg-blue-50 py-16 px-4 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
      {/* Left side: Text content */}
      <div className="max-w-lg mb-10 lg:mb-0 ">
        <h2 className="text-5xl font-bold text-blue-500 mb-4">
          Apply as a CareGiver!
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
        Join <span className="text-2xl font-semibold text-blue-500">CareLoom</span> to provide compassionate care to children, the elderly, and individuals with special needs. Make a meaningful impact by assisting with daily tasks and offering essential support to those in need.
        </p>
        <button className="bg-blue-500 text-white py-4 px-6 text-xl font-medium rounded-lg shadow-lg hover:bg-blue-600">
          <Link to="/careGiverApplyForm">Apply Now</Link>
        </button>
      </div>

      {/* Right side: Image illustration */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/public/BestRecruitment.png"
          alt="Hiring Illustration"
          className="w-full h-auto shadow-xl shadow-blue-400 rounded-lg hover:shadow-blue-600"
        />
      </div>
    </section>
  );
};

export default CaregiverApply;
