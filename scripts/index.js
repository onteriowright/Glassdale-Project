import { GetCriminals } from "./criminals/CriminalDataProvider.js";
import CriminalListComponent from "./criminals/CriminalListComponent.js";
import { getConvictions } from "./convictions/ConvictionsDataProvider.js";
import ConvictionSelectListComponent from "./convictions/ConvictionsSelectListComponent.js";

getConvictions().then(ConvictionSelectListComponent);
GetCriminals().then(CriminalListComponent);
