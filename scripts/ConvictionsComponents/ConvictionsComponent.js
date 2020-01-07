export const ConvictionsComponent = convictionsCollection => {
  return `
  <select class="dropdown" id="crimeSelect">
    <option value="0">Filter by crime...</option>
      ${convictionsCollection.map(
        conviction => `<option value="${conviction}">${conviction}</option>`
      )}
 </select>
  `;
};
