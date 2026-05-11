const QurbaniTips = () => {
  const tips = [
  "Choose a healthy animal with clear eyes and no visible illness",
  "Ensure proper age (at least 2 years for cows)",
  "Check weight and overall body condition",
  "Avoid animals with injuries or physical defects",
  "Make sure the animal is active and not weak",
  "Verify the animal is eating and drinking properly",
  "Buy from a trusted seller or verified farm",
  "Follow Islamic rules and hygiene during Qurbani"
];

  return (
    <div id="qurbanitips" className="max-w-6xl mx-auto px-4 py-14 bg-gray-50 rounded-xl">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800">
        Qurbani Tips
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm 
            hover:shadow-lg transition duration-300 
            flex items-start gap-3"
          >
            <span className="text-green-600 text-xl">✔</span>

            <p className="text-sm text-gray-700 leading-relaxed">
              {tip}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QurbaniTips;