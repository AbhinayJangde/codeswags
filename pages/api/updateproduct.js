import Product from '../../models/Product.js'
import connectdb from '../../middleware/db.js'

const handler = async (req, res)=>{
    console.log(req.body)
    if(req.method == 'POST'){
        for(let i=0; i<req.body.length; i++){
            let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }

        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }
       
  
}
export default connectdb(handler)