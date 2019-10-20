import Sequelize from 'sequelize';

export default {
  Query: {
    plants: async (parent, args, { models }) => {
      return await models.Plant.findAll();
    },
    plant: async (parent, { id }, { models }) => {
      return await models.Plant.findById(id);
    },
  },

  Mutation: {
    createPlant: async (
      parent,
      { name, type, description },
      { models }
    ) => {
      const plant = await models.Plant.create({
        name,
        type,
        description,
      });
      console.log(plant);
      return plant;
    },

    updatePlant: async (
      parent,
      { id, name, type, description },
    ) => {
      const plant = await models.Plant.findById(id);

      if (!plant) {
        throw new UserInputError(
          'No plant found with this id.',
        );
      }

      const updatedPlant = models.Plant.update(id, name, type, description);

      return { plant: updatedPlant };
    },

    deletePlant: async(
      parent, { id }, { models }) => {
        return await models.Plant.delete({
          where: { id },
        });
      },
  },
};
