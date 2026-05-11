"use client";
import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import AnimalCard from "../components/AnimalCard";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [sort, setSort] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  
  const [openSort, setOpenSort] = useState(false);
  const sortRef = useRef();

  
  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => setAnimals(data))
      .catch((err) => console.error(err));
  }, []);

  
  useEffect(() => {
    const handler = (e) => {
      if (!sortRef.current?.contains(e.target)) {
        setOpenSort(false);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  
  const types = ["All", ...new Set(animals.map((a) => a.name))];

  
  const filteredAnimals = animals.filter((animal) =>
    selectedType === "All" ? true : animal.name === selectedType
  );

  
  const sortedAnimals = [...filteredAnimals].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <div className="py-8">

  <div className="max-w-6xl mx-auto px-4">

    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl py-12 md:py-16">

      <div className="text-center">

        <h1 className="font-bold text-green-900 
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Choose Your Qurbani Animal
        </h1>

        <p className="mt-3 text-gray-700 
        text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Find the best cow for your sacrifice with trusted sellers and fair prices.
        </p>

      </div>

    </div>

  </div>

</div>

      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {types.map((type, i) => (
            <button
              key={i}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition 
              ${
                selectedType === type
                  ? "bg-green-600 text-white shadow"
                  : "bg-gray-100 hover:bg-green-100 text-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* HEADER + SORT */}
        <div className="flex justify-between mb-6 flex-wrap gap-3">
          <h2 className="text-xl md:text-2xl font-bold">
            {selectedType === "All" ? "All Animals" : selectedType}
          </h2>

          {/* ✅ CUSTOM SORT DROPDOWN */}
          <div className="relative" ref={sortRef}>

            <button
              onClick={() => setOpenSort(!openSort)}
              className="px-4 py-2 rounded-lg border bg-white shadow-sm text-sm hover:border-green-400"
            >
              {sort === "low"
                ? "Low → High"
                : sort === "high"
                ? "High → Low"
                : "Sort by price"}
            </button>

            {openSort && (
  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2 z-50 text-sm">

    <div
      onClick={() => {
        setSort("");
        setOpenSort(false);
      }}
      className="block px-4 py-2 hover:bg-green-600 hover:text-white cursor-pointer"
    >
      Default
    </div>

    <div
      onClick={() => {
        setSort("low");
        setOpenSort(false);
      }}
      className="block px-4 py-2 hover:bg-green-600 hover:text-white cursor-pointer"
    >
      Low → High
    </div>

    <div
      onClick={() => {
        setSort("high");
        setOpenSort(false);
      }}
      className="block px-4 py-2 hover:bg-green-600 hover:text-white cursor-pointer"
    >
      High → Low
    </div>

  </div>
)}
          </div>

        </div>

        {/* 🔥 ANIMAL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sortedAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Animals;