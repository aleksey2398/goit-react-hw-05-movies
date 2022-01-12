import { useState, useEffect } from "react";

export const useFetch = (initialState, queryFunc) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const result = await queryFunc();
        setState(result);
      } catch (error) {}
    };
    fetchFunc();
  }, [queryFunc]);

  return [state];
};