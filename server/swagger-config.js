module.exports = {
  swaggerDefinition: {
    info: {
      title: "Vegan Shop API",
      description: "Shop API Information",
      contact: {
        name: "Vladimir Bozhkov",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["./routes/*.js"],
};
