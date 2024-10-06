import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUser from "../../../Hooks/useUser";
// import { useQuery } from "@tanstack/react-query";

const ApplyCareForm = () => {
  const [careType, setCareType] = useState("");
  const [loadedData, setLoadedData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { collectUser } = useUser();
  //   console.log(collectUser);
  const userEmail = collectUser?.email;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const res = await axiosSecure.get(`/collectCare/${careType}`);
    // console.log(res.data);
    return setLoadedData(res.data);
  };

  const handleRequest = async (item) => {
    const requestedData = { item, userEmail, careStatus: "pending" };
    // console.log(requestedData)
    const res = await axiosSecure.post("/requestForCare", requestedData);

    console.log(res.data);
  };

  return (
    <div className="container mx-auto md:mt-8">
      <div className="flex flex-col items-center  border-b-2 border-blue-500 p-6 rounded-lg md:mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
            Select Your Care
          </h1>
          <p className="text-center text-black-600 mb-8">
            We’re here to help with the care you need
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSubmit} className="flex items-center">
            <select
              className="select w-full max-w-xs border border-blue-500 text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={careType}
              onChange={(e) => setCareType(e.target.value)}
            >
              <option disabled value="">
                Which Care Do You Need
              </option>
              <option value="Child Care">Child Care</option>
              <option value="Elderly Care">Elderly Care</option>
              <option value="Special Child Care">Special Child Care</option>
              <option value="Pet Care">Pet Care</option>
            </select>
            <button
              type="submit"
              className="btn ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {loadedData.map((item) => (
          <div
            key={item._id}
            className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <img
              className="object-cover object-center w-full h-56"
              src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU="
              alt="avatar"
            />
            {/* <div className="flex items-center px-6 py-3 bg-gray-900">
              <svg
                aria-label="headphones icon"
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
                />
              </svg>
              <h1 className="mx-3 text-lg font-semibold text-white">
                Focusing
              </h1>
            </div> */}
            <div className="px-6 py-4">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                {item.careGiverName}
              </h1>
              <p className="py-2 text-gray-700 dark:text-gray-400">
                Caregivers provide compassionate support, meeting physical,
                emotional, and daily needs with empathy.
              </p>
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg
                  aria-label="suitcase icon"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 11H10V13H14V11Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                  />
                </svg>
                <h1 className="px-2 text-sm">{item.expertise}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg
                  aria-label="location pin icon"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                  />
                </svg>
                <h1 className="px-2 text-sm">
                  {item.subArea}, {item.city}
                </h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg
                  aria-label="email icon"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                  />
                </svg>
                <h1 className="px-2 text-sm">{item.careGiverEmail}</h1>
              </div>
              <div className="mt-3 flex flex-col items-center">
                <button
                  onClick={() => handleRequest(item)}
                  className="btn btn-warning"
                >
                  Request for Care
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyCareForm;
