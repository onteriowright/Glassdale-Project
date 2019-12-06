import { GetOfficers } from "./officers/OfficerDataProvider.js";
import OfficerSelectComponent from "./officers/OfficerSelectComponent.js";
import { GetCriminals } from "./criminals/CriminalDataProvider.js";
import CriminalListComponent from "./criminals/CriminalListComponent.js";
import { getConvictions } from "./convictions/ConvictionsDataProvider.js";
import ConvictionSelect from "./convictions/ConvictionsSelectList.js";

GetOfficers().then(OfficerSelectComponent);
GetCriminals().then(CriminalListComponent);
getConvictions().then(ConvictionSelect);
