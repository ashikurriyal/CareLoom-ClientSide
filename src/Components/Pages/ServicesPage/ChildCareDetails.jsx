/* eslint-disable react/no-unescaped-entities */
import { IoIosCheckmarkCircle } from "react-icons/io";
import banner1 from "../../../assets/Images/ServicesPage/ChildCareServicesBanner1.png"
import banner2 from "../../../assets/Images/ServicesPage/ChildCareServices2.png"

const ChildCareDetails = () => {
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
                    src={banner2}
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
    );
};

export default ChildCareDetails;