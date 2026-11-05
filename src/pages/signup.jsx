import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/signup`,
        {
          method: "POST",

          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/welcome");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("signup error", error);
      alert("Something went wrong. please try again later");
    }
  };

  const foregetpass = (e) => {
    e.preventDefault();
    navigate("/forgetpass");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          SignUp Here!
        </h2>

        <form onSubmit={handlesubmit}>
          <label type="text">Full Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 "
          />

          <label type="text">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 "
          />

          <label type="text">Password:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 "
          />


          {/* <label type="password">Password:</label>
          <input
            type="password"
            placeholder="Enter Pass"
            required
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          /> */}

          <div className="flex flex-col items center mt-5">
            <button
              type="submit"
              className="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-4xl text-xl"
            >
              Continue
            </button>

            <div type="button" className="items-center text-center mt-2">
              <button
                onClick={foregetpass}
                className="font-bold text-sm hover:underline text-blue-600"
              >
                Forget Pass
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
