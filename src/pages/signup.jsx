import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate("/welcome");
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
          <label type="text">Enter Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 "
          />

          <label type="text">Enter Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            required
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 "
          />

          <label type="text">Enter Mobile No::</label>
          <input
            type="number"
            placeholder="Enter Mobile No"
            required
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 "
          />


          <label type="text">Enter Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
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
              <button onClick={foregetpass} className="font-bold text-sm hover:underline text-blue-600">
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
