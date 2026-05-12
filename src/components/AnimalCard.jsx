import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";


const AnimalCard = ({ animal }) => {

const router = useRouter();
const auth = useAuth();
const user = auth?.user;


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

      <button
  onClick={() => {
    if (user) {
      router.push(`/details/${animal.id}`);
    } else {

      toast.info("Please login first to see details", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        style: {
  width: "fit-content",
  maxWidth: "90%",
  minWidth: "250px",
  fontSize: window.innerWidth < 768 ? "12px" : "14px",
  borderRadius: "12px",
  padding: "10px 14px",
  marginTop: window.innerWidth < 768 ? "95px" : "80px",
  textAlign: "center",
  whiteSpace: "nowrap",
},
      });

      router.push("/login");
    }
  }}
  className="mt-2 md:mt-3 block w-full text-center bg-green-600 text-white py-1.5 md:py-2 text-sm rounded-md 
hover:bg-green-700 transition duration-200 active:scale-95"
>
  See Details
</button>

    </div>
  );
};

export default AnimalCard;