import Image from "next/image";

interface Skill {
  name: String;
}

const Heading = ({ name }: Skill) => {
  return (
    <div className="flex items-center mr-3 mt-3">
      <Image
        src="/bullet_icon.png"
        width={35}
        height={35}
        alt="profile"
        className=""
      />
      <span className="w-3"></span>
      <h2 className="text-3xl text-[#34678C] flex-shrink">{name}</h2>
    </div>
  );
};

export default Heading;
