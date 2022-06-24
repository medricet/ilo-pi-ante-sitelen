import React, { useRef, useEffect } from 'react';

function DeselectDetector(props: any) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref: React.MutableRefObject<any>) {
    useEffect(() => {
      // called when a mousedown event is sent
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.callback();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // remove the listener during cleanup
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [ref])
  }

  return (
    <div ref={wrapperRef}>
      {props.children}
    </div>
  );
}

export default DeselectDetector;