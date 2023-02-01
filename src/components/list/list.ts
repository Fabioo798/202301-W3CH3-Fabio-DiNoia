import { PetStructure } from "../../models/petStructure";
import { Component } from "../component/component";

export class List extends Component {
  constructor(public selector: string, public list: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    const items = this.list
      .map(
        (item) => `
        <li class="card">
          <span>${item.isAdopted}</span>
          <span title="${item.id}">${item.name}</span>
          <span>${item.owner}</span>
          <button>🗑️</button>
        </li>`
      )
      .join('\n');
    return `
    <section class="tasks"><ul>${items}</ul></section>
    `;
  }
}
