const swaggerJSDoc = require("swagger-jsdoc");

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "WORK WAVE - API-V1",
      description:
        '<b>WORK WAVE</b> project <b>API-V1</b> documentation, by the backend team of the _No-Country "s10-09-m-python-react-linkedin"_ group.<br><br>Here are all the routes to consume from the Frontend, with the `GET - POST - PUT - PATCH - DELETE` methods.<br>There is also the information that is required and the endpoints can be tested to see the response and if they are working',
      version: "1.0.0",
    },
  },
  apis: ["./src/schema/**/*.yaml"],
});

module.exports = { swaggerSpec };
