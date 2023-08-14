"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mailwind = void 0;
const email_1 = require("./email");
class Mailwind {
    constructor(apiKey) {
        this.baseURL = 'https://api.mailwind.io/v1';
        this.apiKey = apiKey;
        this.email = new email_1.Email(this.apiKey, this.baseURL);
    }
}
exports.Mailwind = Mailwind;
