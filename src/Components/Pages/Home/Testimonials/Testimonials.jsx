import person1 from "../../../../Assets/Images/Avatar/person1.svg";
import person2 from "../../../../Assets/Images/Avatar/person2.svg";
import person3 from "../../../../Assets/Images/Avatar/person3.svg";
import Headings from "../../Shared/Headings/Headings";
import TestimonialCards from "../Testimonials/TestimonialCards"


const Testimonials = () => {
  const testimonials = [
    {
      image: `${person1}`,
      title: "An amazing service",
      name: "John Doe",
      designation: "CEO, Tech Innovations",
      comment:
        "The service exceeded our expectations with its professionalism and efficiency.",
    },
    {
      image: `${person2}`,
      title: "One of a kind service",
      name: "Jane Smith",
      designation: "Marketing Director, Creative Solutions",
      comment:
        "Unique and tailored to our needs, this service truly stands out from the rest.",
    },
    {
      image: `${person3}`,
      title: "The best service",
      name: "David Brown",
      designation: "Founder, Startup Hub",
      comment:
        "Exceptional service with top-notch quality. We highly recommend it.",
    },
  ];
  return (
    <div className="container mx-auto">
      <div>
        <Headings
          mainText={"Testimonial"}
          subText={
            "Hear from families who have experienced the difference our dedicated caregivers make in the lives of their loved ones."
          }
        ></Headings>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-8 md:mt-14 mt-5">
        {testimonials.map((testimonial, index) => (
          <TestimonialCards
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            designation={testimonial.designation}
            comment={testimonial.comment}
            title={testimonial.title}
          ></TestimonialCards>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
