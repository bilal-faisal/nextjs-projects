import Image from "next/image";
import tick from "../../public/tick.png";

interface Project {
  name: String;
  points: String[];
}

const Project_Item_Extra = ({ name, points }: Project) => {
  return (
    <div className="ml-2 mb-3">
      <h2 className="text-lg font-semibold">{name}</h2>
      {points.map((point) => {
        return (
          <div className="flex items-center ml-4" key={`${point}`}>
            <Image
              src={tick}
              width={18}
              alt="bullet"
              className=""
            />
            <span className="w-3"></span>
            <h2 className="text-md flex-shrink">{point}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Project_Item_Extra;
