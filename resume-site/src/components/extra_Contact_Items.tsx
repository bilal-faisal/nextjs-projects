import Extra_Contact_Item from "@/components/extra_Contact_Item";

const Extra_Contact_Items = () => {
  return (
    <div className="flex flex-col ml-10 py-4 flex-wrap">
      <Extra_Contact_Item name={"Address"} value={"Block H1, Johar Town, Lahore"} />
      <Extra_Contact_Item name={"Phone"} value={"0310-1710479"} />
      <Extra_Contact_Item name={"Email"} value={"bilalfaisal.developer@gmail.com"} />
      <Extra_Contact_Item name={"Github"} value={"/bilal-faisal"} />
      <Extra_Contact_Item name={"LinkedIn"} value={"/in/bilal-faisal"} />
    </div>
  );
};

export default Extra_Contact_Items;
