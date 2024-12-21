
import React, { useCallback } from 'react';
import Checkbox from '../Common/CheckBox/CheckBox';
import { availableColors } from '../../constants/colorsConst'

function ColorFilter({ selectedColors, setSelectedColors }) {
  const toggleColor = useCallback((color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  }, [setSelectedColors]);

  return (
    <div>
      <h4>По цвету</h4>
      {availableColors.map(color => (
        <Checkbox
          key={color}
          label={color}
          checked={selectedColors.includes(color)}
          onChange={() => toggleColor(color)}
        />
      ))}
    </div>
  );
}

export default ColorFilter;
