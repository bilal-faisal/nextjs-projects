import Project_Item from "./Project_Item";
import Project_Item_Extra from "./Project_Item_Extra";

const Project_Items = () => {
  return (
    <div className="flex flex-col py-4 flex-wrap">
      <Project_Item
        name={"Blogging Site – Next.js 13"}
        desc={"Web app where user can read blogs of different categories."}
        points={[
          "Stored blogs as JSON object files.",
          "Created API Endpoints to get required files.",
          "Applied NextJS Server Side Rendering Strategy.",
        ]}
      />
      <Project_Item
        name={"News App – React.js"}
        desc={"Web application that helps user read latest news."}
        points={[
          "Used API to get latest news.",
          "Implemented category feature so the user can freely choose between the news categories.",
        ]}
      />
      <Project_Item
        name={"Text Utility – React.js"}
        desc={"Web app that helps user perform basic oprations on text."}
        points={[
          "Implemented variety of text functionalities.",
          "Implemented Light and Dark mode using state concepts.",
        ]}
      />
      <Project_Item
        name={"Todo List Application – Java, Servlets, JSP, MySQL"}
        desc={
          "Web-based Todo-list app where users can Read, Add, Delete and Modify their tasks."
        }
        points={[
          " Implemented SignUp/SignIn Functionality",
          " Session Management and Error Handling.",
          " Client Side Validations through JavaScript.",
        ]}
      />
      <Project_Item_Extra
        name={"JavaScript Projects"}
        points={[
          "Postman Clone",
          "CV Screener",
          "Notes Taking App",
          "Currency Exchanger",
          "Pig Dice Game",
          "RGB Color Game",
        ]}
      />
    </div>
  );
};

export default Project_Items;
