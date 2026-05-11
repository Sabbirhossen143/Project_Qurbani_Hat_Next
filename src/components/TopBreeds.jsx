"use client";
import { useEffect, useState } from "react";

const TopBreeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {
        
        const uniqueBreeds = [
          ...new Set(data.map((animal) => animal.breed)),
        ];

        // convert into object format
        const formatted = uniqueBreeds.map((breed) => ({
          name: breed,
          type: "Cow",
        }));

        setBreeds(formatted);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800">
        Top Breeds
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {breeds.map((b, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md 
            hover:shadow-xl transition duration-300 hover:-translate-y-1 border"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {b.name}
            </h3>

            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {b.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBreeds;