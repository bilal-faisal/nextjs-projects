import tick from "../../public/tick.png";
import Image from "next/image";
interface Project {
  name: String;
  subname?: String;
  desc: String;
  content: String;
}

const Certification_Item = ({ name, desc, content, subname }: Project) => {
  return (
    <div className="ml-2 mb-3">
      <h2 className="text-lg font-semibold">
        {name} <span className="font-normal text-sm">{subname}</span>
      </h2>
      <p className="text-md text-gray-800">{desc}</p>
      <p className="text-md text-gray-900 pl-5">Course Content:</p>
      <div className="flex items-start ml-5">
        <Image
          src={tick}
          width={18}
          // height={18}
          alt="bullet"
          className="pt-1"
        />
        <span className="w-3"></span>
        <p className="text-md text-gray-800">{content}</p>
      </div>
    </div>
  );
};

export default Certification_Item;
