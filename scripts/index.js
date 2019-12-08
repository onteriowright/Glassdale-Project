import { GetCriminals } from "./criminals/CriminalDataProvider.js";
import CriminalListComponent from "./criminals/CriminalListComponent.js";
import { getConvictions } from "./convictions/ConvictionsDataProvider.js";
import ConvictionSelectComponent from "./convictions/ConvictionsSelectListComponent.js";

getConvictions().then(ConvictionSelectComponent);
GetCriminals().then(CriminalListComponent);
