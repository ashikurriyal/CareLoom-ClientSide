import useUser from "../../../Hooks/useUser";

const ProfileDetails = () => {
  const collectUser = useUser();
  console.log(collectUser);
  return (
    <div className="container mx-auto">
        <div className="md:mt-12">
            <h1 className="text-2xl font-bold">My Profile</h1>
        </div>
        <div className="border-2 w-1/2 rounded-xl flex items-center gap-4 p-4 md:mt-4">
            <div>
                <img className="w-16 h-16 border-2 rounded-full" src={collectUser?.image} alt="" />
            </div>
            <div>
                <h3 className="text-2xl font-medium">{collectUser?.name}</h3>
                <p>{collectUser.email}</p>
            </div>
            <div className="ml-auto">
                <button>Edit</button>
            </div>
        </div>
      
    </div>
  );
};

export default ProfileDetails;
