import Contact_Item from "@/components/Contact_Item";

const Contact_Items = () => {
  return (
    <div className="flex flex-col ml-10 py-4 flex-wrap">
      <Contact_Item name={"Address"} value={"Block H1, Johar Town, Lahore"} />
      <Contact_Item name={"Phone"} value={"0310-1710479"} />
      <Contact_Item name={"Email"} value={"bilalfaisal.developer@gmail.com"} />
      <Contact_Item name={"Github"} value={"/bilal-faisal"} />
      <Contact_Item name={"LinkedIn"} value={"/in/bilal-faisal"} />
    </div>
  );
};

export default Contact_Items;
