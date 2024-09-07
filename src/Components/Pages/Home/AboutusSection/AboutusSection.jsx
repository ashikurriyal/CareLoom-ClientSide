import aboutusimg1 from "../../../../assets/Images/aboutus/aboutus1.jpeg";
import aboutusimg2 from "../../../../assets/Images/aboutus/aboutus2.webp";

const AboutusSection = () => {
  return (
    <div className="mt-24 container mx-auto rounded-2xl">
      <div className="flex p- flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 relative">
          <img
            src={aboutusimg1}
            className="w-3/4 rounded-lg shadow-2xl border-white border-8"
          />
          <img
            src={aboutusimg2}
            className="w-2/4 rounded-lg shadow-2xl border-white border-8 right-24 top-[200px] absolute"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          {/* <h3 className="text-3xl text-yellow-green font-bold">About Us</h3> */}
          <h1 className="text-5xl font-bold text-primary-cyan">
            You Have Lots of Reason to Choose Us
          </h1>
          <p className="text-lg">
            There are many reasons to choose our caregiver services, each
            tailored to meet your unique needs. We pride ourselves on offering
            compassionate, reliable, and professional care that truly makes a
            difference in the lives of those we serve.
            <br />
            From personalized care plans to a highly trained and empathetic
            team, our services ensure that your loved ones receive the attention
            and support they deserve, giving you peace of mind every step of the
            way.
          </p>

          {/* <button className="btn bg-yellow-green">Get More Info</button> */}
          <div className="flex gap-4">
            <button className="px-5 py-3 md:px-9 md:py-6 bg-primary-cyan text-white rounded-full font-bold md:text-xl">
              Get started
            </button>
            <button className="px-5 py-3 md:px-9 md:py-6 border-2 rounded-full bg-white text-xl text-primary-cyan">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusSection;
