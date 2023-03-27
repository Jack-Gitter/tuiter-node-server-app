import express from 'express'; 
const app = express();
app.get('/hello', (req, res) => {res.send('what')});
app.get('/', (req, res) => {res.send('Welcome to Full Stack Dev!')});
app.listen(4000);