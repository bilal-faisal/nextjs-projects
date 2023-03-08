import phone from "../../public/phone.png";
import location from "../../public/location.png";
import mail from "../../public/mail.png";
import linkedin from "../../public/linkedin.png";
import github from "../../public/github.png";

import Image from "next/image";

const Contact_Items = () => {
  return (
    <div className="flex my-5 flex-wrap">
      <div className="flex flex-col w-fit">
        <div className="flex my-1">
          <Image
            src={phone}
            height={25}
            alt={`phone_icon`}
            className="rounded-md"
          />
          <p className="px-3">0310-1710479</p>
        </div>

        <div className="flex my-1">
          <Image
            src={location}
            height={25}
            alt={`location_icon`}
            className="rounded-md"
          />
          <p className="px-3">Block H1, Johar Town, Lahore</p>
        </div>

        <div className="flex my-1">
          <Image
            src={mail}
            height={25}
            alt={`mail_icon`}
            className="rounded-md"
          />
          <p className="px-3">bilalfaisal.developer@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col w-fit">
        <div className="flex my-1">
          <Image
            src={github}
            height={25}
            alt={`github_icon`}
            className="rounded-md"
          />
          <p className="px-3">github.com/bilal-faisal</p>
        </div>

        <div className="flex my-1">
          <Image
            src={linkedin}
            height={25}
            alt={`linkedin_icon`}
            className="rounded-md"
          />
          <p className="px-3">linkedin.com/in/bilal-faisal</p>
        </div>
      </div>
    </div>
  );
};

export default Contact_Items;
