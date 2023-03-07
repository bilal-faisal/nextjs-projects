import Heading from "@/components/Heading";
import Image from "next/image";
import Skill_Items from "@/components/Skill_Items";
import P_Skill_Items from "@/components/P_Skill_Items";
import Qual_Items from "@/components/Qual_Items";
import Contact_Items from "@/components/Contact_Items";

const Home = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap py-5 bg-white lg:w-1/3 lg:border-r-2 lg:border-[#34678C]">
        <div className="flex justify-center">
          <Image
            src="/myprofile.jpg"
            width={150}
            height={150}
            alt="profile"
            className="rounded-full mt-10 mb-8 border-4 border-[#34678C]"
          />
        </div>

        <Heading name={"Skills"} />
        <Skill_Items />

        <Heading name={"Professional Skills"} />
        <P_Skill_Items />

        <Heading name={"Qualifications"} />
        <Qual_Items />

        <Heading name={"Contact"} />
        <Contact_Items />
      </div>
    </>
  );
};

export default Home;
