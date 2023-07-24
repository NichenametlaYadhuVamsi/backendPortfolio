let express=require('express')
// let mongoose=require('mongoose')
let path=require('path')
let dotenv=require('dotenv')
let app=express()
let body=require('body-parser')

dotenv.config({
    path:"./data/config.env"
})


 let a=[];
 let cors=require("cors")
const { finished } = require('stream')
// console.log(app.use(cors({origin:'http://127.0.0.1:5500'})))
app.use(cors({
    origin:process.env.FRONT_END
}))
app.use(express.json());
// mongoose.connect(process.env.MONGO_URI,{
//     dbName:"backend"
// }).then(()=>console.log('Connected to Data Base'))
// .catch((err)=>console.log('Got error'+err))
  
// let messageSchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     mobile_numger:Number,
//     email_subject:String,
//     message:String
// })

// const message=mongoose.model("messages",messageSchema)
app.get('/',(req,res)=>{
     res.send(a)
})


app.post('/',async (req,res)=>{
    // await message.create(req.body)
    console.log('finished')
    a.push(req.body);
     console.log(a);
    res.redirect('/');
})
app.listen(3000,()=>{
    console.log('Server started')
})

