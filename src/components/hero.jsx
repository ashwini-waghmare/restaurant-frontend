import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero relative bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')] bg-cover bg-center bg-no-repeat min-h-screen mt-2">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="hero-content relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-10">
        <h1 className="text-4xl p-4 italic text-center font-bold text-white">
          Welcome to Our Restaurant
        </h1>

        <p className="text-2xl font-bold text-center text-white mt-4">
          Enjoy the best food in town!
        </p>

        <p className="text-2xl font-bold text-center text-white mt-4">
          Good food. Good mood. Great memories!
        </p>

        <p className="text-2xl font-bold text-center text-white mt-2">
          Your seat at the table is waiting for you!
        </p>

        <p className="text-2xl font-bold text-center text-white mt-2">
          We don't just cook food; we create edible art!
        </p>

        <p className="text-2xl font-bold text-center text-white mt-2">
          Craving something delicious? We've got you covered!
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-12"
        >
          Explore our menu
        </button>
      </div>

      {/* <div className="hero-image">
        <img
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Restaurant Interior"
        />
      </div> */}
    </section>
  );
}

export default Hero;
