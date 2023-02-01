type HasId = {
  id: string;
};

export type ProtoPetStructure = {
  name: string;
  species: string;
  isAdopted: boolean;
  owner: string;
};

export type PetStructure = HasId & ProtoPetStructure;
