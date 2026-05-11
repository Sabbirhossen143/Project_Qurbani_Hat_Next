import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-green-700">404</h1>

      <p className="mt-2 text-gray-600">
        Page not found
      </p>

      <Link
        href="/"
        className="mt-4 text-sm text-green-700 hover:underline"
      >
        Go back home →
      </Link>
    </div>
  );
};

export default NotFound;