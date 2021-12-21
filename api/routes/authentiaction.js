const router=require("express").Router();


const user=require('../models/user')


//Register the API

router.post('/register', async (req,res)=>{
    try{
        const newUser = new user({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        const userRegistration = await newUser.save();
        res.status(200).json(userRegistration)
    }catch(err){
        res.status(500).json({message:err})
    }
});

//login

router.post('/login', async (req,res)=>{
    try{
      const user= await user.findOne({username:req.body.username})
      res.status(200).json({message:"user logged in", user:user})

    }catch(err){
        res.status(500).json({message:err})
    }
})





module.exports=router;