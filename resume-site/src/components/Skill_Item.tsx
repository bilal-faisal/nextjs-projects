interface Skill {
  name: String;
}

const Skill_Item = ({ name }: Skill) => {
  return (
    <h2 className="text-lg px-4 py-1 m-1 rounded-lg text-white w-fit bg-[#99B3C5]">
      {name}
    </h2>
  );
};

export default Skill_Item;
