import mockTrajectories from './trajectories';

module.exports = (app) => {
    app.get('/trajectories', (req, res) => res.send(200, mockTrajectories))
};