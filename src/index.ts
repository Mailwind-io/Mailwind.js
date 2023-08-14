import { Email } from './email';

class Mailwind {
    private apiKey: string;
    private baseURL = 'https://api.mailwind.io/v1';
    public email: Email;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.email = new Email(this.apiKey, this.baseURL);
    }
}

export { Mailwind };
