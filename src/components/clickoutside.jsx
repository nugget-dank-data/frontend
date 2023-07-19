import { useEffect } from "react";

const useOutsideClickHandler = (ref, callback, exceptionRef) => {
  const handleClick = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      exceptionRef.current &&
      !exceptionRef.current.contains(event.target)
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback, exceptionRef]);
};

export default useOutsideClickHandler;
