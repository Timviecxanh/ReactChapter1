export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-lg font-semibold">Start Bootstrap</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            About
          </a>
          <a href="#" className="hover:text-blue-400">
            Services
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
