const user = require('../config/User');

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

module.exports = getAllUsers;