let convictions = [];

export const UseConvictions = () => convictions.sort().slice();

export const getConvictions = () => {
  return fetch("http://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(parsedConvictions => {
      // console.table(parsedConvictions);
      convictions = parsedConvictions;
    });
};
