import AbstractPage from './AbstractPage.js';

export default class extends AbstractPage {
  constructor(params) {
    super(params);
    this.setTitle('About');
  }

  async getHtml() {
    return `
        <div id="about">
            <h1>About</h1>
            <p>About Me</p>
        </div>
        `;
  }
}
