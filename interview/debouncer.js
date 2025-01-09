const useDebouncer = (func = () => {}, delay = 1000) => {
  let timeOut;
  return () => {
    if (timeOut) {
      clearInterval(timeOut);
    }
    timeOut = setTimeout(() => {
      func();
    }, delay);
  };
};

function test() {
  console.log("test");
}

const debouncer = useDebouncer(test);

debouncer();
debouncer();
debouncer();
debouncer();
