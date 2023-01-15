const express = require('express');

const router = express.Router();

const port = 8000;

const app = express();

app.use(express.json());

const models = require('./models');
const train = models.train;

const addTrain = (req, res) => {
    const details = req.body;
    const newTrain = {
        ...details
    };

    train.create(newTrain).then(() => {
        res.status(200).send({ status: "SUCCESS", message: "Train added successfully."});
    }).catch(err => {
        res.status(500).send({ status: "ERROR", message: "Unable to add train."});
    })
}

const getTrains = (req, res) => {
    const condition = req.query;

    train.findAll({ where: condition}).then((trains) => {
        res.status(200).send({ status: "SUCCESS", trains: trains});
    }).catch(err => {
        res.status(500).send({ status: "ERROR", message: "Unable to get trains."});
    })
}

app.post('/api/train', addTrain);
app.get('/api/trains', getTrains);


models.sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => {
        console.log(`App Running on port ${8000}...`);
    });
});