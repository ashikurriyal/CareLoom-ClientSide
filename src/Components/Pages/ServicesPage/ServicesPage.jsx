/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ServicesPage = () => {
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
                className="text-lg font-medium bg-white rounded-full p-4 mt-4 flex items-center justify-between hover:border-s-4 hover:border-primary-cyan hover:text-primary-cyan"
              >
                {service.title} <FaArrowRight />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Categories */}
        <div className="">
          <div>
            <img
              className="rounded-box"
              src="https://images.unsplash.com/photo-1656087813550-d5cdae8ee57c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fENoaWxkJTIwQ2FyZXxlbnwwfDB8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="grid grid-cols-subgrid md:gap-4">
            <h1 className="font-bold text-6xl text-primary-cyan md:mt-4">
              What is Child Care?
            </h1>
            <p className="text-lg">
              Child care involves providing care, supervision, and support for
              children in a safe and nurturing environment. From infant care to
              early childhood education, our range of services ensures that
              children receive the attention, guidance, and enrichment they need
              during their developmental years.
            </p>
            <p className="text-lg">
              Whether you're looking for full-time care, after-school programs,
              or specialized services like care for children with special needs,
              we offer a variety of options under one roof. Our dedicated
              caregivers are committed to fostering your child’s growth,
              creativity, and well-being.
            </p>
            <p className="text-lg">
              Your child's safety and happiness are our top priorities. We work
              closely with families to understand their needs, answer any
              questions, and create a care plan tailored to each child. Our goal
              is to empower parents by providing reliable, high-quality care
              that supports their child’s development.
            </p>

            <div className="grid grid-cols-subgrid md:gap-4">
              <h1 className="font-bold text-4xl text-primary-cyan">
                Comprehensive Care Solutions
              </h1>
              <p className="text-lg">
                Our team of dedicated caregivers brings years of experience and
                expertise to provide the highest quality care for children,
                families, and individuals. We focus on compassion and
                understanding, ensuring that each person receives the
                personalized care they deserve.
              </p>
              <div className="grid grid-cols-2 text-lg gap-8">
                <div>
                  <img
                    className="rounded-2xl"
                    src="https://cdn.openviowebsites.com/source/sites/704e82fe-c3c7-4a7a-9766-414a97604e21/images/child-home-care.jpg"
                    alt=""
                  />
                </div>
                <div className="md:space-y-4">
                  <p className="text-lg">
                    Children are safely cared for in a supportive, relaxed
                    environment. You can find from us...
                  </p>
                  <div className="flex items-start gap-2">
                    <IoIosCheckmarkCircle
                      className="text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    <p>
                      <span className="font-medium">Special Care:</span>{" "}
                      Tailored plans for children with unique needs.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <IoIosCheckmarkCircle
                      className="text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    <p>
                      <span className="font-medium">
                        Comprehensive Support:
                      </span>{" "}
                      24/7 care for all situations.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <IoIosCheckmarkCircle
                      className="text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    <p>
                      <span className="font-medium">Four Levels of Care:</span>{" "}
                      A holistic approach to overall well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
