import './App.css';
import { useState, useEffect } from 'react';
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
import { useCart } from './context/cartContext';
import Cart from './components/Cart';
function App() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [tshirtImage, setTshirtImage] = useState(black);
  const [size, setSize] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

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

  const getPriceBySize = (size) => {
    switch (size) {
      case 'small':
        return 69.99;
      case 'medium':
        return 71.56;
      case 'large':
        return 73.23;
      case 'extra large':
        return 75.21
      case 'XXL':
        return 77.41;
      default:
        return 0;
    }
  };

  const [price, setPrice] = useState(getPriceBySize("medium"));
  const [discountPrice, setDiscountPrice] = useState(price * 1.256987143655674);




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

  const handleSizeChange = (size) => {
    setSize(size);
    setPrice(getPriceBySize(size));
    setDiscountPrice((getPriceBySize(size) * 1.256987143655674).toFixed(2))
    setQuantity(1)
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


  const [isCartOpen, setCartOpen] = useState(false);
  const { addToCart, totalItems } = useCart();
  const handleAddToCart = () => {

    const price = getPriceBySize(size);
    if (!price || !quantity || !size || !selectedColor) {

      alert("Please Select a Product")
    } else {
      addToCart({
        id: 'polo-shirt',
        name: 'Polo Shirt',
        image: tshirtImage,
        price: price,
        quantity,
        color: selectedColor,
        size,
      });
      setCartOpen(true);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (colorName) => {
    setSelectedColor(colorName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    handleSizeChange('medium');
  }, []);

  return (
    <div className="App">
      <div>
        {/* NavBar */}
        <nav className="flex justify-evenly md:justify-between items-center p-5 md:px-20 border-b-2 border-gray-100">
          <h1 className="italic text-3xl font-bold">Company</h1>
          <div>
            <button className="text-3xl bg-cart p-2 relative rounded-full w-10 h-10 flex items-center justify-center">
              <Icon icon="heroicons:shopping-bag" className="text-icon text-md" onClick={() => setCartOpen(true)} />
              {totalItems > 0 && <span className="cart-count absolute top-0 right-0 bg-add-to-cart text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{totalItems}</span>}
            </button>
          </div>
        </nav>

        {/* Main Shirt */}
        <div className="mt-10 p-10 lg:px-60 lg:grid lg:grid-cols-2">
          <div>
            <div className="border-4 border-gray-50 md:w-full rounded mb-10 justify-center flex">
              <img src={tshirtImage} alt="" onClick={() => openModal(selectedColor)} />
            </div>

            {/* Shirt Carousel */}
            <Carousel
              selectedColor={selectedColor}
              onColorChange={handleColorChange}
            />
          </div>


          {/* Details Side */}
          <div className="p-5 lg:p-10 col-span-1 lg:w-text">
            <div className="md:flex pb-5 lg:pb-10 border-b-2 border-gray-200 justify-between">
              <div className="text-start">
                <h1 className='font-bold md:text-2xl'>Polo Shirt</h1>
                <p className='text-gray-300 text-xs whitespace-nowrap md:text-sm'>Teixeira Design Studio</p>
              </div>
              <div className='flex justify-end mt-4 lg:mt-0 gap-4 lg:gap-2 h-fit'>
                <button className='bg-heart py-1 px-3 rounded-lg flex items-center gap-1'>
                  <Icon icon="mdi:heart-outline" className='text-heart-text text-xs md:text-md ' />
                  <p className='text-heart-text text-sm md:text-md font-semibold'>109</p>
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
              <p className='font-bold text-2xl md:text-3xl ml-2'>${price}</p>
              <p className='text-gray-300 line-through text-lg md:text-xl'>${discountPrice}</p>
            </div>


            {/* Colors */}
            <div className="py-5 flex flex-col justify-start items-start gap-3 border-b-2 border-gray-200 w-full">
              <p className='text-gray-300 text-sm md:text-md'>Choose a Color</p>
              <div className='flex gap-12 m-auto md:m-0'>
                <ColorSelector selectedColor={selectedColor} onColorChange={handleColorChange} />
              </div>
            </div>

            {/* Size */}
            <div className='py-5 flex flex-col justify-start items-start gap-3 border-b-2 border-gray-200 w-full'>
              <p className='text-gray-300 text-sm md:text-md'>Choose a Size</p>
              <div className='flex justify-evenly w-full flex-wrap gap-2 lg:gap-0'>
                <div className={`radio ${size === 'small' ? 'radio-selected' : ''}`}>
                  <input type="radio" name='size' id="small" onChange={(e) => handleSizeChange(e.target.id)} />
                  <label htmlFor="small" className='text-sm md:text-lg lg:text-sm'>Small</label>
                </div>
                <div className={`radio ${size === 'medium' ? 'radio-selected' : ''}`}>
                  <input type="radio" name='size' id="medium" checked={size === 'medium'} onChange={(e) => handleSizeChange(e.target.id)} />
                  <label htmlFor="medium" className='text-sm md:text-lg lg:text-sm'>Medium</label>
                </div>
                <div className={`radio ${size === 'large' ? 'radio-selected' : ''}`}>
                  <input type="radio" name='size' id="large" onChange={(e) => handleSizeChange(e.target.id)} />
                  <label htmlFor="large" className='text-sm md:text-lg lg:text-sm'>Large</label>
                </div>
                <div className={`radio ${size === 'extra large' ? 'radio-selected' : ''}`}>
                  <input type="radio" name='size' id="extra large" onChange={(e) => handleSizeChange(e.target.id)} />
                  <label htmlFor="extra large" className='text-sm md:text-lg lg:text-sm'>Extra Large</label>
                </div>
                <div className={`radio ${size === 'XXL' ? 'radio-selected' : ''}`}>
                  <input type="radio" name='size' id="XXL" onChange={(e) => handleSizeChange(e.target.id)} />
                  <label htmlFor="XXL" className='text-sm md:text-lg lg:text-sm'>XXL</label>
                </div>
              </div>
            </div>

            {/* Quantity and Add To Cart */}

            <div className='py-5 flex justify-start items-center gap-3 w-full'>
              <div className='flex bg-gray-200 px-4 py-2 rounded-full w-40 justify-between items-center'>
                <button className='font-bold text-sm md:text-xl hover:scale-125 ease-in-out duration-300' onClick={decrementQuantity}>-</button>
                <h3 className='font-bold text-md md:text-xl'>{quantity}</h3>
                <button className='font-bold text-sm md:text-xl hover:scale-125 ease-in-out duration-300' onClick={incrementQuantity}>+</button>
              </div>

              <button
                className={`flex  bg-${selectedColor} px-2 md:px-4 py-2 md:py-3 rounded-full w-60 justify-center gap-4 items-center hover:scale-105 duration-300 ease-linear ${selectedColor ? `bg-${selectedColor}` : 'bg-add-to-cart'}`}
                onClick={handleAddToCart}
              >
                <Icon icon="heroicons:shopping-bag" className={`text-white w-4 h-4 md:w-5 md:h-5 ${selectedColor === "white" && "text-blue-900"}`} />
                <p className={`font-bold text-sm md:text-md text-white ${selectedColor === "white" && "text-blue-900"}`} >Add to Cart</p>
              </button>
            </div>


            {/* Delivery */}
            <div className="border-2 p-3 border-gray-200 rounded-xl">
              <div className='flex items-start gap-3'>
                <Icon icon="mdi:truck-outline" className='text-delivery w-5 h-5 mt-1' />
                <div className="text-start items-start">
                  <p className='font-bold'>Free Delivery</p>
                  <button className='text-start text-xs md:text-sm mb-3 text-gray-500 underline'>Enter your Postal code for Delivery Availability</button>
                </div>
              </div>
              <hr className='w-90% m-auto mb-2' />
              <div className='flex items-start gap-3'>
                <Icon icon="heroicons:shopping-bag" className='text-delivery w-5 h-5 mt-1' />
                <div className="text-start items-start">
                  <p className='font-bold'>Return Delivery</p>
                  <div className='flex gap-1'>
                    <p className='text-start text-xs md:text-sm text-gray-500'>Free 30 days Delivery Return. </p>
                    <button className='text-start text-xs md:text-sm text-gray-500 underline'>Details</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Product Description */}
        <div className="px-5 md:p-4 md:px-12 lg:p-4 lg:mx-60 mb-20">
          <div className="flex border-b border-gray-300 mb-4 justify-center md:justify-start">
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

          <div className="transition-all duration-500 ease-linear ">
            {activeTab === 'description' && (
              <div className='mt-10 lg:w-90% text-justify'>
                <h2 className="text-xl font-bold mb-5">Product Description</h2>
                <p>
                  When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge
                </p>
                <h3 className="text-xl font-bold mt-10 mb-5">Benefits</h3>
                <div className="gap-3 flex flex-col">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-justify w-full ">
                      <div className="px-2 rounded-full w-4 h-4 mr-2 flex items-center justify-center bg-blue-100">
                        <Icon icon="ph:check-bold" className="text-description absolute text-xs " />
                      </div>

                      <p className="text-sm">{benefit}</p>

                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'showcase' && (
              <div className="m-auto w-90% h-80 md:h-515 mt-20 rounded-xl overflow-hidden bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/PdJq-dAQr-Y?autoplay=1"
                  title="T-Shirt Mockup Video (After Effects template)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
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
