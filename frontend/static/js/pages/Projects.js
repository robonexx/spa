import AbstractPage from './AbstractPage.js';

export default class extends AbstractPage {
  constructor(params) {
    super(params);
    this.projectId = params.id;
    this.setTitle('Project');
  }

  async getHtml() {
    return `
            <h1>Project</h1>
            <p>Project page, checking my Project #${this.projectId}.</p>
        `;
  }
}
