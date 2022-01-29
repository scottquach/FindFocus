import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info('Hello logs!', { structuredData: true });
    response.send('Hello from Firebase!');
});

export const getWeather = functions.https.onRequest(async (request, response) => {
    // const res = await fetch('https://api.openweathermap.org/data/2.5/weather', {});
    response.send('Start script test');
});
