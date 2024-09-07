import petcare from "../../../../assets/Images/services/petcare.jpg";
import childcare from "../../../../assets/Images/services/childcare.jpg";
import elderlycare from "../../../../assets/Images/services/elderlycare.jpg";
import specialchildcare from "../../../../assets/Images/services/specialchildcare.webp";
import Headings from "../../Shared/Headings/Headings";
import ServiceCard from "./ServiceCard";

const ServiecesSection = () => {
  const services = [
    {
      image: `${petcare}`,
      title: "Pet Care",
      description:
        "Professional pet care services offering pet sitting, walking, grooming, and feeding to ensure your furry friends are well taken care of in your absence.",
    },
    {
      image: `${childcare}`,
      title: "Child Care",
      description:
        "Safe and nurturing child care services provided by experienced caregivers, offering assistance with daily routines, education, and recreational activities.",
    },
    {
      image: `${elderlycare}`,
      title: "Elderly Care",
      description:
        "Comprehensive elderly care services tailored to meet the needs of seniors, including mobility assistance, companionship, meal preparation, and medication management.",
    },
    {
      image: `${specialchildcare}`,
      title: "Special Child Care",
      description:
        "Dedicated care services for children with special needs, providing personalized support, therapy, and compassionate attention to ensure their well-being and development.",
    },
  ];
  return (
    <div className="container mx-auto">
      <div>
        <Headings
          mainText={"Services We Provide"}
          subText={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan."
          }
        ></Headings>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-16 gap-6 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard
            image={service.image}
            key={index}
            title={service.title}
            description={service.description}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiecesSection;
