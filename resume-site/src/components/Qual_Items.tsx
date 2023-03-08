import Qual_Item from "@/components/Qual_Item";

const Qual_Items = () => {
  return (
    <div className="flex flex-col py-4 flex-wrap">
      <Qual_Item
        name={"BS Information Technology"}
        area={"PUCIT, Lahore"}
        time={"2019 – (In progress)"}
      />
      <Qual_Item
        name={"FSC (Pre-Engineering)"}
        area={"PGC, Okara"}
        time={"2017 – 2019"}
      />
      <Qual_Item
        name={"Matric (Computer Science)"}
        area={"BHS, Dera Ghazi Khan"}
        time={"2015 – 2017"}
      />
    </div>
  );
};

export default Qual_Items;
