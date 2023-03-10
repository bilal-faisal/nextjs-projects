import React from "react";
interface Project {
  name: String;
  desc: String;
  points: String[];
}

const Project_Item = ({ name, desc, points }: Project) => {
  return (
    <div className="ml-2 mb-3">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-md text-gray-800">{desc}</p>
      <ul className="list-disc ml-10">
        {points.map((point) => {
          return <li className="text-[#F47A7A]" key={`${point}`}><span className="text-gray-800">{point}</span> </li>;
        })}
      </ul>
    </div>
  );
};

export default Project_Item;
