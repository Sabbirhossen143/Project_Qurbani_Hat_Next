"use client";
import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";

const Featured = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data.slice(0, 4)); 
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-xl md:text-3xl lg:text-2xl font-bold mb-6">
        Featured Animals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default Featured;