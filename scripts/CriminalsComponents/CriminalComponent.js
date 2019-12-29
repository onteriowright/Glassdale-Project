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
        <button id="associates--${criminal.id}">Show Associate Alibis</button>
    </div>
  `;
};

export default CriminalComponent;

{
  /* <dialog>
<div class="associates">
  ${criminal.known_associates
    .map(
      associate =>
        `<div class="associates-card">
          <span class="dialog-titles">Associates Name:</span> ${associate.name}<br>
          <span class="dialog-titles">Alibi:</span> ${associate.alibi}
        </div><br>`
    )
    .join(" ")}
</div>
<button id="closeBtn">Close Dialog</button>
</dialog> */
}
