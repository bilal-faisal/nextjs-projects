import Bullet_Icon from "@/components/Bullet_Icon";

interface Skill {
  name: String;
}

const Heading = ({ name }: Skill) => {
  return (
    <div className="flex items-center ml-10 mr-3 mt-3">
      <Bullet_Icon />
      <span className="w-3"></span>
      <h2 className="text-3xl text-[#34678C] flex-shrink">{name}</h2>
    </div>
  );
};

export default Heading;
