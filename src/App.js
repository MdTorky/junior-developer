import './App.css';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import black from "./img/black.png";
import white from "./img/white.png";
import red from "./img/red.png";
import cyan from "./img/cyan.png";
import orange from "./img/orange.png";
import purple from "./img/purple.png";
import ColorSelector from './components/colorSelector';
import Carousel from './components/Carousel'
import PhotoGallery from './components/photoGallery';
import { CartProvider, useCart } from './context/cartContext';
import Cart from './components/Cart';
function App() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [tshirtImage, setTshirtImage] = useState(black);
  const [size, setSize] = useState(null);
  const [price, setPrice] = useState(71.56);
  const [discountPrice, setDiscountPrice] = useState(89.95);
  const [activeTab, setActiveTab] = useState('description');
  const [showGallery, setShowGallery] = useState(false);
  const handleColorChange = (colorName) => {
    setSelectedColor(colorName);
    switch (colorName) {
      case 'black':
        setTshirtImage(black);
        break;
      case 'white':
        setTshirtImage(white);
        break;
      case 'red':
        setTshirtImage(red);
        break;
      case 'cyan':
        setTshirtImage(cyan);
        break;
      case 'orange':
        setTshirtImage(orange);
        break;
      case 'purple':
        setTshirtImage(purple);
        break;
      default:
        setTshirtImage(black);
        break;
    }
  };


  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice((price * (quantity - 1) / quantity).toFixed(2));
      setDiscountPrice((discountPrice * (quantity - 1) / quantity).toFixed(2));
    }
  };

  const incrementQuantity = () => {
    if (quantity < 15) {
      setQuantity(quantity + 1);
      setPrice((price * (quantity + 1) / quantity).toFixed(2));
      setDiscountPrice((discountPrice * (quantity + 1) / quantity).toFixed(2));
    }
  };

  const benefits = [
    "Durable leather is easily cleanable so you can keep your look fresh.",
    "Water-repellent finish and internal membrane help keep your feet dry.",
    "Toe piece with star pattern adds durability.",
    "Synthetic insulation helps keep you warm.",
    "Originally designed for performance hoops, the Air unit delivers lightweight cushioning.",
    "Plush tongue wraps over the ankle to help keep out the moisture and cold.",
    "Rubber outsole with aggressive traction pattern adds durable grip.",
    "Durable leather is easily cleanable so you can keep your look fresh."
  ];

  // const handleAddToCart = () => {
  //   // Implement your add to cart logic here
  //   console.log('Added to cart:', { selectedColor, size, quantity });
  // };

  const [isCartOpen, setCartOpen] = useState(false);
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: 'polo-shirt',
      name: 'Polo Shirt',
      image: tshirtImage,
      price: price / quantity,
      quantity,
      color: selectedColor,
      size,
    });
    setCartOpen(true);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (colorName) => {
    setSelectedColor(colorName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <div>
        {/* NavBar */}
        <nav className="flex justify-between items-center p-5 px-20 border-b-2 border-gray-100">
          <h1 className="italic text-3xl font-bold">Company</h1>
          <div>
            <button className="text-3xl bg-cart p-2 rounded-full">
              <Icon icon="heroicons:shopping-bag" className="text-icon" onClick={() => setCartOpen(true)} />
            </button>
          </div>
        </nav>

        {/* Main Shirt */}
        <div className="mt-10 p-10 px-60 grid grid-cols-2">
          <div>
            <div className="border-4 border-gray-100 p-20 w-full rounded mb-10 justify-center flex">
              <img src={tshirtImage} alt="" onClick={() => openModal(selectedColor)} />
            </div>

            {/* Shirt Carousel */}

            <Carousel
              selectedColor={selectedColor}
              onColorChange={handleColorChange}
            />
          </div>


          {/* Details Side */}
          <div className="p-10 col-span-1 md:w-text">
            <div className="flex pb-10 border-b-2 border-gray-200 justify-between">
              <div className="text-start">
                <h1 className='font-bold text-2xl'>Polo Shirt</h1>
                <p className='text-gray-300 text-sm'>Teixeira Design Studio</p>
              </div>
              <div className='flex gap-2 h-fit'>
                <button className='bg-heart py-1 px-3 rounded-lg flex items-center gap-1'>
                  <Icon icon="mdi:heart-outline" className='text-heart-text text-md ' />
                  <p className='text-heart-text font-semibold'>109</p>
                </button>
                <button className='bg-save-bg py-1 px-2 rounded-lg flex items-center gap-1'>
                  <Icon icon="material-symbols:bookmark-outline" className='text-save text-md ' />
                </button>
                <button className='bg-save-bg py-1 px-2 rounded-lg flex items-center gap-1'>
                  <Icon icon="material-symbols:share" className='text-save text-md ' />
                </button>
              </div>
            </div>


            {/* Price */}
            <div className="flex py-5 border-b-2 border-gray-200 gap-10 items-center w-full">
              <p className='font-bold text-3xl ml-2'>${price}</p>
              <p className='text-gray-300 line-through text-xl'>${discountPrice}</p>
            </div>


            {/* Colors */}
            <div className="py-5 flex flex-col justify-start items-start gap-3 border-b-2 border-gray-200 w-full">
              <p className='text-gray-300  text-md'>Choose a Color</p>
              <div className='flex gap-12'>
                <ColorSelector selectedColor={selectedColor} onColorChange={handleColorChange} />
              </div>
            </div>

            {/* Size */}
            <div className='py-5 flex flex-col justify-start items-start gap-3 border-b-2 border-gray-200 w-full'>
              <p className='text-gray-300  text-md'>Choose a Size</p>
              <div className='flex justify-evenly w-full'>
                <div className={`radio ${size === 'small' ? 'radio-selected' : ''}`}>
                  <input type="radio" name='size' id="small" onChange={(e) => setSize(e.target.id)} />
                  <label for="small" className='text-sm'>Small</label>
                </div>
                <div className={`radio ${size === 'medium' ? 'radio-selected' : ''}`}>
                  <input type="radio" name='size' id="medium" className='bg-black' onChange={(e) => setSize(e.target.id)} />
                  <label for="medium" className='text-sm'>Medium</label>
                </div>
                <div className={`radio ${size === 'large' ? 'radio-selected' : ''}`}>
                  <input type="radio" name='size' id="large" className='bg-black' onChange={(e) => setSize(e.target.id)} />
                  <label for="large" className='text-sm' >Large</label>
                </div>
                <div className={`radio ${size === 'extra large' ? 'radio-selected' : ''}`}>
                  <input type="radio" name='size' id="extra large" className='bg-black' onChange={(e) => setSize(e.target.id)} />
                  <label for="extra large" className='text-sm'>Extra Large</label>
                </div>
                <div className={`radio ${size === 'XXL' ? 'radio-selected' : ''}`}>
                  <input type="radio" name='size' id="XXL" className='bg-black' onChange={(e) => setSize(e.target.id)} />
                  <label for="XXL" className='text-sm'>XXL</label>
                </div>
              </div>
            </div>

            {/* Quantity and Add To Cart */}

            <div className='py-5 flex justify-start items-center gap-3  w-full'>
              <div className='flex bg-gray-200 px-4 py-2 rounded-full w-40 justify-between items-center'>
                <button className='font-bold text-xl hover:scale-125 ease-in-out duration-300' onClick={decrementQuantity}>-</button>
                <h3 className='font-bold text-2xl'>{quantity}</h3>
                <button className='font-bold text-xl hover:scale-125 ease-in-out duration-300' onClick={incrementQuantity}>+</button>
              </div>

              <button
                className={`flex  bg-${selectedColor} px-4 py-3 rounded-full w-60 justify-center gap-4 items-center hover:scale-105 duration-300 ease-linear ${selectedColor ? `bg-${selectedColor}` : 'bg-add-to-cart'}`}
                onClick={handleAddToCart}
              >
                <Icon icon="heroicons:shopping-bag" className={`text-white w-5 h-5text-white ${selectedColor == "white" ? "text-black" : ''}`} />
                <p className={`font-bold text-md text-white ${selectedColor == "white" ? "text-black" : ''}`} >Add to Cart</p>
              </button>
            </div>


            {/* Delivery */}
            <div className="border-2 p-3 border-gray-200 rounded-lg">
              <div className='flex items-start gap-3'>
                <Icon icon="mdi:truck-outline" className='text-delivery w-5 h-5 mt-1' />
                <div className="text-start items-start">
                  <p className='font-bold'>Free Delivery</p>
                  <button className='text-sm mb-3 text-gray-500 underline'>Enter your Postal code for Delivery Availability</button>
                </div>
              </div>
              <hr className='w-90% m-auto mb-2' />
              <div className='flex items-start gap-3'>
                <Icon icon="heroicons:shopping-bag" className='text-delivery w-5 h-5 mt-1' />
                <div className="text-start items-start">
                  <p className='font-bold'>Return Delivery</p>
                  <div className='flex gap-1'>
                    <p className='text-sm text-gray-500'>Free 30 days Delivery Return. </p>
                    <button className='text-sm text-gray-500 underline'>Details</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Product Description */}
        <div className="p-4 mx-60 mb-20">
          <div className="flex border-b border-gray-300 mb-4">
            <button
              className={`py-2 px-4 ${activeTab === 'description' ? 'active-tab' : 'text-gray-500'}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'showcase' ? 'active-tab' : 'text-gray-500'}`}
              onClick={() => setActiveTab('showcase')}
            >
              Showcase
            </button>
          </div>

          <div className="transition-all duration-500 ease-linear text-start">
            {activeTab === 'description' && (
              <div className='mt-10 w-90%'>
                <h2 className="text-xl font-bold mb-5">Product Description</h2>
                <p>
                  When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge
                </p>
                <h3 className="text-xl font-bold mt-10 mb-5">Benefits</h3>
                <div className="gap-3 flex flex-col">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <Icon icon="material-symbols:check" className=" flex items-center w-4 h-4 bg-blue-100 text-description rounded-full mr-2 " />
                      <p className="text-sm">{benefit}</p>

                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'showcase' && (
              <div>
                <iframe className=' m-auto mt-20 rounded-xl' width="1200"
                  height="515" src="https://www.youtube.com/embed/PdJq-dAQr-Y" title="T-Shirt Mockup Video (After Effects template)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <PhotoGallery
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedColor={selectedColor}
      />
    </div>
  );
}

export default App;
