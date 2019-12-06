const CrimesComponent = crime => {
  console.log(
    "I am the Crimes Component. Im what the Data should look like once on the DOM"
  );

  return `
    <div class="crime-template">
      <div class="crime-info">${crime}</div>
    </div>
  `;
};

export default CrimesComponent;
