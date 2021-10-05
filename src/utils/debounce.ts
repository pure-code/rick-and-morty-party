export const debounce = (cb: any, timeout = 300) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...args), timeout);
  };
};
