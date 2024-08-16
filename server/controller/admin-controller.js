const user = require('../config/User');
const contacts = require('../config/Contact');

const getAllUsers = async(req,res) =>{
    try {
        const users = await user.find({},{password:0});
        console.log(users);
        if(!users || users===0){
            return res.status(404).json({message:"No users found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getAllContact = async(req,res) =>{
    try {
        const contact = await contacts.find();
        console.log(contact);
        if(!contact || contact.length===0){
            return res.status(404).json({message:"No contact found"});
        }
        return res.status(200).json(contact);
    } catch (error) {
        next(error);
    }
}

module.exports = {getAllUsers,getAllContact};