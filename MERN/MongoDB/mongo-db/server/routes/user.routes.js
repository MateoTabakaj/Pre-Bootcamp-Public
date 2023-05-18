const JokeController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllUsers);
    app.get('/api/jokes/:id', JokeController.updateExistingUser);
    app.post('/api/jokes', JokeController.createNewUser);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingUser);
}
