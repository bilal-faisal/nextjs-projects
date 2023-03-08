import Certification_Item from "./Certification_Item";

const Certification_Items = () => {
  return (
    <div className="flex flex-col py-4 flex-wrap">
      <Certification_Item
        name={"Web 3.0 and Metaverse Development"}
        subname={"(In Progress)"}
        desc={"1 year training program from Panaverse, PIAIC Lahore"}
        content={
          "Javascript, TypeScript, Next.js 13, Tailwind CSS, Figma, API Routes, GraphQL, Figma, Serverless Cloud Apps, Blockchain, Web 3.0 Dapps, Solidity, Blender"
        }
      />
      <Certification_Item
        name={"Advance Web Application Development"}
        desc={"6 months training program from KICS, UET Lahore"}
        content={"HTML, CSS, Bootstrap, Javascript, Jquery, PHP, MySQL"}
      />
      <Certification_Item
        name={"Web Design and Development"}
        desc={"2 months course from PNY Trainings, Lahore"}
        content={"HTML, CSS, Bootstrap, Wordpress"}
      />
    </div>
  );
};

export default Certification_Items;
