interface Contact {
  name: String;
  value: String;
}
const Extra_Contact_Item = ({ name, value }: Contact) => {
  return (
    <div className="ml-3 mb-1">
      <h2 className="text-lg font-semibold">{name}:</h2>
      <p className="text-md text-gray-800 ml-2">{value}</p>
    </div>
  );
};

export default Extra_Contact_Item;
