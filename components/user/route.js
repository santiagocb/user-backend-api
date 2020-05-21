const express = require("express");
let router = express.Router();
const userCtrl = require('./controller');

/**
 * @swagger
 *
 * definitions:
 *  User:
 *      type: object
 *      required:
 *          - id
 *          - nickName
 *          - email
 *          - password
 *      properties:
 *          id:
 *              type: string
 *          nickname:
 *              type: string
 *          name:
 *              type: string
 *          email:
 *              type: string
 *          password:
 *              type: string
 *  NewUser:
 *      allOf:
 *          - properties:
 *              _id:
 *                  type: string
 *          - $ref: '#/definitions/User'
 *          - properties:
 *              __v:
 *                  type: integer
 *          - properties:
 *              creationDate:
 *                  type: string
 */


/**
 * @swagger
 *
 * /users:
 *     get:
 *         description: "Returns all users"
 *         produces:
 *             - application/json
 *         responses:
 *             200:
 *                 description: "All users retrieved"
 *                 schema:
 *                     type: array
 *                     items:
 *                         $ref: '#/definitions/NewUser'
 *             404:
 *                 description: "No users found in database"
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 *             500:
 *                 description: "Internal server error"
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 */
router.get('/', userCtrl.getUsers);

/**
 * @swagger
 *
 * /users:
 *     post:
 *         description: "Create a new user"
 *         produces:
 *             - application/json
 *         parameters:
 *         - name: body
 *           in: "body"
 *           required: true
 *           description: "Fields to create a user"
 *           schema:
 *             $ref: "#/definitions/User"
 *         responses:
 *             201:
 *                 description: "User created"
 *                 schema:
 *                     type: object
 *                     properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          $ref: '#/definitions/NewUser'
 *             500:
 *                 description: "Internal server error"
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 */
router.post('/', userCtrl.createUser);

/**
 * @swagger
 *
 * /users/{id}:
 *     get:
 *         description: "Returns a user found by Id"
 *         produces:
 *             - application/json
 *         parameters:
 *         - name: id
 *           in: path
 *           description: "User identification"
 *           required: true
 *           type: "string"
 *         responses:
 *             200:
 *                 description: "User retrieved"
 *                 schema:
 *                     type: object
 *                     properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          $ref: '#/definitions/NewUser'
 *             404:
 *                 description: "No user found in database"
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 *             500:
 *                 description: "Internal server error"
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 */
router.get('/:id', userCtrl.getUserById);

/**
 * @swagger
 *
 * /users/{id}:
 *     put:
 *         description: "Update a user filter by id"
 *         produces:
 *             - application/json
 *         parameters:
 *         - name: id
 *           in: path
 *           description: "User identification"
 *           required: true
 *           type: "string"
 *         - name: body
 *           in: "body"
 *           description: "Fields to update"
 *           schema:
 *             $ref: "#/definitions/User"
 *         responses:
 *             200:
 *                 description: "User updated"
 *                 schema:
 *                     type: object
 *                     properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          $ref: '#/definitions/NewUser'
 *             404:
 *                 description: "No user found in database"
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 *             500:
 *                 description: "Can not update user or internal server error"
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 */
router.put('/:id', userCtrl.updateUserById);

/**
 * @swagger
 *
 * /users/{id}:
 *     delete:
 *         description: "Delete a user found by id"
 *         produces:
 *             - application/json
 *         parameters:
 *         - name: id
 *           in: path
 *           description: "User identification"
 *           required: true
 *           type: "string"
 *         responses:
 *             200:
 *                 description: "User deleted"
 *                 schema:
 *                     type: object
 *                     properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          $ref: '#/definitions/NewUser'
 *             404:
 *                 description: "No user found in database"
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 *             500:
 *                 description: "Internal server error or can not delete a user"
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 */
router.delete('/:id', userCtrl.deleteUserById);

module.exports = router;
