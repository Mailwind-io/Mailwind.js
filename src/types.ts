export type DestinationType = 'to' | 'cc' | 'bcc';

export interface EmailDestination {
    email: string;
    type: DestinationType;
}

export interface EmailSender {
    email: string;
    name?: string;
}

export interface EmailBody {
    sender: string;
    destinations: EmailDestination[];
    subject: string;
    variables: object;
    layoutIdentifier?: string;
    code?: string;
}
