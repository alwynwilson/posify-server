const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')


// register logic
exports.registerController = async (req,res)=>{
    console.log("inside register function");
    const {username,email,password }= req.body
    console.log(username,email,password);
    try{
        //email is in mongoDb
        const existingUser = await users.findOne({email})
        if(existingUser){
            // already a user
            res.status(406).json("Account already exists, Please LOG IN")
        }else{
            //add or register user : create object for model
            const newUser = new users({
                username,email,password,companyname:"",address:"",contactemail:"",adduser:"",assignrole:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

// login logic

exports.loginController = async (req,res)=>{
    console.log("inside login function");
    const {email, password} = req.body
    console.log(email,password);
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            //token generate
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_PASSWORD)
            res.status(200).json({
                user:existingUser,
                token
            })
        }else{
            res.status(404).json("Invalid Email / Password...")
        }
    }catch(err){
        res.status(401).json(err)
    }
}

// update settings
exports.updateUserController = async (req, res) => {
    console.log('inside update controller');
    const { companyname, address, contactemail, adduser, assignrole } = req.body;
    const userId = req.params
  
    try {
      const updatedUser = await users.findByIdAndUpdate({_id: userId},
        { companyname, address, contactemail, adduser, assignrole, userId },
        { new: true }
      );
      await updatedUser.save()
      res.status(200).json(updatedUser)
    } catch (err) {
      res.status(401).json(err);
    }
  };