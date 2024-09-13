/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import ChildCareDetails from "./ChildCareDetails";
import ElderlyCareDetails from "./ElderlyCareDetails";
import PetCareDetails from "./PetCareDetails";
import SpecialChildCareDetails from "./SpecialChildCareDetails";

const ServicesPage = () => {
    
    const [selectedService, setSelectedService] = useState("Child Care");
  
    
    const services = [
      {
        title: "Child Care",
      },
      {
        title: "Elderly Care",
      },
      {
        title: "Pet Care",
      },
      {
        title: "Special Child Care",
      },
    ];

    const serviceDetailsContent = {
      "Child Care": (
        <div>
            <ChildCareDetails></ChildCareDetails>
        </div>
      ),
      "Elderly Care": (
        <div>
          <ElderlyCareDetails></ElderlyCareDetails>
        </div>
      ),
      "Pet Care": (
        <div>
          <PetCareDetails></PetCareDetails>
        </div>
      ),
      "Special Child Care": (
        <div>
          <SpecialChildCareDetails></SpecialChildCareDetails>
        </div>
      ),
    };
  
    return (
      <div className="container mx-auto">
        <h1 className="text-4xl text-center text-primary-cyan font-bold mt-2">
          Our Services
        </h1>
  
        <div className="flex justify-between md:mt-12">
          {/* Left Side - Categories */}
          <div className="w-1/3">
            <ul className="bg-[#ececec] rounded-box border-2 p-6">
              <li className="text-black text-2xl font-medium p-4">Categories</li>
              <hr className="border-2 border-primary-cyan" />
              {services.map((service, index) => (
                <li
                  key={index}
                  className={`text-lg font-medium bg-white rounded-full p-4 mt-4 flex items-center justify-between cursor-pointer hover:border-s-4 hover:border-primary-cyan hover:text-primary-cyan ${
                    selectedService === service.title ? "border-s-4 border-primary-cyan text-primary-cyan" : ""
                  }`}
                  onClick={() => setSelectedService(service.title)}
                >
                  {service.title} <FaArrowRight />
                </li>
              ))}
            </ul>
          </div>
  
          {/* Right Side - Dynamic Service Details */}
          <div>
            {serviceDetailsContent[selectedService]}
          </div>
        </div>
      </div>
    );
  };

export default ServicesPage;
