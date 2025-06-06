export default function ProductCard() {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4">
        <img src="/glass.png" alt="Tempered Glass" className="mx-auto h-28 object-contain" />
        <h3 className="font-semibold mt-2">Tempered Glass</h3>
        <p className="text-sm text-gray-500">Window or Stair Glass Detail</p>
        <button className="text-blue-500 text-xs mt-1">see detail</button>
      </div>
    );
  }