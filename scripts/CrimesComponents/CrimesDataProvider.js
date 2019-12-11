let crimeCollection = [];

console.log("I am the Crime Data Component, I provide the Crime Data");

export const UseCrimes = () => crimeCollection.sort().slice();

export const getCrimes = () => {
  return fetch("http://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(parsedCrimes => {
      // console.table(parsedCrimes);
      crimeCollection = parsedCrimes;
    });
};
