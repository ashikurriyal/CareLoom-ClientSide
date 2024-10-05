import { useForm } from "react-hook-form";
import useUser from "../../../Hooks/useUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const CareGiverApplyForm = () => {
  const collectUser = useUser();
  const axiosSecure = useAxiosSecure();
  const [selectedCity, setSelectedCity] = useState(""); // State to store selected city

  const { register, handleSubmit } = useForm();

  const cities = {
    Dhaka: ["Uttara", "Mirpur", "Agargaon", "Banani", "Gulshan", "Shahjadpur", "Mohakhali", "Bashundhara", "Rampura", "Badda", "Khilgaon"],
    Chittagong: ["Pahartali", "Agrabad", "Chandgaon", "Patenga", "Nasirabad"],
    Rajshahi: ["Motihar", "Uposhohor", "Talaimari", "Kazla", "Shaheb Bazar"],
    Khulna: ["Boyra", "Sonadanga", "Daulatpur", "Khalishpur", "Shibbari"],
  };

  const onSubmit = async (data) => {
    try {
      const applyCareGiver = {
        careGiverName: collectUser?.name,
        careGiverEmail: collectUser?.email,
        role: "CareGiver",
        status: "pending",
        expertise: data.expertise,
        city: data.city,
        subArea: data.subArea,
        uid: collectUser?._id,
      };
      console.log(applyCareGiver)

      const result = await axiosSecure.post("/careGiverRequest", applyCareGiver);

      if (result.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Caregiver Request Submitted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error uploading data:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center px-6 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="w-2/3 pb-4 font-semibold text-center text-blue-500 capitalize border-b-2 border-primary-cyan dark:border-primary-cyan dark:text-white text-3xl"
              >
                Apply as CareGiver
              </a>
            </div>

            {/* Caregiver name */}
            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                {...register("careGiverName")}
                type="text"
                id="careGiverName"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder={collectUser?.name}
                disabled
              />
            </div>

            {/* Profile photo */}
            <label
              htmlFor="dropzone-file"
              className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <h2 className="mx-3 text-gray-400">Profile Photo</h2>
              <input {...register("profilePhoto")} type="file" id="profilePhoto" className="hidden" />
            </label>

            {/* Caregiver email */}
            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                {...register("careGiverEmail")}
                type="email"
                id="careGiverEmail"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder={collectUser?.email}
                disabled
              />
            </div>

            {/* Expertise */}
            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <select
                {...register("expertise")}
                id="expertise"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="">Select Expertise</option>
                <option value="Child Care">Child Care</option>
                <option value="Pet Care">Pet Care</option>
                <option value="Elderly Care">Elderly Care</option>
                <option value="Special Child Care">Special Child Care</option>
              </select>
            </div>

            {/* City selection */}
            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12v.01M3 12h.01M21 12h-.01M12 3v.01M12 21v-.01"
                  />
                </svg>
              </span>
              <select
                {...register("city")}
                id="city"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setSelectedCity(e.target.value)} // Update selected city
              >
                <option value="">Select City</option>
                {Object.keys(cities).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Sub-area selection */}
            {selectedCity && (
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12h.01M12 3v.01M12 21v-.01M21 12h-.01"
                    />
                  </svg>
                </span>
                <select
                  {...register("subArea")}
                  id="subArea"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="">Select Sub-Area</option>
                  {cities[selectedCity].map((subArea) => (
                    <option key={subArea} value={subArea}>
                      {subArea}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary-cyan rounded-lg hover:bg-primary-cyan-light focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CareGiverApplyForm;
