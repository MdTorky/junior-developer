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
          className={`button-base ${colorItem.class} ${selectedColor === colorItem.name ? 'selected' : ''}`}
          onClick={() => onColorChange(colorItem.name)}
        >
          {selectedColor === colorItem.name && (
            <div className="checkmark-base">
              <Icon icon="material-symbols:check" className="checkmark-icon" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default ColorSelector;
