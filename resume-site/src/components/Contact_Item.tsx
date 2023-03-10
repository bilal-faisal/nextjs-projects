import Image from "next/image";
import Link from "next/link";
interface Image {
  img: String;
  url: String;
  text: String;
}
const Contact_Item = ({ img, url, text }: Image) => {
  return (
    <div className="flex my-1 items-start">
      <Image
        src={`/${img}`}
        height={25}
        width={25}
        alt="icon"
        className="rounded-md"
      />
      <p className="px-3">
        <Link href={`${url}`} target={"_blank"}>
          {text}
        </Link>
      </p>
    </div>
  );
};

export default Contact_Item;
