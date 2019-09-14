const item = (sequelize, DataTypes) => {
    const Item = sequelize.define('item', {
        text: DataTypes.STRING,
    });

    Item.associate = models => {
        Item.belongsTo(models.User);   
    };

    return Item;
};

export default item; 