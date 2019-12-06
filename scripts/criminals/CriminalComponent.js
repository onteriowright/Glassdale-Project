const CriminalComponent = criminal => {
  console.log("I am the Criminal Component");

  return `
    <div class="criminal-template">
      <div class="criminals criminal-heading"><h2>${
        criminal.name
      }</h2></div><hr>
      <div class="criminals"><strong>Age:</strong> ${criminal.age}</div><hr>
      <div class="criminals"><strong>Conviction:</strong> ${
        criminal.conviction
      }</div><hr>
      <div class="criminals"><strong>Start:</strong> ${new Date(
        criminal.incarceration.start
      ).toLocaleString("en-us")}</div><hr>
      <div class="criminals"><strong>End:</strong> ${new Date(
        criminal.incarceration.end
      ).toDateString("en-us")}</div><hr>
      <div class="criminals"><strong>Arresting Officer:</strong> ${
        criminal.arrestingOfficer
      }</div>
    </div>
  `;
};

export default CriminalComponent;
