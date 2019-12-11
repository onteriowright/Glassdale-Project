import { GetCriminals } from "./CriminalsComponents/CriminalDataProvider.js";
import CriminalListComponent from "./CriminalsComponents/CriminalListComponent.js";
import { getConvictions } from "./ConvictionsComponents/ConvictionsDataProvider.js";
import ConvictionSelectListComponent from "./ConvictionsComponents/ConvictionsSelectListComponent.js";
import NotesFormComponent from "./NotesComponents/NotesFormComponent.js";
import NotesListComponent from "./NotesComponents/NotesListComponent.js";

getConvictions().then(ConvictionSelectListComponent);
GetCriminals().then(CriminalListComponent);
NotesListComponent();
NotesFormComponent();
