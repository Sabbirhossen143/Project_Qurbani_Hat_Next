"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [showImage, setShowImage] = useState(false); 

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id === Number(id));
        setAnimal(found);
      });
  }, [id]);

  if (!animal) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Booking Successful!");
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Image */}
          <img
            src={animal.image}
            className="rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setShowImage(true)}
          />

          {/* Info */}
          <div>
            <h2 className="text-2xl font-semibold">{animal.name}</h2>
            <p className="text-green-700 text-xl mt-2">৳ {animal.price}</p>

            <p className="mt-2 text-sm text-gray-600">
              {animal.description}
            </p>

            <ul className="mt-4 text-sm space-y-1">
              <li>Breed: {animal.breed}</li>
              <li>Weight: {animal.weight} kg</li>
              <li>Age: {animal.age} years</li>
              <li>Location: {animal.location}</li>
            </ul>
          </div>
        </div>

        {/* Booking */}
        <form onSubmit={handleSubmit} className="mt-10 max-w-md grid gap-4">
          <input className="border p-2" placeholder="Name" required />
          <input className="border p-2" placeholder="Email" required />
          <input className="border p-2" placeholder="Phone" required />
          <input className="border p-2" placeholder="Address" required />

          <button className="bg-green-700 text-white py-2">
            Book Now
          </button>
        </form>
      </div>

      {/*  IMAGE POPUP */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowImage(false)}
        >
          <img
            src={animal.image}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}

      <ToastContainer />
      <Footer />
    </>
  );
};

export default Details;