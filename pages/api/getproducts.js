import Product from '../../models/Product.js'
import connectdb from '../../middleware/db.js'

const handler = async (req, res)=>{
    let products = await Product.find()
    res.status(200).json({products})    
  
}
export default connectdb(handler)