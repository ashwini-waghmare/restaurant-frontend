import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const  [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",

          headers: {
            "content-type": "application/json",
          },
          
          body: JSON.stringify({
            username,
            password,
          })
        }
      );

      const data = await response.json();

      if (response.ok){
        alert(data.message);
        navigate("/welcome");
      }else{
        alert(data.message);
      }
    }catch (error) {
      console.error("login error", error);
      alert("Something went wrong. Please try again later.");
    }
    navigate("/welcome");
  };

  const foregetpass = (e) => {
    e.preventDefault();
    navigate("/forgetpass");
  };
  return (
    <div className=" min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Login Form!
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label text="Username">Username:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label text="Password">Password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>

          <div className="items-center text-center mt-3.5">
            <button
              onClick={foregetpass}
              className="font-bold text-l hover:underline text-blue-600"
            >
              Forget Pass
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
