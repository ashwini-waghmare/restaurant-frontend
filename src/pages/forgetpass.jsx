import { useNavigate } from "react-router-dom";

function Forget() {
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    alert("Password Reset Successfully!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Forget Password?
        </h2>

        <form onSubmit={handlesubmit}>
          <label>Enter your registered here:</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <div className="flex flex-col items-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl "
              type="submit"
            >
              Forget Pass
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forget;
