const About = () => {
  return (
    <div id="about" className="max-w-6xl mx-auto px-4 py-16">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
        About Us
      </h2>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div>
          <img
            src="/images/cow-1.jpg"
            alt="about"
            className="w-full h-[300px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Welcome to QurbaniHat
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed">
            QurbaniHat is a modern platform where you can easily find and
            purchase healthy Qurbani animals from trusted sellers. We ensure
            quality, transparency, and convenience for every buyer.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mission is to make the Qurbani process simple, safe, and
            accessible for everyone by connecting buyers with reliable farms.
          </p>

          {/* Features */}
          <div className="space-y-2 text-sm text-gray-700">
            <p>✔ Verified sellers</p>
            <p>✔ Healthy animals</p>
            <p>✔ Easy booking process</p>
            <p>✔ Secure experience</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;