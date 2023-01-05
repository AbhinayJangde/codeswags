import mongoose from 'mongoose'

const connectdb =  handler=> async (req,res) =>{
   
    if(mongoose.connections[0].readyState){
        console.log("database connected successfully...")
        return handler(req,res)
    }
    mongoose.connect(process.env.DB_URI)
    return handler(req,res)     
  
}

export default connectdb