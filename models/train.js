module.exports = (sequelize, Sequelize) => {
    const Train = sequelize.define('Train', {
        trainNumber: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        trainName: {
            type: Sequelize.STRING,
            allowNull: true
        },
        source: {
            type: Sequelize.STRING,
            allowNull: false
        },
        destination: {
            type: Sequelize.STRING,
            allowNull: false
        },
        trainType: {
            type: Sequelize.ENUM({ values: ['Exp', 'Pass', 'SF']}),
            allowNull: false
        }
    }, 
    {
        tableName: 'train',
        schema: 'public'
    });

    return Train;
};