import User from '../../models/User.js'
import connectdb from '../../middleware/db.js'
const CryptoJS = require("crypto-js");
const handler = async (req, res)=>{
    if(req.method == 'POST'){
        console.log(req.body)
        let user = await User.findOne({"email": req.body.email})
     
        if(user){

            if(req.body.email == user.email && req.body.password == CryptoJS.AES.decrypt(user.password, "Secret123").toString(CryptoJS.enc.Utf8)){

                res.status(200).json({success:true,email:user.email, name: user.name})
            }
            else{
                res.status(200).json({success:false, error:"Invalid credential"})
            }
        }
        else{
            res.status(200).json({success:false,error: "No user found"})
        }
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }
       
  
}
export default connectdb(handler)