//not found component

import NotFoundImage from "./NotFoundImage";

const NotFound = () => (
  <main className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
    <NotFoundImage />

    <h1 className="text-4xl font-bold text-red-600 mb-4 z-10 mt-4">
      404 - Not Found
    </h1>
    <p className="text-gray-600 mb-6 z-10">
      Sorry, we could not find what you’re looking for.
    </p>

    <a
      href="/"
      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition z-10"
    >
      Back To Main Page
    </a>
  </main>
);

export default NotFound;
