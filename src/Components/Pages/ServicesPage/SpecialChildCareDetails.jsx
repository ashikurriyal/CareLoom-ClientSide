import { IoIosCheckmarkCircle } from "react-icons/io";
import banner1 from "../../../assets/Images/ServicesPage/SpecialChildCareServicesBanner1.png"
import banner2 from "../../../assets/Images/ServicesPage/SpecialChildServices2.png"

const SpecialChildCareDetails = () => {
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
          What is Special Child Care?
        </h1>
        <p className="text-lg">
          Special child care is tailored to meet the needs of children with
          physical, developmental, or emotional challenges. We offer
          specialized services that promote growth and development in a
          compassionate and supportive environment.
        </p>
        <p className="text-lg">
          Our caregivers are trained to handle unique requirements and work
          closely with families to provide personalized care. Whether your
          child needs assistance with daily activities or therapeutic support,
          we are here to help.
        </p>
        <p className="text-lg">
          We prioritize the safety and well-being of children, ensuring that
          their emotional and developmental needs are met. Our goal is to help
          every child reach their full potential with a tailored care plan.
        </p>

        <div className="grid grid-cols-subgrid md:gap-4">
          <h1 className="font-bold text-4xl text-primary-cyan">
            Specialized Care for Special Needs
          </h1>
          <p className="text-lg">
            Our team offers a wide range of services that cater to the needs of
            children with special needs, ensuring they receive the attention and
            support they deserve.
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
                Children with special needs are cared for in a nurturing and
                understanding environment. We offer...
              </p>
              <div className="flex items-start gap-2">
                <IoIosCheckmarkCircle
                  className="text-green-500"
                  style={{ fontSize: "1.5rem" }}
                />
                <p>
                  <span className="font-medium">Therapeutic Support:</span>{" "}
                  Activities designed to aid development.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <IoIosCheckmarkCircle
                  className="text-green-500"
                  style={{ fontSize: "1.5rem" }}
                />
                <p>
                  <span className="font-medium">Specialized Care Plans:</span>{" "}
                  Tailored care for unique physical or developmental needs.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <IoIosCheckmarkCircle
                  className="text-green-500"
                  style={{ fontSize: "1.5rem" }}
                />
                <p>
                  <span className="font-medium">Family Support:</span>{" "}
                  Guidance and resources for families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialChildCareDetails;
