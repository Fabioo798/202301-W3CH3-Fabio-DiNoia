import { Pet } from "../models/pet";
import { PetStructure } from "../models/petStructure";


export const PET: PetStructure[] = [
  { id: '1', name: 'Fido', species: 'Ovejero', owner: 'Fabio', isAdopted: false },
  {id: '2', name: 'Che', species: 'Pitbull', owner: 'Lean', isAdopted: false},
  new Pet('Mya', 'Labrador', 'Carlos'),
  new Pet('Aaron', 'chiwuawua', 'Jimena')
];
