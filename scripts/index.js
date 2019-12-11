import { GetCriminals } from "./CriminalsComponents/CriminalDataProvider.js";
import CriminalListComponent from "./CriminalsComponents/CriminalListComponent.js";
import { getConvictions } from "./ConvictionsComponents/ConvictionsDataProvider.js";
import ConvictionSelectListComponent from "./ConvictionsComponents/ConvictionsSelectListComponent.js";
import EnterNotesListComponent from "./NotesComponents/EnterNotesListComponent.js";
import ShowSavedNotesListComponent from "./NotesComponents/ShowSavedNotesListComponent.js";

getConvictions().then(ConvictionSelectListComponent);
GetCriminals()
  .then(EnterNotesListComponent)
  .then(ShowSavedNotesListComponent)
  .then(CriminalListComponent);
