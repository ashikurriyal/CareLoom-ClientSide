import Headings from "../../Shared/Headings/Headings"
import MembersCard from "./MembersCard"

const TeamMembers = () => {
  const members = [
    {
      name: "Sarah Johnson",
      image:
        "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg",
      specialist: "Pet Care Specialist",
      description:
        "Expert in providing care for pets, including routine check-ups, grooming, and medical attention. Passionate about ensuring the health and well-being of animals.",
    },
    {
      name: "Michael Lee",
      specialist: "Child Care Specialist",
      image:
        "https://us.123rf.com/450wm/jackf/jackf2306/jackf230601964/205718291-young-woman-posing-in-medical-uniform-in-studio.jpg?ver=6",
      description:
        "Provides nurturing and responsible care for children, focusing on child development, safety, and well-being. Specialized in creating a fun and educational environment.",
    },
    {
      name: "Emily Rodriguez",
      specialist: "Elderly Care Specialist",
      image:
        "https://st.depositphotos.com/1010683/2753/i/450/depositphotos_27539245-stock-photo-asian-female-doctor-holding-stethoscope.jpg",
      description:
        "Experienced in elderly care, ensuring comfort, medical support, and companionship for seniors. Dedicated to improving the quality of life for older adults.",
    },
    {
      name: "David Thompson",
      specialist: "Special Needs Children Care Specialist",
      image:
        "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
      description:
        "Specializes in providing attentive care for children with special needs, including developmental and physical disabilities. Focuses on personalized care plans to ensure growth and comfort.",
    },
    {
      name: "Anjali Patel",
      specialist: "Child Care Specialist",
      image:
        "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
      description:
        "Provides expert care for children, ensuring their safety, health, and emotional well-being. Offers a nurturing environment for optimal child development.",
    },
    {
      name: "Robert Evans",
      specialist: "Elderly Care Specialist",
      image:
        "https://www.shutterstock.com/image-photo/horizontal-banner-smiling-young-male-600nw-2137891993.jpg",
      description:
        "Focused on providing comprehensive elderly care, including medical support, daily assistance, and companionship to help seniors live fulfilling lives.",
    },
  ];
  return (
    <div className="container mx-auto">
      <Headings mainText={"Meet Our Professionals"}></Headings>
      <h3 className="text-center md:mt-4 mt-2 text-lg">
      Our skilled caregivers are dedicated to providing compassionate and personalized care, ensuring your loved ones are in trusted hands.{" "}
      </h3>

      <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-8 md:mt-14 mt-5">
      {members.map((member, index)=> (<MembersCard key={index} member={member}></MembersCard> ))}
      </div>
    </div>
  );
};

export default TeamMembers;
