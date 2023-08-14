import axios, { AxiosInstance } from 'axios';
import { EmailBody } from '../types';

export class Email {
    private client: AxiosInstance;

    constructor(apiKey: string, baseURL: string) {
        this.client = axios.create({
            baseURL: baseURL,
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });
    }

    async send(body: EmailBody): Promise<object> {
        try {
            const response = await this.client.post<object>('/send', body);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to send email : ${error}`);
        }
    }
}
