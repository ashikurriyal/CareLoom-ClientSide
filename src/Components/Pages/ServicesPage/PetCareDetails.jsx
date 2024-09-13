/* eslint-disable react/no-unescaped-entities */
import { IoIosCheckmarkCircle } from "react-icons/io";
import banner1 from "../../../assets/Images/ServicesPage/PetCareServicesBanner1.png"
import banner2 from "../../../assets/Images/ServicesPage/PetCareServices2.png"

const PetCareDetails = () => {
  return (
    <div className="">
      <div>
        <img
          className="rounded-box"
          src={banner1}
          alt=""
        />
      </div>
      <div className="grid grid-cols-subgrid md:gap-4">
        <h1 className="font-bold text-6xl text-primary-cyan md:mt-4">
          What is Pet Care?
        </h1>
        <p className="text-lg">
          Pet care involves looking after your furry companions, ensuring they
          receive proper nutrition, grooming, and exercise. Our caregivers are
          trained to handle all kinds of pets, offering personalized attention
          and care.
        </p>
        <p className="text-lg">
          We provide a variety of services, including dog walking, pet sitting,
          and grooming. Whether you're at work or on vacation, you can trust
          us to care for your pets and provide a loving, safe environment.
        </p>
        <p className="text-lg">
          Your pet's health and well-being are important to us. We take pride in
          offering specialized care that caters to each pet's unique needs,
          keeping them happy and healthy while you're away.
        </p>

        <div className="grid grid-cols-subgrid md:gap-4">
          <h1 className="font-bold text-4xl text-primary-cyan">
            Trusted Pet Care Services
          </h1>
          <p className="text-lg">
            With years of experience, our team is committed to providing
            high-quality pet care. We ensure each pet feels comfortable,
            relaxed, and well-cared for.
          </p>
          <div className="grid grid-cols-2 text-lg gap-8">
            <div>
              <img
                className="rounded-2xl"
                src={banner2}
                alt=""
              />
            </div>
            <div className="md:space-y-4">
              <p className="text-lg">
                Our services ensure your pet feels loved and cared for. We offer...
              </p>
              <div className="flex items-start gap-2">
                <IoIosCheckmarkCircle
                  className="text-green-500"
                  style={{ fontSize: "1.5rem" }}
                />
                <p>
                  <span className="font-medium">Pet Sitting:</span>{" "}
                  Safe and nurturing care while you're away.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <IoIosCheckmarkCircle
                  className="text-green-500"
                  style={{ fontSize: "1.5rem" }}
                />
                <p>
                  <span className="font-medium">Grooming:</span>{" "}
                  Professional grooming for all breeds.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <IoIosCheckmarkCircle
                  className="text-green-500"
                  style={{ fontSize: "1.5rem" }}
                />
                <p>
                  <span className="font-medium">Dog Walking:</span>{" "}
                  Daily exercise to keep your pets active.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCareDetails;
