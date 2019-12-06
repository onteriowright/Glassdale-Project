let officers = [];

export const UseOfficers = () => officers;

export const GetOfficers = () => {
  return fetch("http://criminals.glassdale.us/officers")
    .then(response => response.json())
    .then(parsedOfficers => {
      // console.table(parsedOfficers);
      officers = parsedOfficers.slice();
    });
};
