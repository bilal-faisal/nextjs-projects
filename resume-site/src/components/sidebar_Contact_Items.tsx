import Sidebar_Contact_Item from "@/components/sidebar_Contact_Item";

const Sidebar_Contact_Items = () => {
  return (
    <div className="flex flex-col ml-10 py-4 flex-wrap">
      <Sidebar_Contact_Item name={"Address"} value={"Block H1, Johar Town, Lahore"} />
      <Sidebar_Contact_Item name={"Phone"} value={"0310-1710479"} />
      <Sidebar_Contact_Item name={"Email"} value={"bilalfaisal.developer@gmail.com"} />
      <Sidebar_Contact_Item name={"Github"} value={"/bilal-faisal"} />
      <Sidebar_Contact_Item name={"LinkedIn"} value={"/in/bilal-faisal"} />
    </div>
  );
};

export default Sidebar_Contact_Items;
