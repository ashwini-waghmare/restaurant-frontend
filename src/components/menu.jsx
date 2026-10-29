function Menu() {
  return (
    // <div className="menu bg-[url('/bgmenu.png')] w-full h-full bg-repeat bg-center mt-3">
    <div className="menu">
      <h2 className="text-6xl font-bold text-center italic text-black hover:text-blue-500">
        Our Menu
      </h2>

      <div className="menu-items grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-6">
        <div className="text-2xl font-bold text-center text-black cursor-pointer hover:text-rose-500 mx-auto mt-4">
          <h2 className="text-4xl italic py-2">Indian Dishes</h2>
          <img
            src="/indian.png"
            alt="Indian Dishes"
            className="w-150 h-75 object-cover rounded-2xl mx-auto px-2 py-2 hover:scale-105 transition-all duration-300"
          />
          <p className="text-black">
            Explore a variety of authentic Indian dishes
          </p>
          <span className="text-black">₹199</span>
        </div>

        <div className="text-2xl font-bold text-center text-black cursor-pointer hover:text-rose-500 mx-auto mt-8">
          <h2 className="text-4xl italic py-2">South Indian Dishes</h2>
          <img
            src="/south.png"
            alt="South Indian Dishes"
            className="w-150 h-75 object-cover rounded-2xl mx-auto px-2 py-2 hover:scale-105 transition-all duration-300"
          />
          <p className="text-black">
            Explore a variety of authentic South Indian dishes
          </p>
          <span className="text-black">₹199</span>
        </div>

        <div className="text-2xl font-bold text-center text-black cursor-pointer hover:text-rose-500 mx-auto mt-8">
          <h2 className="text-4xl italic py-2">Chinese Dishes</h2>
          <img
            src="/chineese.png"
            alt="Chinese Dishes"
            className="w-150 h-75 object-cover rounded-2xl mx-auto px-2 py-2 hover:scale-105 transition-all duration-300"
          />
          <p className="text-black">
            Explore a variety of authentic Chinese dishes
          </p>
          <span className="text-black">₹199</span>
        </div>

        <div className="text-2xl font-bold text-center text-black cursor-pointer hover:text-rose-500 mx-auto mt-8">
          <h2 className="text-4xl italic py-2">Italian Dishes</h2>
          <img
            src="/italian.png"
            alt="Italian Dishes"
            className="w-150 h-75 object-cover rounded-2xl mx-auto px-2 py-2 hover:scale-105 transition-all duration-300"
          />
          <p className="text-black">
            Explore a variety of authentic Italian dishes
          </p>
          <span className="text-black">₹499</span>
        </div>

        <div className="text-2xl font-bold text-center text-black cursor-pointer hover:text-rose-500 mx-auto mt-5">
          <h2 className="text-4xl italic py-2">Maharashtrian Dishes</h2>
          <img
            src="/maharashtrian.png"
            alt="Maharashtrian Dishes"
            className="w-150 h-75 object-cover rounded-2xl mx-auto px-2 py-2 hover:scale-105 transition-all duration-300"
          />
          <p className="text-black">
            Explore a variety of authentic Maharashtrian dishes
          </p>
          <span className="text-black">₹499</span>
        </div>

        <div className="text-2xl font-bold text-center text-black cursor-pointer hover:text-rose-500 mx-auto mt-8">
          <h2 className="text-4xl italic py-2">Fast Food</h2>
          <img
            src="/fastfood.png"
            alt="Fast Food"
            className="w-150 h-75 object-cover rounded-2xl mx-auto px-2 py-2 hover:scale-105 transition-all duration-300"
          />
          <p className="text-black">
            Explore a variety of authentic Fast Food.
          </p>
          <span className="text-black">₹499</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
