let crimeCollection = [];

export const UseCrimes = () => crimeCollection.sort().slice();

export const getCrimes = () => {
  return fetch("http://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(parsedCrimes => {
      crimeCollection = parsedCrimes.slice();
    });
};
