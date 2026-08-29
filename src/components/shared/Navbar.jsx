export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sunbeam Sepia</h1>
        <div className="space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/capture" className="hover:underline">
            Capture
          </a>
          <a href="/edit" className="hover:underline">
            Edit
          </a>
        </div>
      </div>
    </nav>
  );
}