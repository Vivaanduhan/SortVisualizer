import React from "react";

export const useDebounce = (value, wait) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, wait);

    return () => {
      clearTimeout(handler);
    };
  }, [value, wait]);

  return debouncedValue;
};
