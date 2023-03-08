import Image from "next/image";
interface Image {
  name: String;
  text: String;
}
const Contact_Item = ({ name, text }: Image) => {
  return (
    <div className="flex my-1">
      <Image
        src={`/${name}`}
        width={25}
        height={25}
        alt={`${name}_icon`}
        className="rounded-md"
      />
      <p className="px-3">{text}</p>
    </div>
  );
};

export default Contact_Item;
