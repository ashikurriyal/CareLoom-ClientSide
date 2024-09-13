import { IoIosCheckmarkCircle } from "react-icons/io";
import banner1 from "../../../assets/Images/ServicesPage/ElderlyCareServicesBanner1.png"
import banner2 from "../../../assets/Images/ServicesPage/ElderlyCareServices2.png"

const ElderlyCareDetails = () => {
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
          What is Elderly Care?
        </h1>
        <p className="text-lg">
          Elderly care is focused on providing physical, emotional, and medical
          support for seniors, ensuring they live comfortably and with dignity.
          Our care services include companionship, assistance with daily
          activities, and specialized medical care.
        </p>
        <p className="text-lg">
          Whether you need full-time live-in care or part-time assistance, our
          dedicated caregivers are here to offer support and companionship.
          We focus on enhancing the quality of life for seniors, allowing them
          to remain active and engaged.
        </p>
        <p className="text-lg">
          Our top priority is the well-being and safety of the elderly. We work
          with families to develop a care plan that ensures peace of mind while
          helping seniors maintain their independence as long as possible.
        </p>

        <div className="grid grid-cols-subgrid md:gap-4">
          <h1 className="font-bold text-4xl text-primary-cyan">
            Compassionate Elderly Care
          </h1>
          <p className="text-lg">
            With a focus on understanding and empathy, our caregivers provide
            personalized care solutions to meet the unique needs of each
            individual, ensuring comfort and security in every step of life.
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
                Seniors receive care in a comfortable, supportive setting. Our
                services include...
              </p>
              <div className="flex items-start gap-2">
                <IoIosCheckmarkCircle
                  className="text-green-500"
                  style={{ fontSize: "1.5rem" }}
                />
                <p>
                  <span className="font-medium">Daily Assistance:</span>{" "}
                  Help with everyday tasks and mobility.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <IoIosCheckmarkCircle
                  className="text-green-500"
                  style={{ fontSize: "1.5rem" }}
                />
                <p>
                  <span className="font-medium">Medical Care:</span>{" "}
                  Specialized support for seniors with health conditions.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <IoIosCheckmarkCircle
                  className="text-green-500"
                  style={{ fontSize: "1.5rem" }}
                />
                <p>
                  <span className="font-medium">Companionship:</span>{" "}
                  Emotional and social support for seniors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderlyCareDetails;
