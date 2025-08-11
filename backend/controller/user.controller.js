const User = require("../model/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


exports.signUp = async(req, res)=>{
    try{
        const {name, email, password} = req.body;
        if(!name || !email  || !password){
            console.log("All Field Require")
            return res.status(300).json({message:"Please provide me all field"})
        }
        const emailCheck = await User.findOne({email});
        if(emailCheck){
            return res.status(300).json({message:"Email Already register"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            name, 
            email, 
            password:hashPass
        })

        await newUser.save()
        return res.status(400).json(newUser )

    }catch(err){
        console.log(err)
    }
}

exports.login = async(req, res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"Please give all field"})
        }
        const userEmail = await User.findOne({email});
        if(!userEmail){
            return res.status(400).json({message:"Please enter auth email"})
        }
        const passCheck = await bcrypt.compare(password, userEmail.password);
        if(!passCheck){
            return res.status(400).json({message:"Please provide me valid pass"})
        }
        const JWT_SECRET = "7834RJKFBL.SDJFHV673R34KJBGWER78FTWE"
        const token = jwt.sign({userEmail}, {JWT_SECRET}, {expiresIn:"7d"})

        return res.status(400).json(token, userEmail)

    }catch(err){
        console.log(err)
    }
}