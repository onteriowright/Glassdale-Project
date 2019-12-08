let criminals = [];

export const UseCriminals = () => criminals;

export const GetCriminals = () => {
  return fetch("http://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(parsedCriminals => {
      // console.table(parsedCriminals);
      criminals = parsedCriminals.slice();
    });
};
