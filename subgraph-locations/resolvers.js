const resolvers = {
  Query: {
    locations: (_, __, { dataSources }) => {
      return dataSources.locationsAPI.getAllLocations();
    },
    location: (_, { id }, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
  Location: {
    /* 
    Destructure the first argument, which is the entity representation object, and pull out the id field from it 
    Similarly, destructure the second argument (context) to access the dataSources property.
    */
    __resolveReference: ({id}, {dataSources}) => {
      return dataSources.locationsAPI.getLocation(id)
    }
  }
};

module.exports = resolvers;
