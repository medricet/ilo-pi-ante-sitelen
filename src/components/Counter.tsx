import React from 'react';
import { useState } from 'react';

function Counter({ defaultValue, onChange }: CounterProps) {
  const [value, setValue] = useState<number>(defaultValue);

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let number_value = parseInt(e.target.value)

    setValue(number_value);

    onChange(number_value);
  }

  return (
    <div className="counter">
      <input
        type="number"
        value={value as any}
        step={5}
        onChange={onInputChange} 
        style={{
          width: "60px",
          height: "20px",
          textAlign: "center",
          border: "none",
          borderRadius: "5px"
        }}
      />
    </div>
  );
}

Counter.defaultProps = {
  defaultValue: 0,
  onChange: () => {}
}

interface CounterProps {
  defaultValue: number,
  onChange: (value: number) => any
}

export default Counter;