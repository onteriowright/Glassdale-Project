let officers = [];

export const UseOfficers = () => officers.sort().slice();

export const GetOfficers = () => {
  return fetch("http://criminals.glassdale.us/officers")
    .then(response => response.json())
    .then(parsedOfficers => {
      // console.table(parsedOfficers);
      officers = parsedOfficers;
    });
};
