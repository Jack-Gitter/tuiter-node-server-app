import express from 'express'; 
import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import tuitsController from './controllers/tuits/tuits-controller.js';

const app = express();
app.use(express.json())

HelloController(app);
UserController(app);
tuitsController(app);

app.listen(4000);