import { GetCriminals } from "./CriminalsComponents/CriminalDataProvider.js";
import CriminalListComponent from "./CriminalsComponents/CriminalListComponent.js";
import { GetConvictions } from "./ConvictionsComponents/ConvictionsDataProvider.js";
import ConvictionSelectListComponent from "./ConvictionsComponents/ConvictionsSelectListComponent.js";

import EnterNotesListComponent from "./NotesComponents/EnterNotesListComponent.js";
import ShowSavedNotesListComponent from "./NotesComponents/ShowSavedNotesListComponent.js";
import DialogComponent from "./DialogComponent/Dialog.js";

GetConvictions().then(ConvictionSelectListComponent);
GetCriminals()
  .then(CriminalListComponent)
  .then(EnterNotesListComponent)
  .then(ShowSavedNotesListComponent)
  .then(DialogComponent);
