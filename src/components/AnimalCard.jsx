import Link from "next/link";

const AnimalCard = ({ animal }) => {
  return (
  <div className="bg-white aspect-[4/3] rounded-lg shadow-md p-3 border border-transparent
transition-all duration-300 ease-in-out 
hover:border-green-600 hover:shadow-lg cursor-pointer">
      <img src={animal.image} className="w-full h-48 sm:h-40 object-cover rounded transition duration-300" />

      <div className="mt-3 flex justify-between items-center">
  <h3 className="font-medium">{animal.name}</h3>

  <span className="text-xs font-medium bg-green-600 text-white px-2 py-1 rounded-full shadow-sm">
    {animal.category}
  </span>
</div>
      <p className="text-green-700 font-semibold">৳ {animal.price}</p>
      <p className="text-sm text-gray-500">{animal.location}</p>

      <Link
        href={`/details/${animal.id}`}
        className="mt-2 md:mt-3 block w-full text-center bg-green-600 text-white py-1.5 md:py-2 text-sm md:text-sm rounded-md 
hover:bg-green-700 transition duration-200 active:scale-95"
      >
         See Details
      </Link>
    </div>
  );
};

export default AnimalCard;