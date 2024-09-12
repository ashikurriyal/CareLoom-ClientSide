import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  //  console.log(createUser)
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, password);

    const registerUser = { name, email, password };

    createUser(email, password)
      .then(() => {
        // console.log(res);
        axiosPublic.post("/user", registerUser)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Registration Successful!",
              text: "Welcome to Care Loom",
              icon: "success",
            });
            navigate("/");
          }
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-200 text-gray-800 container mx-auto border-2 border-primary-cyan">
      <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-primary-cyan p-2">
        Register
      </h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label
            htmlFor="name"
            className="block text-gray-600 text-lg font-medium"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="border-2 border-primary-cyan w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800 focus:border-primary-cyan"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="email"
            className="block text-gray-600 text-lg font-medium"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
            className="border-2 border-primary-cyan w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800 focus:border-primary-cyan"
          />
        </div>
        {/* <div className="space-y-1 text-sm">
          <label
            htmlFor="photoURL"
            className="block text-gray-600 text-lg font-medium"
          >
            Photo URL
          </label>
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="Your Photo URL"
            className="border-2 border-primary-cyan w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800 focus:border-primary-cyan"
          />
        </div> */}
        <div className="space-y-1 text-sm">
          <label
            htmlFor="password"
            className="block text-gray-600 text-lg font-medium"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-2 border-primary-cyan bg-gray-50 text-gray-800 focus:border-primary-cyan"
          />
        </div>
        <button className="block w-full p-3 text-center text-lg font-normal shadow-xl rounded-sm text-gray-50 bg-primary-cyan hover:font-semibold">
          Register
        </button>
      </form>
      <p className="text-sm text-center sm:px-6 text-gray-600 font-medium">
        Already have an account?
        <Link to="/login">
          <a
            rel="noopener noreferrer"
            className="hover:font-semibold text-primary-cyan underline"
          >
            {" "}
            Log In
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Register;