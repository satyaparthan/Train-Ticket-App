module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define('Ticket', {
        pnrNumber: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        trainNumber: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        from: {
            type: Sequelize.STRING,
            allowNull: false
        },
        to: {
            type: Sequelize.STRING,
            allowNull: false
        },
        class: {
            type: Sequelize.ENUM({ values: ['SL', '3AC', '2AC', '1AC']}),
            allowNull: false
        }
    }, 
    {
        tableName: 'ticket',
        schema: 'public'
    });

    return Ticket;
};