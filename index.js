//Load express module with `require` directive
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const config = require('./constants');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userCtrl = require('./userCtrl');


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "HelloWorld API",
            description: "Hello World Class",
            contact: {
                name: "santiagocb"
            },
            servers: ["http://localhost:8082"]
        }
    },
    apis: ["index.js"]
};

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /user/:id:
 *  get:
 *      description: Use to request all customers
 *      responses:
 *          '200':
 *              description: A successful response
 */
app.get('/user/:id', userCtrl.getUserById);
app.post('/user', userCtrl.createUser);
app.put('/user/:id', userCtrl.updateUserById);
app.delete('/user/:id', userCtrl.deleteUserById);

app.listen(config.APP_PORT, _ => {
    console.log(`User backend listening on port ${config.APP_PORT}!`)
});

mongoose
    .connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(_ => { console.log('MongoDB is connected'); })
    .catch(err => { console.log(err); });
