import AbstractPage from './AbstractPage.js';

export default class extends AbstractPage {
  constructor(params) {
    super(params);

    this.setTitle('Home');
  }
  async getHtml() {
    return `
        <div id="homepage">
        <h1>Home page</h1>
        </div>
        `;
  }
}
