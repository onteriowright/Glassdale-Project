const CriminalComponent = criminal => {
  return `
    <div class="criminal-template">
      <div class="criminals criminal-heading">
        <h2>${criminal.name}</h2></div><hr>
        <div class="criminals"><strong>Age:</strong> ${criminal.age}</div><hr>
        <div class="criminals"><strong>Conviction:</strong> ${
          criminal.conviction
        }</div><hr>
        <div class="criminals"><strong>Start:</strong> ${new Date(
          criminal.incarceration.start
        ).toLocaleString("en-us")}</div><hr>
        <div class="criminals"><strong>End:</strong> ${new Date(
          criminal.incarceration.end
        ).toLocaleString("en-us")}</div><hr>
        <button id="associates--${
          criminal.id
        }" class="dialog-open-btn">Associate Alibis</button>
    </div>
  `;
};

export default CriminalComponent;
