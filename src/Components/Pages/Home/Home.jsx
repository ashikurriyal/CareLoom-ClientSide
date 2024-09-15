import AboutusSection from "./AboutusSection/AboutusSection";
import ServiecesSection from "./ServicesSection/ServiecesSection";
import TeamMembers from "./TeamMemmbers/TeamMembers";
import Testimonials from "./Testimonials/Testimonials";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect } from "react";
import CaregiverApply from "../CaregiverApply/CaregiverApply";

const Home = () => {
  const { user } = useAuth();
  const email = user?.email;
  const axiosPublic = useAxiosPublic();


  useEffect(() => {
    const getUser = async () => {
      const res = await axiosPublic.get(`/collectUser/${email}`);
      
      return res?.data;
    };

    getUser();
  }, [axiosPublic, email]);

  return (
    <div>
      <AboutusSection></AboutusSection>
      <CaregiverApply></CaregiverApply>
      <ServiecesSection></ServiecesSection>
      <TeamMembers></TeamMembers>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
