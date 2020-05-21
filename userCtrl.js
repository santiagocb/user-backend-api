const userModel = require('./userModel');

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const foundUser = await userModel.findOne({ id: id });
        if(foundUser) {
            return res.status(200).send({data: foundUser, message: 'User found'});
        } else {
            return res.status(404).send({message: 'User could not be found'});
        }
    } catch (e) {
        return res.status(500).send({message: 'Server error'});
    }
}

const createUser = async (req, res) => {
    try {
        let userCreated = await userModel.create(req.body);
        if(userCreated) {
            return res.status(201).send({data: userCreated, message: 'User created'});
        } else {
            return res.status(500).send({message: 'Server error'});
        }
    } catch (e) {
        return res.status(500).send({message: 'Server error'});
    }
}

const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await userModel.deleteOne({ id: id });
        if(deletedUser) {
            return res.status(200).send({message: 'User deleted'});
        } else {
            return res.status(404).send({message: 'User could not be found'});
        }
    } catch (e) {
        return res.status(500).send({message: 'Server error'});
    }
}

const updateUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await userModel.updateOne({ id: id }, req.body);
        if(updatedUser) {
            return res.status(200).send({message: 'User updated'});
        } else {
            return res.status(404).send({message: 'User could not be found'});
        }
    } catch (e) {
        return res.status(500).send({message: 'Server error'});
    }
}

module.exports = {
    getUserById: getUserById,
    createUser: createUser,
    updateUserById: updateUserById,
    deleteUserById, deleteUserById
}