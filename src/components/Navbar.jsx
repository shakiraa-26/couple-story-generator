export default function Navbar() {
  return (
    <nav className="sticky bg-white shadow-sm">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">

        <h1 className="text-xl font-bold text-pink-600">
        heyitshakira.web
        </h1>

        <button className="sm:hidden text-3xl">
        ☰
        </button>

    </div>
    </nav>
  );
}