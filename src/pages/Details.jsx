"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";

const Details = () => {

  const params = useParams();

  const id = params?.id;

  const [animal, setAnimal] = useState(null);

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {

    if (!id) return;

    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {

        const found = data.find(
          (a) => a.id === Number(id)
        );

        setAnimal(found);
      });

  }, [id]);

  if (!animal) {
    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    );
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

            <h2 className="text-lg md:text-2xl font-semibold">
              {animal.name}
            </h2>

            <p className="text-green-700 text-base md:text-xl mt-1 md:mt-2">
              ৳ {animal.price}
            </p>

            <p className="mt-2 text-sm md:text-sm text-gray-600 leading-relaxed">
              {animal.description}
            </p>

            <ul className="mt-3 text-xs md:text-sm space-y-1">
              <li>Breed: {animal.breed}</li>
              <li>Weight: {animal.weight} kg</li>
              <li>Age: {animal.age} years</li>
              <li>Location: {animal.location}</li>
            </ul>

          </div>

        </div>

        {/* Booking */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 md:mt-10 max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-4 md:p-6 grid gap-3 md:gap-4"
        >
<h3 className="text-base md:text-xl font-semibold text-green-700 text-center">
  Booking Form
</h3>
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            placeholder="Name"
            required
          />

          <input
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            placeholder="Email"
            required
          />

          <input
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            placeholder="Phone"
            required
          />

          <input
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            placeholder="Address"
            required
          />

          <button className="bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-lg text-sm md:text-base font-medium transition active:scale-95">
  Book Now
</button>

        </form>

      </div>

      {/* Popup */}
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