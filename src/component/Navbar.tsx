"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-blue-600">JobPortal</div>
      <ul className="flex gap-6 text-gray-700">
        <li>Home</li>
        <li>Jobs</li>
        <li>Companies</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Login / Register
      </button>
    </nav>
  );
}
