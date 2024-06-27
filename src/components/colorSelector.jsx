import { useState } from 'react';
import { Icon } from '@iconify/react';

const colors = [
  { name: 'black', class: 'bg-black' },
  { name: 'white', class: 'bg-gradient-to-b from-white to-white-circle' },
  { name: 'orange', class: 'bg-orange' },
  { name: 'cyan', class: 'bg-cyan' },
  { name: 'red', class: 'bg-red' },
  { name: 'purple', class: 'bg-purple' },
];

function ColorSelector({ selectedColor, onColorChange }) {
  return (
    <div className="flex">
      {colors.map((colorItem) => (
        <button
          key={colorItem.name}
          className={`rounded-full ml-2 w-8 h-8 md:w-12 md:h-12 lg:w-10 lg:h-10 relative flex items-center justify-center  ${colorItem.class} ${selectedColor === colorItem.name ? 'selected' : ''}`}
          onClick={() => onColorChange(colorItem.name)}
        >
          {selectedColor === colorItem.name && (
            <div className="checkmark-base">
              <Icon icon="material-symbols:check" className=" w-2 h-2 md:w-4 md:h-4 text-white" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default ColorSelector;
