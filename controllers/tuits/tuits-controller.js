import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitId = req.params.tid; 
    const tuitChanges = req.body;
    tuits = tuits.map((tuit) => tuit._id === tuitId ? {...tuit, ...tuitChanges} : tuit);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitId = req.params.tid; 
    tuits = tuits.filter((tuit) => tuit._id !== tuitId);
    res.sendStatus(200);

}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
