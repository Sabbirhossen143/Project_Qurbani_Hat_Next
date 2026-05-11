import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">

      <div>

        <h1 className="text-[2.6rem] md:text-5xl font-bold leading-snug">
          Qurbani Animals, <br /> Made Simple
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-600">
          Browse healthy cows and goats for Qurbani with ease and trust.
        </p>

        <Link href="/animals">

          <button className="mt-6 bg-green-700 text-white px-3 md:px-5 py-1.5 md:py-2 text-sm md:text-base rounded-md hover:bg-green-800 transition active:scale-95">
            Browse Animals
          </button>

        </Link>

      </div>

      <img
        src="/images/hero.png"
        alt="cow"
        className="w-full transition-transform duration-500 ease-in-out hover:scale-105"
      />

    </div>
  );
};

export default Hero;