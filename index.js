//Load express module with `require` directive
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const config = require('./constants');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./components/user/route');


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "User-backend API",
            description: "Class",
            contact: {
                name: "santiagocb"
            },
            servers: ["http://localhost:8082"]
        }
    },
    apis: ["index.js",  "./components/user/route.js"]
};

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/users', userRoutes);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(config.APP_PORT, _ => {
    console.log(`User backend listening on port ${config.APP_PORT}!`)
});

mongoose
    .connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(_ => { console.log('MongoDB is connected'); })
    .catch(err => { console.log(err); });
