function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-3 py-8 px-6 text-center">
            <div className="">
                <h2 className="text-2xl text-bold mb-2 text-amber-400">Ashwini Waghmare</h2>
                <p className="text-sm text-gray-400 leading-6">
                   Delicious Food, Happy Moments.
                   <br />
                   Taste the Love in Every Bite!
                </p>
            </div>

            <div className="mt-3">
                <h3 className="text-2xl mb-2 text-bold text-amber-400">Quick Links</h3>
                <ul>
                    <li><a href="/" className="text-sm text-gray-400 hover:text-blue-500">Home</a></li>
                    <li><a href="/menu" className="text-white hover:text-blue-500">Menu</a></li>
                    <li><a href="/contact" className="text-white hover:text-blue-500">Contact</a></li>
                </ul>
            </div>

            <div className="mt-3">
                <h3 className="text-2xl mb-2 text-bold text-amber-400">Contact Us</h3>
                <p className="text-sm text-gray-400 leading-6">📍 Visit Our Restaurant</p>
                <p className="text-sm text-gray-400 leading-6">📞 Add Your Phone Number</p>
                <p className="text-sm text-gray-400 leading-6">✉️ Add Your Email Address</p>
            </div>
        </footer>
    );
}

export default Footer;