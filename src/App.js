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

function App() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [tshirtImage, setTshirtImage] = useState(black); // Default image to show
  const [size, setSize] = useState(null);
  const [price, setPrice] = useState(71.56);
  const [discountPrice, setDiscountPrice] = useState(89.95);

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
        setTshirtImage(black); // Default to black if no matching color found
        break;
    }
  };


  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //     setPrice(prevPrice => (prevPrice - (prevPrice / quantity)).toFixed(2));
  //     setDiscountPrice(prevPrice => (prevPrice - (prevPrice / quantity)).toFixed(2));

  //   }
  // };

  // const incrementQuantity = () => {
  //   if (quantity < 15) {
  //     setQuantity(quantity + 1);
  //     setPrice(prevPrice => (prevPrice + (prevPrice / quantity)).toFixed(2));
  //     setDiscountPrice(prevPrice => (prevPrice + (prevPrice / quantity)).toFixed(2));
  //   }
  // };


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

  return (
    <div className="App">
      <div>
        {/* NavBar */}
        <nav className="flex justify-between items-center p-5 px-20 border-b-2 border-gray-100">
          <h1 className="italic text-3xl font-bold">Company</h1>
          <div>
            <button className="text-3xl bg-cart p-2 rounded-full">
              <Icon icon="heroicons:shopping-bag" className="text-icon" />
            </button>
          </div>
        </nav>

        {/* Main Shirt */}
        <div className="mt-10 p-10 px-60 grid grid-cols-2">
          <div>
            <div className="border-4 border-gray-100 p-20 w-full rounded mb-10 justify-center flex">
              <img src={tshirtImage} alt="" />
            </div>

            {/* Shirt Carousel */}
            <div className="flex w-full overflow-auto justify-between">
              <button><Icon icon="fe:arrow-left" /></button>
              <button onClick={() => handleColorChange('black')}><img src={black} alt="" className={`product-image ${selectedColor === 'black' ? 'border-2 border-black' : ''}`} /></button>
              <button onClick={() => handleColorChange('white')}><img src={white} alt="" className={`product-image ${selectedColor === 'white' ? 'border-2 border-black' : ''}`} /></button>
              <button onClick={() => handleColorChange('orange')}><img src={orange} alt="" className={`product-image ${selectedColor === 'orange' ? 'border-2 border-black' : ''}`} /></button>
              <button onClick={() => handleColorChange('cyan')}> <img src={cyan} alt="" className={`product-image ${selectedColor === 'cyan' ? 'border-2 border-black' : ''}`} /></button>
              <button onClick={() => handleColorChange('red')}><img src={red} alt="" className={`product-image ${selectedColor === 'red' ? 'border-2 border-black' : ''}`} /></button>
              <button onClick={() => handleColorChange('purple')}> <img src={purple} alt="" className={`product-image ${selectedColor === 'purple' ? 'border-2 border-black' : ''}`} /></button>
              <button><Icon icon="fe:arrow-right" /></button>
            </div>
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
                {/* <button className='font-bold text-xl hover:scale-125 ease-in-out duration-300' onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button> */}
                <button className='font-bold text-xl hover:scale-125 ease-in-out duration-300' onClick={decrementQuantity}>-</button>
                <h3 className='font-bold text-2xl'>{quantity}</h3>
                {/* <button className='font-bold text-xl hover:scale-125 ease-in-out duration-300' onClick={() => setQuantity(Math.min(15, quantity + 1))}>+</button> */}
                <button className='font-bold text-xl hover:scale-125 ease-in-out duration-300' onClick={incrementQuantity}>+</button>
              </div>

              <button className='flex bg-add-to-cart px-4 py-3 rounded-full w-60 justify-center gap-4 items-center hover:scale-105 duration-300 ease-linear'>
                <Icon icon="heroicons:shopping-bag" className="text-white w-5 h-5" />
                <p className='font-bold text-md text-white '>Add to Cart</p>
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
      </div>
    </div>
  );
}

export default App;
