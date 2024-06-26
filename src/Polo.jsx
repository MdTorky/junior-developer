import React from 'react'

const Polo = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
    <div className="flex">
      <div className="flex-none w-64 relative">
        <img src="https://via.placeholder.com/150" alt="Polo Shirt" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div className="mt-4 flex space-x-2">
          <img src="https://via.placeholder.com/50" alt="Color Option" className="w-12 h-12 object-cover rounded-lg border" />
          <img src="https://via.placeholder.com/50" alt="Color Option" className="w-12 h-12 object-cover rounded-lg border" />
          <img src="https://via.placeholder.com/50" alt="Color Option" className="w-12 h-12 object-cover rounded-lg border" />
        </div>
      </div>
      <div className="ml-6 flex-1">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Polo Shirt</h1>
          <span className="text-xl font-semibold text-gray-500 line-through">$89.95</span>
          <span className="text-xl font-semibold text-red-500">$71.56</span>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Choose a Color</h2>
          <div className="mt-2 flex space-x-2">
            <button className="w-8 h-8 bg-black rounded-full"></button>
            <button className="w-8 h-8 bg-white rounded-full border"></button>
            <button className="w-8 h-8 bg-gray-500 rounded-full"></button>
            <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
            <button className="w-8 h-8 bg-yellow-500 rounded-full"></button>
            <button className="w-8 h-8 bg-pink-500 rounded-full"></button>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Choose a Size</h2>
          <div className="mt-2 flex space-x-2">
            <button className="px-3 py-1 border rounded-lg">S</button>
            <button className="px-3 py-1 border rounded-lg">M</button>
            <button className="px-3 py-1 border rounded-lg">L</button>
            <button className="px-3 py-1 border rounded-lg">XL</button>
            <button className="px-3 py-1 border rounded-lg">XXL</button>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <input type="number" min="1" defaultValue="5" className="w-16 border rounded-lg p-2 mr-4" />
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Add to Cart</button>
        </div>
        <div className="mt-4 flex space-x-6">
          <div>
            <h3 className="text-lg font-semibold">Free Delivery</h3>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Return Delivery</h3>
            <p>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Product Description</h2>
      <p className="mt-2 text-gray-600">
        When it's cooler than the far side of the moon and spitting rain too, you're still going to look good. From water-repellent leather to a rugged outside, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and entranced tongue bring mountain boot toughness, while the star-studded toe design gives you luck for the trip.
      </p>
    </div>
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Benefits</h2>
      <ul className="mt-2 text-gray-600 list-disc list-inside">
        <li>Durable leather is easily cleanable so you can keep your look fresh.</li>
        <li>Water-repellent finish and internal membrane help keep your feet dry.</li>
        <li>Rope laces with pattern adds durability.</li>
        <li>Synthetic insulation helps keep you comfortable.</li>
        <li>Originally designed for performance hoops, the Air unit delivers lightweight cushioning.</li>
        <li>Rubber outsole uses a pattern for traction and durability.</li>
        <li>Durable leather is easily cleanable so you can keep your look fresh.</li>
      </ul>
    </div>
  </div>
);
}

export default Polo
