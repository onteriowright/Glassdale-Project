import { GetCriminals } from "./CriminalsComponents/CriminalDataProvider.js";
import CriminalListComponent from "./CriminalsComponents/CriminalListComponent.js";
import { GetConvictions } from "./ConvictionsComponents/ConvictionsDataProvider.js";
import ConvictionSelectListComponent from "./ConvictionsComponents/ConvictionsSelectListComponent.js";

import EnterNotesListComponent from "./NotesComponents/EnterNotesListComponent.js";
import ShowSavedNotesListComponent from "./NotesComponents/ShowSavedNotesListComponent.js";
import AlibiDialogListComponent from "./DialogComponents/AlibiDialogListComponent.js";
import { GetOfficers } from "./OfficersComponents/OfficerDataProvider.js";
import OfficerSelectListComponent from "./OfficersComponents/OfficerSelectListComponent.js";
import { FilterBtnListComponent } from "./FilterComponents/FilterListComponent.js";

GetConvictions().then(ConvictionSelectListComponent);
GetOfficers().then(OfficerSelectListComponent);
GetCriminals()
  .then(CriminalListComponent)
  .then(EnterNotesListComponent)
  .then(FilterBtnListComponent)
  .then(ShowSavedNotesListComponent)
  .then(AlibiDialogListComponent);
