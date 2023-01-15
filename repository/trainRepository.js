const models = require('../models');
const train = models.train;

const createTrain = async (train) => {
    return await train.create(train);
}

module.exports = { createTrain };