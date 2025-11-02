export default function Item() {
  const items = [1, 2, 3, 4];
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item} className="border rounded shadow-sm overflow-hidden">
            <div className="bg-gray-300 h-40 flex items-center justify-center text-gray-500 text-sm">
              500 x 325
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">Card title</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm">
                Find Out More!
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
