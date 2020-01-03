import { GetCriminals } from "./CriminalsComponents/CriminalDataProvider.js";
import CriminalListComponent from "./CriminalsComponents/CriminalListComponent.js";
import { GetConvictions } from "./ConvictionsComponents/ConvictionsDataProvider.js";
import ConvictionSelectListComponent from "./ConvictionsComponents/ConvictionsSelectListComponent.js";

import EnterNotesListComponent from "./NotesComponents/EnterNotesListComponent.js";
import ShowSavedNotesListComponent from "./NotesComponents/ShowSavedNotesListComponent.js";
import DialogListComponent from "./DialogComponents/Dialog.js";
import { GetOfficers } from "./OfficersComponents/OfficerDataProvider.js";
import OfficerSelectComponent from "./OfficersComponents/OfficerSelectComponent.js";

GetConvictions().then(ConvictionSelectListComponent);
GetOfficers().then(OfficerSelectComponent);
GetCriminals()
  .then(CriminalListComponent)
  .then(EnterNotesListComponent)
  .then(ShowSavedNotesListComponent)
  .then(DialogListComponent);
