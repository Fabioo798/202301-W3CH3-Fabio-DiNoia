import { PetStructure } from "./petStructure";

export class Pet implements PetStructure {

  public id: string;
  public isAdopted: boolean;
  static generateId() {
    const aNumbers = new Uint32Array(1);
    crypto.getRandomValues(aNumbers);
    return ('000000' + aNumbers[0]).slice(-6);
  }

  constructor(public name: string, public species: string, public owner: string) {
    this.id = Pet.generateId();
    this.isAdopted = false;
  }
}
