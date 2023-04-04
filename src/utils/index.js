const log = (string) => {
  console.log("log method", string);
};

const getNumber = (number) => {
  return number || Math.random();
};

export { log, getNumber };
