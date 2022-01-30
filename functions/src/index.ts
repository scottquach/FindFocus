import * as functions from 'firebase-functions';
const axios = require('axios').default;

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
    const params = request.body;
    const apiKey = functions.config().openweather.key;
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        ...params,
        appid: apiKey
    });
    // response.send(res.data);
    response.send(request.body)
});
