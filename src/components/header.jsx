function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h2 className="text-3xl font-bold italic text-white hover:bg-red-700">
        Ashwini Waghmare
      </h2>
      <nav>
        <a
          href="/home"
          onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white hover:text-gray-300 ml-6 text-2xl hover:underline"
        >
          Home
        </a>

        <a
          href="/signup"
          className="text-white hover:text-gray-300 ml-6 text-2xl hover:underline"
        >
          Signup
        </a>

        <a
          href="/login"
          className="text-white hover:text-gray-300 ml-6 text-2xl hover:underline"
        >
          Login
        </a>
      </nav>
    </header>
  );
}

export default Header;
