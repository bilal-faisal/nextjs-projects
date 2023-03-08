import Heading from "@/components/Heading";
import Skill_Items from "@/components/Skill_Items";
import P_Skill_Items from "@/components/P_Skill_Items";
import Qual_Items from "@/components/Qual_Items";
import Profile from "@/components/Profile";
import Extra_Contact_Items from "@/components/extra_Contact_Items";
import Contact_Items from "@/components/Contact_Items";
import Project_Item from "@/components/Project_Item";
import Project_Items from "@/components/Project_Items";
import Certification_Items from "@/components/Certification_Items";

const Home = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col pl-10 flex-wrap my-10 bg-white lg:w-1/3 ">
        {/* <div className="flex flex-col flex-wrap my-10 bg-white lg:w-1/3 lg:border-r-2 lg:border-[#34678C]"> */}

        <Profile />

        <Heading name={"Skills"} />
        <Skill_Items />

        <Heading name={"Professional Skills"} />
        <P_Skill_Items />

        <Heading name={"Qualifications"} />
        <Qual_Items />

        {/* <Heading name={"Contact"} />
        <Extra_Contact_Items/> */}
      </div>
      <div className="flex flex-col flex-wrap px-10 my-10 bg-white lg:w-2/3 lg:border-l-2 lg:border-[#34678C]">
        <h1 className="text-5xl text-[#34678C]">Bilal Faisal</h1>
        <p className="text-lg text-[#F47A7A]">Associate Software Engineer</p>
        <Contact_Items />

        <Heading name={"Projects"} />
        <Project_Items />

        <Heading name={"Certifications"} />
        <Certification_Items />
      </div>
    </div>
  );
};

export default Home;
