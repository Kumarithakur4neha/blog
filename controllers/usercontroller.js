 
 
 const passport=require("passport");
 const usermodel=require("../models/schema")
 const localstrategy=require("passport-local")
 passport.use( new localstrategy(usermodel.authenticate()));
 

 exports.signUppage=async(req,res,next)=>{
     try{
 const newuser=usermodel({
     fullname:req.body.fullname,
     username:req.body.username,
     email:req.body.email,
     
 })

 usermodel.register(newuser,req.body.password)
 res.redirect("/login")
     }
     catch(err){
         console.log(err);
     }
 }
 
 

 exports.signInpage=passport.authenticate('local',{
     successRedirect:'/profile',
  failureRedirect:'/login'
  }),(req,res,next)=>{};


  exports.Logout = async (req,res,next)=>{
    try {
        req.logout(
            ()=>{
                res.redirect("/login")
            }
        )        
    } catch (error) {
        console.log(error);
    }
};