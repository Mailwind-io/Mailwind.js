# Mailwind SDK
A simple Node.js SDK for interacting with the Mailwind API.

## Installation
Install the package using npm or yarn:

```bash
npm i @mailwind/mailwind.js
# or
yarn add @mailwind/mailwind.js
```

## Setup
```javascript
import { Mailwind } from '@mailwind/mailwind.js';
// or
import { Mailwind } = require('@mailwind/mailwind.js');

const mailwindInstance = new Mailwind('YOUR_API_KEY');
```

## Usage
Refer to this [documentation](https://documentation.janssens.pro/getting-started/send-email) for the required parameters for the email body

To send an email, use the send method :

```javascript
const emailBody = {
    sender: {
        email: 'example@mailwind.io',
        name: 'Mailwind',
    },
    destinations: [
        {
            email: 'Aa@gmail.com',
            type: 'to',
        },
    ],
    subject: 'Welcome',

    code: '<div>Hi 👋</div>',
    // or
    layoutIdentifier: 'LAYOUT_ID'
};

mailwindInstance.email.send(emailBody)
    .then(response => {
        console.log('Email sent successfully:', response);
    })
    .catch(error => {
        console.error('Error sending email:', error.message);
    });
```
    
## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Licensing
The code in this project is licensed under MIT license.
