const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/database');
const Schema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
type:String,
required:true,
    },
    password:{
        type:String,
       required:true,
     },
        isAdmin:{
            type:Boolean,
            default:false,
        }
        ,
   street:{
 type:String,
        },
country:{
type:String,

},
// product:[{
//type:mongoose.Schema.Types.ObjectId,
//ref:'Product',
//}]
})


const user=mongoose.model('User',Schema);
module.exports=user;