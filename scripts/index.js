import { GetCriminals } from "./CriminalsComponents/CriminalDataProvider.js";
import CriminalListComponent from "./CriminalsComponents/CriminalListComponent.js";
import { GetConvictions } from "./ConvictionsComponents/ConvictionsDataProvider.js";
import ConvictionSelectListComponent from "./ConvictionsComponents/ConvictionsSelectListComponent.js";
import EnterNotesListComponent from "./NotesComponents/EnterNotesListComponent.js";
import ShowSavedNotesListComponent from "./NotesComponents/ShowSavedNotesListComponent.js";

GetConvictions().then(ConvictionSelectListComponent);
GetCriminals()
  .then(EnterNotesListComponent)
  .then(ShowSavedNotesListComponent)
  .then(CriminalListComponent);
