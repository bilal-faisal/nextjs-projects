import Contact_Item from "./Contact_Item";

const Contact_Items = () => {
  return (
    <div className="flex my-5 flex-wrap">
      <div className="flex flex-col w-fit">
        <Contact_Item
          img={"phone.png"}
          url={"tel:+923101710479"}
          text={"0310-1710479"}
        />
        <Contact_Item
          img={"location.png"}
          url={"https://goo.gl/maps/3wFQA9A3G9eYqrAYA"}
          text={"Block H1, Johar Town, Lahore"}
        />
        <Contact_Item
          img={"mail.png"}
          url={"mailto:bilalfaisal.developer@gmail.com"}
          text={"bilalfaisal.developer@gmail.com"}
        />
      </div>
      <div className="flex flex-col w-fit">
        <Contact_Item
          img={"github.png"}
          url={"https://github.com/bilal-faisal"}
          text={"github.com/bilal-faisal"}
        />
        <Contact_Item
          img={"linkedin.png"}
          url={"https://www.linkedin.com/in/bilal-faisal/"}
          text={"linkedin.com/in/bilal-faisal"}
          // key={"linkedin.png"}
        />
      </div>
    </div>
  );
};

export default Contact_Items;
