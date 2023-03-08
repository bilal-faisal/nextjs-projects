import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/myprofile.jpg"
        width={150}
        height={150}
        alt="profile"
        priority
        className="rounded-full mb-8 border-4 border-[#34678C]"
      />
    </div>
  );
};

export default Profile;
