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
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
            Select Your Care
          </h1>
          <p className="text-center text-black-600 mb-8">
            We’re here to help with the care you need
          </p>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <select
              className="select w-full max-w-xs"
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
            <button type="submit" className="btn mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <div className="flex justify-center items-center h-screen bg-gradient-radial from-blue-300 via-blue-500 to-teal-600">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-500">
          <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
            Select Your Care
          </h1>
          <p className="text-center text-black-600 mb-8">
            We’re here to help with the care you need
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <select
                className="select w-full border-2 border-blue-500 rounded-lg p-3 text-blue-700 focus:ring-4 focus:ring-teal-300 transition-all duration-300"
                value={careType}
                onChange={(e) => setCareType(e.target.value)}
              >
                <option disabled value="">
                  Which Care Do You Need?
                </option>
                <option value="Child Care">Child Care</option>
                <option value="Elderly Care">Elderly Care</option>
                <option value="Special Child Care">Special Child Care</option>
                <option value="Pet Care">Pet Care</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-teal-500 text-white rounded-lg font-bold text-lg hover:bg-teal-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadedData.map((item) => (
          <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.careGiverName}</h2>
              <p>{item.careGiverEmail}</p>
              <p>{item.expertise}</p>
              <p>{item.subArea}</p>
              <p>{item.city}</p>

              <div className="card-actions justify-end">
                <button
                  onClick={() => handleRequest(item)}
                  className="btn btn-primary"
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
