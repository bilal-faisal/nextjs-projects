interface Skill {
  name: String;
  area: String;
  time: String;
}

const Qual_Item = ({ name, area, time }: Skill) => {
  return (
    <div className="ml-2 mb-1">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-md text-gray-800">{area}</p>
      <p className="text-md text-gray-800">{time}</p>
    </div>
  );
};

export default Qual_Item;
