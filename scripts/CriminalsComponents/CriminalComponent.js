const CriminalComponent = criminal => {
  return `
    <div class="criminal-template">
      <div class="criminals criminal-heading">
        <h2>${criminal.name}</h2></div>
        <div class="criminals"><strong>Age:</strong> ${criminal.age}</div>
        <div class="criminals"><strong>Conviction:</strong> ${
          criminal.conviction
        }</div>
        <div class="criminals"><strong>Start:</strong> ${new Date(
          criminal.incarceration.start
        ).toLocaleString("en-us")}</div>
        <div class="criminals"><strong>End:</strong> ${new Date(
          criminal.incarceration.end
        ).toLocaleString("en-us")}</div>
        <div class="criminals"><strong>Arresting Officer:</strong> ${
          criminal.arrestingOfficer
        }</div>
        <button id="associates--${
          criminal.id
        }" class="associates-btn">Show Associate & Alibis</button>
    </div>
  `;
};

export default CriminalComponent;
