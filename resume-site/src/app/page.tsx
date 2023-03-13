import About from "@/components/About";
import Heading from "@/components/Heading";
import Profile from "@/components/Profile";
import Qual_Items from "@/components/Qual_Items";
import Skill_Items from "@/components/Skill_Items";
import Professional_Skill_Items from "@/components/Professional_Skill_Items";
import Contact_Items from "@/components/Contact_Items";
import Project_Items from "@/components/Project_Items";
import Certification_Items from "@/components/Certification_Items";

const Home = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col flex-wrap lg:px-8 px-5 lg:my-10 mb-0 mt-5 bg-white lg:w-1/3 ">
        <Profile />

        <div className="text-center lg:hidden block">
          <About />
        </div>
        <div className="lg:hidden block">
          <Contact_Items />
        </div>

        <Heading name={"Skills"} />
        <Skill_Items />

        <Heading name={"Professional Skills"} />
        <Professional_Skill_Items />

        <Heading name={"Qualifications"} />
        <Qual_Items />
        
      </div>
      <div className="flex flex-col flex-wrap lg:px-10 px-5 lg:my-10 my-0 bg-white lg:w-2/3 lg:border-l-2 lg:border-[#34678C]">
        <div className="hidden lg:block">
          <About />
          <Contact_Items />
        </div>

        <Heading name={"Projects"} />
        <Project_Items />

        <Heading name={"Certifications"} />
        <Certification_Items />
      </div>
    </div>
  );
};

export default Home;
