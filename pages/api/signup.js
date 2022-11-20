import User from '../../models/User.js'
import connectdb from '../../middleware/db.js'

const handler = async (req, res)=>{
    console.log(req.body)
    if(req.method == 'POST'){
        let user = new User(req.body)
        await user.save()
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }
       
  
}
export default connectdb(handler)