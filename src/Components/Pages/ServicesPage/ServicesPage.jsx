


const ServicesPage = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-4xl text-center text-primary-cyan font-bold mt-2">Our Services</h1>

        <div>
            {/* Left Side - Categories */}
            <div>
            <ul className=" bg-base-200 rounded-box w-56 p-4">
                <li className="text-black text-2xl font-medium p-4">Categories</li>
                <li className="text-xl font-medium bg-white rounded-full p-2 "><a>Child Care</a></li>
                <li className="text-xl font-medium bg-white rounded-full p-2"><a>Elderly Care</a></li>
                <li className="text-xl font-medium bg-white rounded-full p-2"><a>Pet Care</a></li>
                <li className="text-xl font-medium bg-white rounded-full p-2"><a>Special Child Care</a></li>
            </ul>
            </div>

            {/* Right Side - Categories */}  
            <div>

            </div>
            

        </div>
    </div>
  );
};

export default ServicesPage;

