/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string, public title: string = "Copyright bello") {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    return `
    <footer class="footer">
      <address>${this.title}</address>
    </footer>`;
  }
}
