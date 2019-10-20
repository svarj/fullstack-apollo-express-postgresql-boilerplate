const plant = (sequelize, DataTypes) => {
    const Plant = sequelize.define('plant', {
      name: {
          type: DataTypes.STRING,
          validate: { notEmpty: false },
      },
      type: {
          type: DataTypes.STRING,
          validate: { notEmpty: false },
      },
      description: {
          type: DataTypes.STRING,
          validate: { notEmpty: false },
      },
    });
  
    // Plant.associate = models => {
    //   Message.belongsTo(models.User);
    // };
  
    return Plant;
  };
  
  export default plant;