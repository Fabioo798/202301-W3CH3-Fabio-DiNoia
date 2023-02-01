import { PetStructure } from "../../../models/petStructure";
import { Component } from "../component";



export class Pets extends Component {
  constructor(public selector: string, public list: PetStructure) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {


        return "";

  }
}
