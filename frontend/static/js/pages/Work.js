import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(params) {
        super(params);
        this.setTitle("Work");
    }

    async getHtml() {
        return `
            <h1>My Work</h1>
            <p>You are viewing the projects!</p>
        `;
    }
}