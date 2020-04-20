const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp();

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
  let skills = []
  const query = admin.database().ref("skills").orderByKey();
  query.once("value").then(snapshot => {
    snapshot.forEach(childSnapshot => {
      let skill = childSnapshot.val();
      skill.key = childSnapshot.key;
      skills.push(skill);
    });
    return res.send(skills);
  })
    .catch(error => {
      res.status(404).send('No data available.');
    });
});

exports.skills = functions.region('us-central1').https.onRequest(app);
