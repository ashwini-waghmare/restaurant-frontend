import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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

          <div className="items-center text-center">
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
